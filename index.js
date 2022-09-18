var fileSystem = require("fs");
const ngrok = require('ngrok');
const api = ngrok.getApi();

(async function() {
    const url = await ngrok.connect();
    console.log(url);

    fileSystem.writeFile('ngrokURL.txt', url, err => {
    if (err) {
    console.error(err)
    return
    }
    console.log("Wrote URL to ngrokURL.txt");
})
  })();

