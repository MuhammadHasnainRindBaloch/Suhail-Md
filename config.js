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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_03_06_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDM0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjA2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAzNixcbiAgICAgICAgMTkxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDksXG4gICAgICAgIDkxLFxuICAgICAgICA2NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgODIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI1LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NixcbiAgICAgICAgMTk1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI1LFxuICAgICAgICA2MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDMsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzEsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDczLFxuICAgICAgICA5MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI5LFxuICAgICAgICAxODksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDcwLFxuICAgICAgICAxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODksXG4gICAgICAgIDU0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjUyLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDM4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTAwLFxuICAgICAgICA4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDk0LFxuICAgICAgICA3MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDc0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNixcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNyxcbiAgICAgICAgODMsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDYyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDg0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2LFxuICAgICAgICA0NixcbiAgICAgICAgNDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEwLFxuICAgICAgICA5MixcbiAgICAgICAgMjQ4LFxuICAgICAgICA3NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDM1LFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzNixcbiAgICAgICAgMjE0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQsXG4gICAgICAgIDczLFxuICAgICAgICAzMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODksXG4gICAgICAgIDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAzMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc2LFxuICAgICAgICA1OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxLFxuICAgICAgICAxODUsXG4gICAgICAgIDExMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIi9Id2FKOWZjVGJUcEUxRlV0cnBsbC90OHY5WjdrRWZuKzVPNzNsdDNzVUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk5vRGdJV2lrU2R1dGtYMlN3T2dldndcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjgzMjVlMTAtMTQyYS00YzU4LWFiYWMtODlkNzA2ZmFkNmVmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNixcbiAgICAgIDIzNSxcbiAgICAgIDgxLFxuICAgICAgNjIsXG4gICAgICA3LFxuICAgICAgMTE3LFxuICAgICAgMjQ4LFxuICAgICAgMTA5LFxuICAgICAgMTE1LFxuICAgICAgMjE0LFxuICAgICAgMTA4LFxuICAgICAgMjIwLFxuICAgICAgNzYsXG4gICAgICA4MCxcbiAgICAgIDE0NyxcbiAgICAgIDIyNCxcbiAgICAgIDg3LFxuICAgICAgMTExLFxuICAgICAgNyxcbiAgICAgIDc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMixcbiAgICAgIDQwLFxuICAgICAgMTM0LFxuICAgICAgMTA1LFxuICAgICAgMjE2LFxuICAgICAgODksXG4gICAgICAyMzMsXG4gICAgICAyMCxcbiAgICAgIDEzNixcbiAgICAgIDk4LFxuICAgICAgOSxcbiAgICAgIDIyNSxcbiAgICAgIDE3LFxuICAgICAgMjI3LFxuICAgICAgMTc3LFxuICAgICAgMTg5LFxuICAgICAgMjA3LFxuICAgICAgODAsXG4gICAgICA3NixcbiAgICAgIDk4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZSQ1ZONDU0XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNjUyMDAwNTY6NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3NTcwMzI4NjkxMDk3Njo0OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOMmxxWklERUtYTGhyTUdHQ0VnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIldBRkp6N1Fpb01uemlWaks0TTJMcmdZUjQreDhhaGEyYTZKdGpWSkJsQzQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUStiOTNic2FzU2ltS29nbDJRS05RYjVYektIMitpSmlEZk9MTnRtSVZyNlhiQXVTRHJVOU5tZFkramYrTFJvbU95eDg3clBZMElFZTJPeXdsTjBKQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUWsrcEZsVEozZHlMYUZ5QkhwUFUweitCOFdwbEJ3TVAyeDVuV1ZlaTQ4bE9LS05PS0VRZWhpdW0rRzlZL05YZTNyTzBIeUUyNFlneDZicSt6cGlxQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDY1MjAwMDU2OjQ4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDQ2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTc2NzU0MzEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLZVhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtlWC5qc29uIjogIntcImtleURhdGFcIjpcIjU2eldMTEE2WkpUeVI5MTR0VzFXaGJ2a2ZRY3owWExqbGJuaTJ6WjZRNU09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODQzNzMxNjc3LFwiY3VycmVudEluZGV4XCI6MjgsXCJkZXZpY2VJbmRleGVzXCI6WzAsMjMsMjYsMjhdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzM4MzYwNjU3MlwifSIKfQ=="  // PUT your SESSION_ID 


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
