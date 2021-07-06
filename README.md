# basic-twitter-bot-js

A simple setup for a twitter bot that lets you send tweets with a function, all you need is to register a twitter bot and add its keys to a `.env` file

## Set up

Once you've registered a Twitter developer account, you can store your bot's keys in a file named `.env`

The contents of `.env` may look like:
```
TWITTER_API_KEY=...
TWITTER_API_KEY_SECRET=...
TWITTER_ACCESS_TOKEN=...
TWITTER_ACCESS_TOKEN_SECRET=...
```
Where the `...` are replaced with the your secret values.

Make sure you don't accidentally upload your `.env` file! The `.gitignore` that comes with this repo includes `.env` in its list of files to ignore, so make sure to include `.env` if you use your own `.gitignore` file.
