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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_28_06_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYxLFxuICAgICAgICA0NixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTcsXG4gICAgICAgIDY4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjksXG4gICAgICAgIDQwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIwLFxuICAgICAgICA1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDcwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTA4LFxuICAgICAgICA3NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODEsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjksXG4gICAgICAgIDEzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTcyLFxuICAgICAgICA2MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjI1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTk1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDU0LFxuICAgICAgICA0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDg4LFxuICAgICAgICAyLFxuICAgICAgICA5MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTA3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAzNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDk0LFxuICAgICAgICAyNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDU2LFxuICAgICAgICA5MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNixcbiAgICAgICAgMTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDcsXG4gICAgICAgIDgzLFxuICAgICAgICA5MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDcyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTksXG4gICAgICAgIDM5LFxuICAgICAgICAxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzksXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImNLanpZSko3czFzWWlPdjNzRGJ1SGIrTFQwNFc2clcwVVB1ZWVxYzQ0V1k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDY2NjcxNzg2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGMTZGNDNFQzFDRDYwQ0UxMjJCRjlEQUU2QkUzN0Y3MVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTczOTk3MDBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZHNnbC1nQ05UOTZvYVluMDV4QkVVQVwiLFxuICBcInBob25lSWRcIjogXCIxNGM1ZTIzYi0zODE3LTRmNDEtYTM3Yi0yYjhjZmU5N2I2MzZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ3LFxuICAgICAgMjEsXG4gICAgICAxNDQsXG4gICAgICAxNjIsXG4gICAgICAxNjgsXG4gICAgICAxOTQsXG4gICAgICAxNzgsXG4gICAgICAxNjQsXG4gICAgICAxODQsXG4gICAgICAxMSxcbiAgICAgIDIxMyxcbiAgICAgIDE4LFxuICAgICAgMTY5LFxuICAgICAgMTIxLFxuICAgICAgNjAsXG4gICAgICAyMTUsXG4gICAgICAxMDYsXG4gICAgICAxMDAsXG4gICAgICAxNzYsXG4gICAgICAxNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzQsXG4gICAgICAxNCxcbiAgICAgIDExNSxcbiAgICAgIDUzLFxuICAgICAgNzYsXG4gICAgICAxMDksXG4gICAgICA3MCxcbiAgICAgIDQ1LFxuICAgICAgMjA5LFxuICAgICAgMTc5LFxuICAgICAgMjQ2LFxuICAgICAgMjU0LFxuICAgICAgMTA3LFxuICAgICAgMTM3LFxuICAgICAgNSxcbiAgICAgIDIyOSxcbiAgICAgIDQzLFxuICAgICAgMTUyLFxuICAgICAgNzEsXG4gICAgICAyMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ1hEQ0Q3OUFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA2NjY3MTc4NjozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkJnwnZCI8J2Qg/CdkIPwnZCIIPCdkIrwnZCI8J2QjfCdkIYg8J2QgfCdkIDwnZCL8J2QjvCdkILwnZCHXFxuICAgIOKLhlxcbiAgICDii4ZcXG4gICAg4ouGXFxuICAgIOKLhlxcbiAgICDii4ZcXG4gICAg4ouGXFxuICAgIOKLhlxcbiAgICDii4ZcXG4gIPCThqnigbfigbjigbbwk4aqXCIsXG4gICAgXCJsaWRcIjogXCI1NzM0MjUyNzgxNTc5MjozNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQcURwZE1DRUl2aDliSUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIldZRmVsdm5mUGg1VzRDbXhQM1VCT1MyWGRxd2NCU0NoalM2T0hqTlZGMWM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibjMva3BKZWg0dXloUVdzSnJiRmFWVFIwN2hOZzBXT1RWZFd0QmZyM1RYWk9HaVl1ZWZjS0ZJVXRmR3orWlpqREhuR3VITE14eFM3TU51ai81ZFVlQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQktzMHFDd2FNWVkwZm9qZ1AwNzZGTXF6ZytFRDRNUG1FUThxNGtETFNhS1VDcnduUHZtTDBKWWhSdE1Bbm1ISWZwNHRHUDl0dkVBRWgrTUNXNzNWaXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDY2NjcxNzg2OjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3Mzk5NjkzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSldOXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKV04uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJMUk1uQTU0SmFqVmtaQ0N2OHg0QUxtWUdNNDJLOVZHOCt4VUVUaW03K3FJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxMTU0MTI0MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE3Mzk5Njk1OTc2XCJ9Igp9"  // PUT your SESSION_ID 


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
