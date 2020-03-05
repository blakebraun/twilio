# Twilio Reddit Client

This is a simple application that will prompt the user for their subreddit of choice, then send a text message to the user with the title, author name, photo (if available), and link for the top post in that subreddit today.

## Running the application
- Ensure you have Node.js installed
- Update configuration as per below instructions
- Inside the project directory, run `npm install`.
- Run `node twilio.js` and then enter your subreddit name.

## Configuration
Four variables must be specified by the user as per their Twilio account setup. You need to export them to a `twilio.env` file. To do so, run `echo "export TWILIO_ACCOUNT_SID='ACXXXX'" > twilio.env` for each environment variable below, with the actual value that you would like to use. Node that after the first `echo`, you'll need to use `>>` instead of `>` to add to the `twilio.env` file. 

Example:
```
echo "export TWILIO_ACCOUNT_SID='ACXXXX'" > twilio.env
echo "export TWILIO_AUTH_TOKEN='XXXX'" >> twilio.env
```

Make sure that you also run `source ./twilio.env` to apply the environment variables.

The `twilio.env` file is ignored by git by default.

Variables: 

- `TWILIO_ACCOUNT_SID` - The user's accountSid provided by Twilio
- `TWILIO_AUTH_TOKEN` - The authToken provided by Twilio corresponding to the accountSid
- `TWILIO_TO_NUMBER` - The phone number (including country code) that the user has registered with Twilio and would like to use to receive the text message
- `TWILIO_FROM_NUMBER` - The phone number that Twilio has provided the user.