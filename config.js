const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/vajirabot1/KING-VAJIRA-MD'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '94779554677'
global.devs = '94766943622';
global.website = 'https://github.com/vajirabot1/KING-VAJIRA-MD' //wa.me/+25000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/fb7993e24f7ecdaecbed5.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'VAJIRA 𝐁𝐨𝐭 MD' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Pulina_X' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? 'VAJIRA;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUN3T1BUcTdXNmg0WEFGK2IzaFhqSmdRSzRGNC9ESXlKajRud0NwaTkxYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidjNIbm9oQXc1TUlrcDdZZGdpSVVYd0R6K3VnblVhVWw3NUthVEtyQnZqVT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLQ1FOdFAwSm1heEM5MGZ4UmN5bUxRN29VemttZm9HSHMvazBCRXlDOFZrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnWTk3c1lzNkNqR09JV3c2S082SWUzYXVXMkpqaVJMN3AwaGxxeUtXUGlnPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRPQ01qaGRTa1ZUcGpraDRXcjBWanJEMjBqK2QxYk1lY2NIM0dHNXV4VWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjV1Rkt6TVA5a01Xb3lkS1FyajhVbWI3RGYzdndqYjQrQjBoQmZJZkxyalE9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnZG9xcWJTSHFTY2FnSUVOQXpET0UwblNYYXRnYnFhZjFkbXU4UUNGR1Jjb005eUIrc09PdXUwVEMrbU9yMEFNb2ptWEtYdVhPMnc3dHNnNGdCUW5nZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjU3LCJhZHZTZWNyZXRLZXkiOiIwTUFWNDFCQ3ZlQTh2ZTlvR0FzRzA5K1luOWkyTXBFN1hWcTRkbG5RRnB3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ5YndoazNnOFJVcWZ0cVBLUVlDOGV3IiwicGhvbmVJZCI6IjFmYzMwZDhiLTcwZjgtNGE5NS04ZjhhLTJhZWQ2YjhhNTBlYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrdzEzTjVZYkNBZnV3bTROMitnUDFkbEU5L3M9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InY4MTN5Z3orT2VzcVk2bnhRRkRhNW5sNVBoZz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0wvNXJRRVF0NGJPcWdZWUFRPT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMTZtSGtLYUR2YnZ1RG9CWENIWTBSQ0w1ZGh0RXZZNTB3SmRjRkN4QkEwND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiU2F1bW9xZk1mTzBHTUVnYTJKbG1UdjJVQnpVUFZpTE5yR1I1dDlMZk9rWlpMVUdXMTNUSjlaNmJINitsOWRvUXhsUlowdzB1RkVsTjh2TFI0WXFEQVE9PSIsImRldmljZVNpZ25hdHVyZSI6Im5HdUhPaTdLQ2d5Yms4L0ZYKzQ5VDg1cGhpc2FTUUdyTDdDakpuSlNUZGlCQWVlZ0U1QkpkcG5JMVZwWFIyYlhwUHRSSVRsdFZwU2h4ZmhSUEhZVmhBPT0ifSwibWUiOnsiaWQiOiI5NDc3OTU1NDY3NzoyM0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLhtI3KgM2lzaUgypzhtIDNo82j6pyxzavNq+G0nOG0oeG0gCDhtI/qnLDhtIQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3Nzk1NTQ2Nzc6MjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZGVwaDVDbWc3Mjc3ZzZBVndoMk5FUWkrWFliUkwyT2RNQ1hYQlFzUVFOTyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTY5OTk3MTg5OX0=' : process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'vajira' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'VAJIRA-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  autosticker: process.env.AUTO_STICKER  === undefined ? false : process.env.AUTO_STICKER ,
  autovoice: process.env.AUTO_VOICE  === undefined ? false : process.env.AUTO_VOICE ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'VAJIRA',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
