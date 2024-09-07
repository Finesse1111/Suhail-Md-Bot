const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347026742398";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_09_16_09_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDMyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDg3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMCxcbiAgICAgICAgMzksXG4gICAgICAgIDY0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTcxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjAwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIxLFxuICAgICAgICAyMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ1LFxuICAgICAgICA2NixcbiAgICAgICAgOTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzksXG4gICAgICAgIDc5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk2LFxuICAgICAgICA5NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDU1LFxuICAgICAgICA2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDksXG4gICAgICAgIDYxLFxuICAgICAgICAxMyxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDczLFxuICAgICAgICAxMzgsXG4gICAgICAgIDg4LFxuICAgICAgICAyMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDMwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc4LFxuICAgICAgICA5MixcbiAgICAgICAgNTksXG4gICAgICAgIDExNixcbiAgICAgICAgOTUsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjE5LFxuICAgICAgICA1MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjBReUJCSjFQVTBmbTJRNkpQTE0yd1JUdmZkaFB5TEltTE8vNGhMeGZxV3c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzAyNjc0MjM5OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQ0RGNkFDRUVGNjNBOTYzNEFDNTUxRkEwM0Y4OTFEQ0VcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI1NzAwNTgxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImRzcjc1cGhrVHFDdjh4S3pUckJpNGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGM0MGJmYmQtMjhmOC00ZGY2LTg4ZmQtMmQ3ZTU3NTJhZWM4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM4LFxuICAgICAgNTgsXG4gICAgICA0MyxcbiAgICAgIDEzMyxcbiAgICAgIDE0NCxcbiAgICAgIDIwOCxcbiAgICAgIDIxMixcbiAgICAgIDgwLFxuICAgICAgMTg5LFxuICAgICAgMTEzLFxuICAgICAgOTAsXG4gICAgICA5MyxcbiAgICAgIDgzLFxuICAgICAgMTg4LFxuICAgICAgMjI2LFxuICAgICAgMTU2LFxuICAgICAgMTQwLFxuICAgICAgNSxcbiAgICAgIDIwMSxcbiAgICAgIDE1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAwLFxuICAgICAgNDEsXG4gICAgICAxOCxcbiAgICAgIDExLFxuICAgICAgNTEsXG4gICAgICAxNzMsXG4gICAgICAxNTAsXG4gICAgICAxOSxcbiAgICAgIDE3NyxcbiAgICAgIDQ5LFxuICAgICAgMTU3LFxuICAgICAgMTYwLFxuICAgICAgMTgwLFxuICAgICAgMTc0LFxuICAgICAgNzksXG4gICAgICAxNyxcbiAgICAgIDc5LFxuICAgICAgNTIsXG4gICAgICA5NyxcbiAgICAgIDc2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkE4NkxaOU00XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDI2NzQyMzk4OjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTc4MzY4NDAyMzUyMTk6MzJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSVBsaGVFR0VOdXo4TFlHR0E4Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI1UERkZzNHWWlLRXRXNVZRa0NaL2l1Ykd2UC9hTXFWUkxoek1CTGp4NzN3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlVYMjA2dDdoQy8xUmlCeEFyNHI2NVViK2hiL1poS0ZQc2RCTkhyTStoQ3Z3V0RjVmdJbFhlaXdVeXUxT2I5ZTE2OXRUUE1sbGhMVHJNaUczTGFwYkJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkprbVlvQ1Q4RjczRGs5VHZtVGkrTmpEL2M5WFlzbHl3VGxlemdkTGl2QlNjSThndkJsUWEzODVsMVptSEd0RHpQODJIeWovSGxzWkwzUTlBcEJLTmd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMjY3NDIzOTg6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTcwMDU3NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUY1MlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRjUyLmpzb24iOiAie1wia2V5RGF0YVwiOlwieXZyOWVkNWhWUDNuQUcxSnduNGhCZC94VGtDNktPVm1IVlAwcnJDUUZZWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODE0MTMxMzMxLFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCwyLDMsNV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























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
 
