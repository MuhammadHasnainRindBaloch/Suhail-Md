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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_50_06_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNyxcbiAgICAgICAgNDksXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDM1LFxuICAgICAgICAyNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDk2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDQzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxOSxcbiAgICAgICAgMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNixcbiAgICAgICAgMTk0LFxuICAgICAgICA1NixcbiAgICAgICAgMjM3LFxuICAgICAgICA1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjIxLFxuICAgICAgICA0NixcbiAgICAgICAgMjE1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjIzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDksXG4gICAgICAgIDExMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDY4LFxuICAgICAgICA4MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDksXG4gICAgICAgIDc5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0MixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDUwLFxuICAgICAgICA5NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDM4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTgwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTk1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTU0LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMCxcbiAgICAgICAgODMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTksXG4gICAgICAgIDExLFxuICAgICAgICAxMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDk2LFxuICAgICAgICAyMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDczLFxuICAgICAgICA1LFxuICAgICAgICAxNDksXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTkzLFxuICAgICAgICA5OCxcbiAgICAgICAgODAsXG4gICAgICAgIDI0LFxuICAgICAgICA4MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTgwLFxuICAgICAgICA0NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDkzLFxuICAgICAgICA4NixcbiAgICAgICAgNTgsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6VFFJY3AzR0NVU3o3SHlBR0VUMGRya2I0WlVnUy9YUXRsSTZINko2dWFZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA2NjY3MTc4NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjE1MDczQkQyNDM4QTkxNjIwQkZERkVFN0JDNTZDRTdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3NzU3NDUxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImppakFxSEZwU2NPOS1GYXdJWHpwTWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDg0ODViZDYtNjBlMy00NWQ4LWI3ZTgtMTMxMTllZmQwMmY5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3OSxcbiAgICAgIDY0LFxuICAgICAgMjM0LFxuICAgICAgMTg1LFxuICAgICAgNjQsXG4gICAgICAzNSxcbiAgICAgIDE2MSxcbiAgICAgIDEwMixcbiAgICAgIDAsXG4gICAgICA2NixcbiAgICAgIDI3LFxuICAgICAgMjM2LFxuICAgICAgNjcsXG4gICAgICA5MCxcbiAgICAgIDE0NyxcbiAgICAgIDE4MCxcbiAgICAgIDEsXG4gICAgICAyMjQsXG4gICAgICAxMyxcbiAgICAgIDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTIsXG4gICAgICAxOTYsXG4gICAgICA3OSxcbiAgICAgIDE0MCxcbiAgICAgIDIzMixcbiAgICAgIDQ1LFxuICAgICAgMTAwLFxuICAgICAgMTY0LFxuICAgICAgMTYwLFxuICAgICAgMTgyLFxuICAgICAgMTQ5LFxuICAgICAgMjAwLFxuICAgICAgMjA0LFxuICAgICAgMTc5LFxuICAgICAgODksXG4gICAgICAxOCxcbiAgICAgIDEzLFxuICAgICAgMTkzLFxuICAgICAgMjAzLFxuICAgICAgNjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWTM1Vzg1Q0hcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA2NjY3MTc4NjozOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkJnwnZCI8J2Qg/CdkIPwnZCIIPCdkIrwnZCI8J2QjfCdkIYg8J2QgfCdkIDwnZCL8J2QjvCdkILwnZCHXFxuICAgIOKLhlxcbiAgICDii4ZcXG4gICAg4ouGXFxuICAgIOKLhlxcbiAgICDii4ZcXG4gICAg4ouGXFxuICAgIOKLhlxcbiAgICDii4ZcXG4gIPCThqnigbfigbjigbbwk4aqXCIsXG4gICAgXCJsaWRcIjogXCI1NzM0MjUyNzgxNTc5MjozOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQdURwZE1DRUlITWk3TUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIldZRmVsdm5mUGg1VzRDbXhQM1VCT1MyWGRxd2NCU0NoalM2T0hqTlZGMWM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiamozNHg3THMrU3crTnpIN2R4MFd5NXgzV0gvRUVnYjRxSlRWS3YvbVlTYzcwa21ZYnBxU1FRRVlKbW96UnpnSkFveGNpeGJvVjBJTzcxOVorKzZvREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiK1lCVGpqK3NpSmM3cVdmMndLZzNUbnVoM1JXTmxXTWp2RmZmMVBSK0JUdER4KzZqdmlrb21yc1dLSVJWRWVPY1IxSmE4UkFlZXNkemVXVlFNZkVYQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDY2NjcxNzg2OjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3NzU3NDQ1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSldOXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKV04uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJMUk1uQTU0SmFqVmtaQ0N2OHg0QUxtWUdNNDJLOVZHOCt4VUVUaW03K3FJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxMTU0MTI0MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
