const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID |Gifted;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUluSkRrdHl0eEdKQ1JTelRadksrVDA5YTNmTFl1QS9JaHZnYkZWZGtVND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiam42YkZ2UHg3RFU1dUE4dW8vTGw0cXFxOFY3SmxHUFBnUzVOY2NoZWl3UT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNRFBxWGdOL1FxMDRjRy9WREIvVTBhNW1ndGt4WHBmVi9LUzJpUnIwSUdBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvcm1VbFpEbGEySXVRRG5TNXJabmR6RURML0h0UHBXWEdNZGJwM3BGN1JRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhQT3hhUTNKZ1haS1MrKzJESE95MElYc0VBaGwzYno5bXFyZGxqNUl6WG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilk5cnl1clkycWtqYUk4eFRPRG1zZG85UDdJZC8zenc3QWJiSzMrUGwvSHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUVRVVdkb2RKdzFJTms1YWJrTk16NDJIbWdpMjEzWkY0ZDZnUEZBWEpVQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU9WOEVvbE5IalNTZ1RZdWRoeTFLMWcvdWV4VU0rd0xtRGszeloxWmdrND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilc1MFF5czZlM2k0SzdsVXlhdDhtZ0s4Rjloc1Y2ckt4KzloN3RoQk5aZDRtcXQ4aW0zZDF5NGtSM001aXBhOUdBTWlrSzhzZVpObzBBZXV2aVhlVEJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY3LCJhZHZTZWNyZXRLZXkiOiIxNmJPdVJZcTJJaGxkNlQrVlAzU1BqSWplYWdXdU5aNFNqUmJYSHRXd2hvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzMzUzODI1MzEzOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBOEYwQ0YxNkJDNjYzNjIzRUZCMTZCREQzMDRCMzUxMSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE3MTM1OTE0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzM1MzgyNTMxMzhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDgzMDI3RjQ3N0U0RTg5RkRGNEMzRDQyMDY0MjU0MjYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxNzEzNTkxNH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoienpudzd6S2xUT2FrQ1UzS244aHBaZyIsInBob25lSWQiOiIxODk0Nzk0Ni0yMDRlLTQ1ZDEtODhlYS1jZGY3MmY1M2YxMjQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicWJHVDRiK0dnbFgxakU4aEpNSGQvN01rWVZnPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1odEpJaTQvZzlZbHIzT0tyMzJrbWlQSTgvUT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJYSFEyMVZTVyIsIm1lIjp7ImlkIjoiMjMzNTM4MjUzMTM4OjdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2ZvPCdlaMu8J2ZtfCdmp7wnZqX8J2al/CdmqIg8J2ZvPCdmo7wnZqW8J2ajvCdlaQg8J2agPCdmp7wnZqY8J2anfCdmo7wnZWkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQYi94WnNIRUpuVTViSUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJRcDBJVFh4enlBU2ZXNFdjSlpqSFJSQ3ZEWm9lL3pJeldQNzRnNGxHYWxvPSIsImFjY291bnRTaWduYXR1cmUiOiJvdWZSazNZdkx4SXpIWFZtc3BqYytiYTBBd2RGVkkvTEtFOWNqLzZsTnJtNVVvWUsrWTJKZDVscFVZbEYxckNEV2xYY0xxeDF1VDBqMWRPSGlFR25CUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWkY2TWpGVkdKVm9aNHN1UGRpZ2RqUXhEMmdlNGZJMHliUEF3SkhYRzRSOElVV3lsS1ppenRPSFl3S3N2TUk0Nk1ycDVaVGd3UDAveTZKME5oc3lwQ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzM1MzgyNTMxMzg6N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVS2RDRTE4YzhnRW4xdUZuQ1dZeDBVUXJ3MmFIdjh5TTFqKytJT0pSbXBhIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE3MTM1OTExLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFZayJ9| 'Gifted;;;',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Sofa Godd",
    NUMERO_OWNER : process.env.OWNER_NUMBER || "23353825138,233538253138", 
             
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
AUTOREAD_MESSAGES: process.env.AUTO_READ_MESSAGES || "no",
CHATBOT: process.env.CHAT_BOT || "no",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'Sofagodd',
    OPENAI_API_KEY : process.env.OPENAI_API_KEY || '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',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/a202f454c9532c3f5b7f8.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_API_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '5' ,
    PRESENCE : process.env.PRESENCE || 'online',
    //GPT : process.env.OPENAI_API_KEY || '',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
