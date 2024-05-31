const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID |Gifted;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0ZPZ1ZLYjVwWUJYUDlBOUtkd3AyWCtGUTVBMThFN0lzSlh4ZXZSSFVVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiLzVscXVtUXpCVWhCc2JNYmh5MzIwWk15aTJUN095Uno5Vmd3SjZlUWIxZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJUHY5TjA0S0luQ1lseVRVT3dwUlRNVEhwMHQ3bUg4UWZ4MkFBN2xYSUhRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHOWZuZ0pQcE5rWVF0Z283cEN4KzR6b0NwMHEyTmZpUjczdHA5R1lMNlEwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVKZzNvTjNiK2ZFUVdFMno1T0xVMTFvM0NZTkU2amNic1ZnT1RPSHhXbTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFOYWxsZUgvMGNUTjhGZ0EwYjhTNnZlSzROMCtWNno0Mks4NW1rSjdjWFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlBsR2Z6WDBCRkFTRHN3ZTFZOEthNzVhRERXYndTckdtVmRjNit4bWVYVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTFB2WkJmU202REpCTEQ4NnhpSFFDdWpzY3ZLV2owSCtsTjNFbmwwOEx6ND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllnS0YzT1l3TEtpekVsS0xzWXA5WndEaWpzT2xYWThGbmI1NTlYZU9sQmdEMGVFczFMZzQ1R0doZUtmczIwMzZoOUUreUR0cDExSzN5Ym5VU0ExaUJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTksImFkdlNlY3JldEtleSI6ImxDNVUwY0RKN2FlSzZNbXRRTEhveFNjMGV4TlZuSTJGbU9taVZvQ2RhaUU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjMzNTM4MjUzMTM4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijc4RDRCQTU2Mzg5MjdDMjk3OEFBMzQyM0E1QkJDREVBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTcxMTY4MzJ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzMzUzODI1MzEzOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzNTIyNUE2NTQwMUMyQUY3N0U0REYyRUJBODY4OUEyRiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE3MTE2ODMzfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJNZXlIVTJBUlFsMnFva2lJdzFPR0V3IiwicGhvbmVJZCI6IjI3MTI2OWM0LWM0NmUtNGI2YS1iZDdlLTc5YTkxNmYyZDEzZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlcHZCczRLc3AzRGlCaU5mUERqcnQ4Z1VnMlU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYjl1aE5lUHlDd1RWVHptWVlCbklSSDJpaXowPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlI5S05KSlFGIiwibWUiOnsiaWQiOiIyMzM1MzgyNTMxMzg6NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZm88J2Voy7wnZm18J2anvCdmpfwnZqX8J2aoiDwnZm88J2ajvCdmpbwnZqO8J2VpCDwnZqA8J2anvCdmpjwnZqd8J2ajvCdlaQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01TazF0Y0RFSkcvNUxJR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImxDdzV3MDdycHY5Vkg2enpVZU1xQ1piQktES1dwaFhPdWxBRHZ3S3cxQ0U9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik1OeFQxR25zcXM1VVlYa0twZGJyVWVobitMZFVZZW13T1NDWVFoL2lnMkJpSVhoakxxSWErQXdsN01DS1JIR1A3eTVwQlkxNm1QM2liZUk5cTg3eUNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJsdjV5TVcvYm9MNWIwanMrd0tseU9oa2pIQ2FJUVJLSFdEN29hZUdiZ1IxMGRqVjNpdmZJNWR5K2VYUXFzNTJZVCtnZVgwUXdaSFVYb2VYblBqWXhDUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzMzUzODI1MzEzODo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpRc09jTk82NmIvVlIrczgxSGpLZ21Xd1NneWxxWVZ6cnBRQTc4Q3NOUWgifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTcxMTY4MzEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSHdVIn0=| 'Gifted;;;',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Gifted Tech",
    NUMERO_OWNER : process.env.OWNER_NUMBER || "2335383132,233538253138", 
             
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
