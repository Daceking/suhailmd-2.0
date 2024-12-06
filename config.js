const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_43_12_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc4LFxuICAgICAgICA3NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTYzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMixcbiAgICAgICAgNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDM4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDM2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjksXG4gICAgICAgIDI5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTYxLFxuICAgICAgICA0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTEwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDQsXG4gICAgICAgIDU0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDU0LFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTAyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDUyLFxuICAgICAgICAxNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc0LFxuICAgICAgICA1NixcbiAgICAgICAgMTEyLFxuICAgICAgICA4MixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTI2LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjYsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTY5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5LFxuICAgICAgICAxODgsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDMzLFxuICAgICAgICAzLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2NixcbiAgICAgICAgMzYsXG4gICAgICAgIDU0LFxuICAgICAgICAzMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMixcbiAgICAgICAgMjQ2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzcsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTksXG4gICAgICAgIDMzLFxuICAgICAgICAxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU1LFxuICAgICAgICA2MixcbiAgICAgICAgMTE2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU3LFxuICAgICAgICA0NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgODksXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxODAsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiR1F3ckgrK0pNK1NqQ1ozSzBCRFlESnRNSk03VnFKK1p0cCtxaURUSDlDTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVG1UelMtWG1TT3F2ejZpNUV5Njhld1wiLFxuICBcInBob25lSWRcIjogXCIxYmM2YTRiMC0zZTM4LTRmNDEtYjAwNS0wMjZjYWI1YjUwYTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODgsXG4gICAgICA1MixcbiAgICAgIDIyMyxcbiAgICAgIDI0NyxcbiAgICAgIDM1LFxuICAgICAgMTczLFxuICAgICAgMTMzLFxuICAgICAgMTEzLFxuICAgICAgNjAsXG4gICAgICA3MSxcbiAgICAgIDc4LFxuICAgICAgMTcyLFxuICAgICAgMjIsXG4gICAgICAxMzcsXG4gICAgICAxMDksXG4gICAgICAxNDMsXG4gICAgICAyLFxuICAgICAgNjMsXG4gICAgICAzNSxcbiAgICAgIDY4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExOCxcbiAgICAgIDE1MSxcbiAgICAgIDE0MyxcbiAgICAgIDI0MCxcbiAgICAgIDE1MixcbiAgICAgIDIyLFxuICAgICAgMTk3LFxuICAgICAgMjQ3LFxuICAgICAgMjUsXG4gICAgICAyMDIsXG4gICAgICAxMzMsXG4gICAgICAxOTYsXG4gICAgICA3NCxcbiAgICAgIDIxOCxcbiAgICAgIDYyLFxuICAgICAgMTE4LFxuICAgICAgNTQsXG4gICAgICA5MyxcbiAgICAgIDI0NixcbiAgICAgIDE0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFTTdXV1FMS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE2NTY2MTk1OTo2MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlJFQUxfTFVSREJFRVwiLFxuICAgIFwibGlkXCI6IFwiNzMzNTQyNDk4MDU4MzU6NjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWJSemNFRkVQRzV5cm9HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJia2V4ZVZLV0FpcGQrcHVjOTdtR3FBUXdFbUxURmNobFdlVmVaaXZhZW40PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImx4bHVCb1hBZDdyYUsyaTd0SVhoWVorM1c4WXY4eFJSNFplb3Q4d2ozcG9TZE5EcndGdmt0VFFCQTJhdFE2am9OdG9yVWNoMTFFeWt4a1lNclNsQ0J3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIktadDNBSWZ6NnJQYm1GeXBJNmljTWYxNW8yUWRMQzhEVXhXQ3M4TXFUbHJKbHdvNWhOMUZ4UXJIT2tYWjRzU3ZMaUgyaUNRUCtraDhOQ1dZNHUxa2h3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNjU2NjE5NTk6NjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM0NjczODMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEWnVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURadS5qc29uIjogIntcImtleURhdGFcIjpcIk5Rd21Wb0VFOHRKUXJDU3czM3RmNlVYd3R3S3ZTSGJWZVg1eWhMN0hTLzQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ3OTc2NDEwMSxcImN1cnJlbnRJbmRleFwiOjgsXCJkZXZpY2VJbmRleGVzXCI6WzAsOF19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
