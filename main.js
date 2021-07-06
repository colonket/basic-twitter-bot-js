var dotenv = require('dotenv');
var Twitter = require('twitter');
dotenv.config();

const client = new Twitter({
	consumer_key: process.env.TWITTER_API_KEY,
	consumer_secret: process.env.TWITTER_API_KEY_SECRET,
  	access_token_key: process.env.TWITTER_ACCESS_TOKEN,
 	access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
})

function main(){
	//sendTweet("Tweet text goes here");
}

function sendTweet(status_text){
	client.post(
		'statuses/update',
		{status:status_text},
		function(err, data, res) {
			if (err) {
				console.log(err);
			}
		}
	); 
}

main();
