const twilio = require('twilio');
const axios = require('axios');
const readline = require('readline');

let accountSid = process.env.TWILIO_ACCOUNT_SID;
let authToken = process.env.TWILIO_AUTH_TOKEN;
let toNumber = process.env.TWILIO_TO_NUMBER;
let fromNumber = process.env.TWILIO_FROM_NUMBER;

let client = new twilio(accountSid, authToken);

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("What subreddit would you like to choose? ", subreddit => {
    axios.get('https://www.reddit.com/r/' + subreddit + '/top.json?limit=1')
    .then(res => {
        let postData = res.data;
        const firstPost = postData.data.children[0].data;
        let title = firstPost.title;
        let permalink = "https://reddit.com" + firstPost.permalink;
        let author = firstPost.author

        let message = "Top Post on r/" + subreddit + " today titled: \n\n '" + title + "' \n\n" +
        "from u/" + author + "\n\n" + permalink;

        let imageTypes = ['.gif', '.png', '.jpeg', '.jpg'];
        let imageUrl = undefined;
        imageTypes.forEach(type => {
            if(imageUrl === undefined && firstPost.url.toLowerCase().includes(type)) imageUrl = firstPost.url;
        })

        client.messages.create({
            body: message,
            mediaUrl: imageUrl !== undefined ? [imageUrl] : [],
            to: toNumber,
            from: fromNumber
        })
        .then(message => console.log("Message sent with SID: " + message.sid))
        .catch(error => console.log(error.message));
    })
    .catch(err => console.log(err.message));
    
    r1.close();
});
