const AWS = require("aws-sdk");

const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async function(event, context) {
    const data = await dynamo.scan({
        TableName: process.env.TABLE_NAME,
    }).promise();
    const body = {};
    for (const item of data.Items) {
        body[item.id] = {
            commentCount: item.commentCount
        };
    }

    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    };
}
