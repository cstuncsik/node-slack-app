const dotenv = require('dotenv')
const { App } = require('@slack/bolt')

dotenv.config()

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 8080)

  console.log('⚡️ Bolt app is running!')
})()
