#!/usr/bin/env node

"use strict";

process.env.SLS_DEV_LOG_MODE = 1;
process.env.SLS_LOG_LEVEL = "debug";

require("@serverless/utils/log-reporters/node");

const { log, progress, style, writeText } = require("@serverless/utils/log");
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const mainProgress = progress.get("main");

log.notice();
log.notice(`Deploying myapp in stage dev ${style.aside("(us-east-1)")}`);
log.notice();
log.warning("Duplicate plugin some-plugin was not loaded");

log.info();
log.info("Updating CloudFormation stack");
log.info(
  style.aside(
    `  UPDATE_IN_PROGRESS - AWS::CloudFormation::Stack - myapp-dev`,
    `  UPDATE_IN_PROGRESS - AWS::Lambda::Function - HelloLambdaFunction`,
    `  UPDATE_COMPLETE - AWS::Lambda::Function - HelloLambdaFunction`,
    `  CREATE_IN_PROGRESS - AWS::Lambda::Version - HelloLambdaVersionxo7mVIrb5qrFjIjhs7GmYITXR7zJ5sH0JkO8kC2tb4s`,
    `  CREATE_IN_PROGRESS - AWS::Lambda::Version - HelloLambdaVersionxo7mVIrb5qrFjIjhs7GmYITXR7zJ5sH0JkO8kC2tb4s`,
    `  CREATE_COMPLETE - AWS::Lambda::Version - HelloLambdaVersionxo7mVIrb5qrFjIjhs7GmYITXR7zJ5sH0JkO8kC2tb4s`,
    `  UPDATE_COMPLETE_CLEANUP_IN_PROGRESS - AWS::CloudFormation::Stack - myapp-dev`,
    `  DELETE_SKIPPED - AWS::Lambda::Version - HelloLambdaVersion8XeTw8dmeCepXt2KSltXLxzAn2z8aH4w7yi4yX9Aq4`,
    `  UPDATE_COMPLETE - AWS::CloudFormation::Stack - myapp-dev`
  )
);

log.notice();
log.notice(
  `${style.noticeSymbol("✔")} Service deployed to stack myapp-dev ${style.aside(
    "(31s)"
  )}`
);

log.notice();
log.notice(
  `${style.noticeSymbol("∅")} No changes to deploy. Deployment skipped.`
);

writeText();
writeText(
  style.aside("functions:"),
  "  publisher: myapp-dev-publisher",
  "  jobsWorker: myapp-dev-worker",
  style.aside("endpoints:"),
  "  GET - https://3fr81y9fpa.execute-api.us-east-1.amazonaws.com/"
);

log.notice();
log.notice(
  style.aside(
    'Toggle on monitoring with the Serverless Dashboard: run "serverless"'
  )
);

log.error();
log.error("Stack myapp-dev failed to deploy");

writeText();
writeText(
  style.aside(
    "Environment: darwin, node v15.14.0, framework v2.51.2, plugin v5.4.3, SDK v4.2.3",
    "Credentials: Serverless Dashboard (https://app.serverless.com/myorg/apps/myapp/myapp/settings/providers)",
    "Docs:        docs.serverless.com",
    "Support:     forum.serverless.com",
    "Bugs:        github.com/serverless/serverless/issues"
  )
);

writeText();
writeText(
  style.error("Error:"),

  `UPDATE_FAILED: HelloLambdaFunction ${style.aside(
    "(AWS::Lambda::Function)"
  )}"`,
  "Resource handler returned message: \"Value nodejs12.xa at 'runtime' failed to satisfy" +
    " constraint: Member must satisfy enum value set: [java8, java11, nodejs10.x, nodejs12.x, " +
    "python2.7, python3.6, python3.7, python3.8, dotnetcore2.1, go1.x, ruby2.5] or be a valid ARN.",
  "",
  style.aside(
    "View the full error: https://us-east-1.console.aws.amazon.com/cloudformation/" +
      "home?region=us-east-1#/stack/detail?stackId=arn%3Aaws%3Acloudformation%3A" +
      "us-east-1%3A416566615250%3Astack%2Fmyapp-dev%2F8f271030-bbec-11eb-b27c-0a4ced5e22b5"
  )
);

writeText();
writeText("2 deprecations triggered in the last command:");
writeText();
writeText(
  'Detected ".env" files. In the next major release variables from ".env" files will be ' +
    'automatically loaded into the serverless build process. Set "useDotenv: true" ' +
    "to adopt that behavior now.",
  style.aside(
    "More Info: https://www.serverless.com/framework/docs/deprecations/#LOAD_VARIABLES_FROM_ENV_FILES"
  )
);

log.notice();
log.notice("Press Ctrl+C to stop demo");

(async function demoProgress() {
  mainProgress.notice("Packaging");
  await wait(2000);
  mainProgress.notice("Creating CloudFormation Stack");
  await wait(2000);
  mainProgress.notice("Uploading");
  await wait(1000);
  mainProgress.notice("Uploading (0/5)");
  progress.get(1).notice("Uploading function1.zip to S3 (82 KB)");
  progress.get(2).notice("Uploading function2.zip to S3 (32 KB)");
  progress.get(3).notice("Uploading function3.zip to S3 (62 KB)");
  await wait(2000);
  mainProgress.notice("Uploading (1/5)");
  progress.get(2).remove();
  progress.get(4).notice("Uploading function4.zip to S3 (82 KB)");
  await wait(1000);
  mainProgress.notice("Uploading (2/5)");
  progress.get(3).remove();
  progress.get(5).notice("Uploading function5.zip to S3 (82 KB)");
  await wait(1000);
  mainProgress.notice("Uploading (3/5)");
  progress.get(1).remove();
  await wait(1000);
  progress.get(4).remove();
  mainProgress.notice("Uploading (4/5)");
  await wait(1000);
  progress.get(5).remove();
  mainProgress.notice("Uploading (5/5)");
  await wait(1000);
  mainProgress.notice(`Updating CloudFormation Stack ${style.aside("(0/9)")}`);
  let counter = 0;
  while (++counter < 10) {
    await wait(1000);
    mainProgress.notice(
      `Updating CloudFormation Stack ${style.aside(`(${counter}/9)`)}`
    );
  }
  await wait(1000);
  mainProgress.notice("Updating");
  await wait(2000);
  await demoProgress();
})();
