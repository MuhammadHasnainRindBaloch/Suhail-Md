const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@cluster0 .t1wsjlv.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𓆩⋆𝐙𝐈𝐃𝐃𝐈 𝐊𝐈𝐍𝐆 𝐁𝐀𝐋𝐎𝐂𝐇⋆𓆪" 


global.devs = "923066671786" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923066671786";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923066671786,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_30_06_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDgyLFxuICAgICAgICA4MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDksXG4gICAgICAgIDU5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDksXG4gICAgICAgIDk5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDY0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTQzLFxuICAgICAgICA4OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjM2LFxuICAgICAgICA5MixcbiAgICAgICAgNTksXG4gICAgICAgIDcsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgODEsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyNixcbiAgICAgICAgMjI2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTksXG4gICAgICAgIDg0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDk3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzksXG4gICAgICAgIDU4LFxuICAgICAgICA2MixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTksXG4gICAgICAgIDM1LFxuICAgICAgICA1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI4LFxuICAgICAgICAzMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDczLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1LFxuICAgICAgICAxNixcbiAgICAgICAgNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDcsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyNixcbiAgICAgICAgOTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQyLFxuICAgICAgICA4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDY5LFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMsXG4gICAgICAgIDEzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjksXG4gICAgICAgIDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDM2LFxuICAgICAgICAxODksXG4gICAgICAgIDk3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTksXG4gICAgICAgIDg4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDksXG4gICAgICAgIDExNixcbiAgICAgICAgNDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwid2M5ODErTzRwYTRhVE5GbEl0cndzVmtQR2wyME96SGdNU3IvV1BMK09mVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOTlYUjdBMDZRZS16emZCbzRUV0R6UVwiLFxuICBcInBob25lSWRcIjogXCI0MzI0MGM2Ny1kNzhhLTQzZGItODM3Mi1lNTJkNzg3MDU0ZjBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzcsXG4gICAgICAzNixcbiAgICAgIDIzNyxcbiAgICAgIDE0NyxcbiAgICAgIDI1MCxcbiAgICAgIDE1OCxcbiAgICAgIDI3LFxuICAgICAgMzEsXG4gICAgICAyMDgsXG4gICAgICAyMzMsXG4gICAgICA0NSxcbiAgICAgIDQ4LFxuICAgICAgMTYzLFxuICAgICAgOTcsXG4gICAgICAxMjQsXG4gICAgICAxNDEsXG4gICAgICAxNDcsXG4gICAgICAxNDcsXG4gICAgICA2NyxcbiAgICAgIDEyN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTksXG4gICAgICA2NixcbiAgICAgIDgxLFxuICAgICAgMjIyLFxuICAgICAgMTg4LFxuICAgICAgMTA2LFxuICAgICAgMTMxLFxuICAgICAgMjAxLFxuICAgICAgMjE2LFxuICAgICAgMjE4LFxuICAgICAgMTM0LFxuICAgICAgMTk3LFxuICAgICAgNTEsXG4gICAgICA0MixcbiAgICAgIDM4LFxuICAgICAgODEsXG4gICAgICAzNCxcbiAgICAgIDE3OSxcbiAgICAgIDEwNixcbiAgICAgIDg3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkQzUFRCRlI4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNjY2NzE3ODY6NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZCZ8J2QiPCdkIPwnZCD8J2QiCDwnZCK8J2QiPCdkI3wnZCGIPCdkIHwnZCA8J2Qi/CdkI7wnZCC8J2Qh1xcbiAgICDii4ZcXG4gICAg4ouGXFxuICAgIOKLhlxcbiAgICDii4ZcXG4gICAg4ouGXFxuICAgIOKLhlxcbiAgICDii4ZcXG4gICAg4ouGXFxuICDwk4ap4oG34oG44oG28JOGqlwiLFxuICAgIFwibGlkXCI6IFwiNTczNDI1Mjc4MTU3OTI6NDhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUNFcGRNQ0VJU0ZyTE1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXWUZlbHZuZlBoNVc0Q214UDNVQk9TMlhkcXdjQlNDaGpTNk9Iak5WRjFjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNmKzhhNlF5Nzhwc1FwVWgrSldqQkFla3IyVUhLVngxeUFwWnI5eEU0NXc0cUxmaVI1a2Era1IwZE9FMXpRanhoMi9XRHVIa0VYaEVpeGhLV3Z5MUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImpRZkN2SDBJZ0I4bXVUT01tTUtrZU5GZGczMHQ5bGgrRU8yZ0pLdk5ybzhOb1M0dGtQNGRlNGJ2NHVHVFlXdzNSYXhOZ0l2alQ3Uytrd3BKYithZmlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA2NjY3MTc4Njo0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODI4OTAzMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9xOFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT3E4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwibVpoMGNVbWhXUWxjMWNiQkZqY0JKdm4rdlUzOXRXQ2RMTDJqakE4Sk1HOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTE1NDEyNDgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODI4OTAzNjcxMlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『𓆩⋆𝐙𝐈𝐃𝐃𝐈 𝐊𝐈𝐍𝐆 𝐁𝐀𝐋𝐎𝐂𝐇⋆𓆪』```", //*『𓆩⋆𝐙𝐈𝐃𝐃𝐈 𝐊𝐈𝐍𝐆 𝐁𝐀𝐋𝐎𝐂𝐇⋆𓆪』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𓆩⋆𝐙𝐈𝐃𝐃𝐈 𝐊𝐈𝐍𝐆 𝐁𝐀𝐋𝐎𝐂𝐇⋆𓆪",
  ownername:process.env.OWNER_NAME|| "𓆩⋆𝐙𝐈𝐃𝐃𝐈 𝐊𝐈𝐍𝐆 𝐁𝐀𝐋𝐎𝐂𝐇⋆𓆪",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
