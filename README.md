# WhatsGPT

A ChatGPT WhatsApp Bot.

- Install all dependencies with `npm i -y`
- Set your OpenAI API-Key on `.env` file
- Authenticate with your WhatsApp by scanning the QR Code that will show up in the terminal.

### Building the code

- First run `npm run build`
- Then run the app with `npm start`

### Running for tests
- Run the app with `npm run dev`

> _You may have to run the app twice, since there is a sort of bug on the Baileys dependency. So follow this steps if this is the case:_

- Scan the QR Code and wait until the scan screen closes
- Stop the app on the terminal with `Ctrl + C`
- Run the app again
