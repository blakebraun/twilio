# Twilio Reddit Client

This is a simple application that will prompt the user for their subreddit of choice, then send a text message to the user with the title, author name, photo (if available), and link for the top post in that subreddit today.

## Running the application
- Ensure you have Node.js installed
- Update configuration as per below instructions
- Inside the project directory, run `npm install`.
- Run `node twilio.js` and then enter your subreddit name.

## Configuration
Four variables must be specified by the user as per their Twilio account setup.

- `accountSid` - The user's accountSid provided by Twilio
- `authToken` - The authToken provided by Twilio corresponding to the accountSid
- `toNumber` - The phone number (including country code) that the user has registered with Twilio and would like to use to receive the text message
- `fromNumber` - The phone number that Twilio has provided the user.