const { Octokit, App, Action } = require("octokit");
const AWS = require("aws-sdk");

const dynamo = new AWS.DynamoDB.DocumentClient();
const github = new Octokit({
    auth: process.env.GITHUB_TOKEN_READ,
});

exports.handler = async function(event, context) {
    const data = await github.graphql(`query {
        repository(owner: "serverless", name: "cli-design") {
            discussions(first: 10) {
                nodes {
                    # type: Discussion
                    number
                    comments(first: 100) {
                        totalCount
                        nodes {
                            replies {
                                totalCount
                            }
                        }
                    }
                }
            }
        }
    }`);
    const discussions = data.repository.discussions.nodes;

    for (const discussion of discussions) {
        const commentCount = discussion.comments.totalCount + discussion.comments.nodes.reduce((result, currentNode) => {
            return result + currentNode.replies.totalCount;
        }, 0);
        console.log(discussion.number, commentCount);

        await dynamo.put({
            TableName: process.env.TABLE_NAME,
            Item: {
                PK: `discussions-${discussion.number}`,
                SK: `discussions-${discussion.number}`,
                id: discussion.number,
                commentCount,
            }
        }).promise();
    }
}
