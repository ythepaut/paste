console.info("Writing environment variables...");
require("dotenv").config()
const environment = {
    production: process.env["PASTE_MODE"] === "production",
    firebase: {
        apiKey: process.env["PASTE_FIREBASE_API_KEY"],
        authDomain: process.env["PASTE_FIREBASE_AUTH_DOMAIN"],
        databaseURL: process.env["PASTE_FIREBASE_DB_URL"],
        projectId: process.env["PASTE_FIREBASE_PROJECT_ID"],
        storageBucket: process.env["PASTE_FIREBASE_STORAGE_BUCKET"],
        messagingSenderId: process.env["PASTE_FIREBASE_MESSAGING_SENDER_ID"],
        appId: process.env["PASTE_FIREBASE_APP_ID"]
    }
};
const envFile = `export const environment = ${JSON.stringify(environment)};`

const fs = require("fs");
if (!fs.existsSync("src/environments"))
    fs.mkdirSync("src/environments");
fs.writeFile("src/environments/environment.ts", envFile, (err: any) => {
    if (err)
        console.error(`Failed to write environment file.\n${err}`);
    else
        console.info("Done.")
});
