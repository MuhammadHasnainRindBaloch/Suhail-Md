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
global.allowJids= process.env.ALLOW_JID || "true" 
global.blockJids= process.env.BLOCK_JID || "true"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𓆩⋆𝐙𝐈𝐃𝐃𝐈 𝐊𝐈𝐍𝐆 𝐁𝐀𝐋𝐎𝐂𝐇⋆𓆪" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923066671786";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923066671786";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923066671786";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923066671786,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_50_05_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDYsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjMxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMSxcbiAgICAgICAgMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDg0LFxuICAgICAgICA0NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzksXG4gICAgICAgIDc4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMixcbiAgICAgICAgOTAsXG4gICAgICAgIDczLFxuICAgICAgICA1NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDcsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDU1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDczLFxuICAgICAgICA5NyxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDYxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjE4LFxuICAgICAgICA4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDczLFxuICAgICAgICAxMTcsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTgsXG4gICAgICAgIDcwLFxuICAgICAgICAzMyxcbiAgICAgICAgODcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDksXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDg3LFxuICAgICAgICA0MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODAsXG4gICAgICAgIDYsXG4gICAgICAgIDI5LFxuICAgICAgICA5NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM5LFxuICAgICAgICA0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAzNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjA3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTksXG4gICAgICAgIDE5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5NixcbiAgICAgICAgODUsXG4gICAgICAgIDI5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM1LFxuICAgICAgICA0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlpzV0Q4aEFYOGxXMVVmT3duSWhwbk96NmwxRzN5K1Q0Z0pvN2dCTnpTdjg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDEzMDAwMjU0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFMkJGQjJGRjM0MzRGN0Q0QzQzOUFEM0U1NEZFQkNERFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTU4MzUwMDNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicUJBbmhDMzRUdmVVZFJsNDRXZUJ2UVwiLFxuICBcInBob25lSWRcIjogXCI3NzRhOTk1Ni05M2Q5LTRhZDQtYTE5Yi1jZmVhNGZjNzc3ZGJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg0LFxuICAgICAgMzQsXG4gICAgICAxNzQsXG4gICAgICAxNzgsXG4gICAgICAxNzMsXG4gICAgICAyLFxuICAgICAgNjEsXG4gICAgICAxNzIsXG4gICAgICAxODMsXG4gICAgICAxNzQsXG4gICAgICAxMzgsXG4gICAgICAyNTIsXG4gICAgICAzNyxcbiAgICAgIDIwOCxcbiAgICAgIDE3MCxcbiAgICAgIDM0LFxuICAgICAgMjI1LFxuICAgICAgMjEwLFxuICAgICAgMTczLFxuICAgICAgNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI3LFxuICAgICAgMTUwLFxuICAgICAgMjExLFxuICAgICAgMjQ2LFxuICAgICAgODgsXG4gICAgICAzMSxcbiAgICAgIDIyMixcbiAgICAgIDE5OCxcbiAgICAgIDEyMSxcbiAgICAgIDExOCxcbiAgICAgIDE0OCxcbiAgICAgIDEyOCxcbiAgICAgIDE1LFxuICAgICAgMjQ2LFxuICAgICAgNzMsXG4gICAgICAxNzIsXG4gICAgICA2NixcbiAgICAgIDE2NyxcbiAgICAgIDIwMCxcbiAgICAgIDQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkRDRjZIV0w3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwMTMwMDAyNTQ6MzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1NTIwMjk2Mzc5NjE5OTozNkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLinK7NouKYoOKDn+KJm+KDnfCfh79p8J2Qg/CdkINp8J+HsGnwnZCN8J2WpvCfh6fqk6XwnZCL4p2N8J2QgvCdkIfimKDinK7ig53wn5iIXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTDdHMUxBREVQT2dscklHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJZNXpZblAxTlRDWHdYZWNIa1BPYzNVOUpOdzlreUFhQWpyRTRBNzdwd0JnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNRUnZEUFAxL0VVRERWR0hTaWhpall6WU9XVjJkK0VyYUNJYzZlTFUwcU16SXpiUTdPTVNsNkl1eVIzQmQzSDNzeXN5ckl3K3ovV1dVS2NHWVE2c0F3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkhEWm5jSDJPZysvdzZ3MkhJaGQ5cE1iczZpNDljeExnS21iRHNoNVVXVDc0Z2I5bUtPQyticHNBWDRmNEgyK3NIc2pFZ0dNanlWUDVrOSt2dkxMM2hBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzAxMzAwMDI1NDozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTU4MzQ5OTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUNNQUFLU3NcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQ01BQUtTcy5qc29uIjogIntcImtleURhdGFcIjpcIkt4NXRYdWJ3OUxwbnl0ZCs1WGp5eWtmRFRXUm51WXNKbmNYTEJNQjU5Z1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTA3MzU0OTQyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwzNV19LFwidGltZXN0YW1wXCI6XCIxNzE1NzQwNDk0OTkzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
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
  LANG: ( process.env.THEME ||  "𓆩⋆𝐙𝐈𝐃𝐃𝐈 𝐊𝐈𝐍𝐆 𝐁𝐀𝐋𝐎𝐂𝐇⋆𓆪"  ).toUpperCase(),



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
