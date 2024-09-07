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

  sessionName:process.env.SESSION_ID || "SUHAIL_09_11_09_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAzNixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDQyLFxuICAgICAgICA0NSxcbiAgICAgICAgOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDQsXG4gICAgICAgIDc1LFxuICAgICAgICA5MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTIwLFxuICAgICAgICA3NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDk4LFxuICAgICAgICAyNCxcbiAgICAgICAgMixcbiAgICAgICAgMTEzLFxuICAgICAgICA0NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE5LFxuICAgICAgICA4MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE4NixcbiAgICAgICAgODMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAzNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAzLFxuICAgICAgICAyMTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjIwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAzNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTExLFxuICAgICAgICA3OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgODgsXG4gICAgICAgIDkzLFxuICAgICAgICAzMyxcbiAgICAgICAgODEsXG4gICAgICAgIDc2LFxuICAgICAgICAwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY5LFxuICAgICAgICA5NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTk4LFxuICAgICAgICA4OSxcbiAgICAgICAgODAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjksXG4gICAgICAgIDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4LFxuICAgICAgICAxNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDYzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0OCxcbiAgICAgICAgODIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODYsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTksXG4gICAgICAgIDk2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgODEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDM5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjUyLFxuICAgICAgICA4OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTA1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg1LFxuICAgICAgICA0OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJCZHZ6RkkyMElBekJjN3hwbjA0ZTJYWmtxY3lhZE5PcUFveHhUTUI5R21jPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJiT281aUdOalN4V0JUMlRVNzdNU0JRXCIsXG4gIFwicGhvbmVJZFwiOiBcImUyYmU0Zjg0LTExM2ItNGYzZi1hZjRjLTZkZGU2ZDE1N2NkNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjYsXG4gICAgICAyMzMsXG4gICAgICA1LFxuICAgICAgMTM5LFxuICAgICAgMjQ3LFxuICAgICAgMjUxLFxuICAgICAgNzMsXG4gICAgICA3OSxcbiAgICAgIDExNixcbiAgICAgIDI4LFxuICAgICAgMjI0LFxuICAgICAgMTY5LFxuICAgICAgMzgsXG4gICAgICA0MSxcbiAgICAgIDIyOSxcbiAgICAgIDE5LFxuICAgICAgMTk4LFxuICAgICAgMTU3LFxuICAgICAgMjI0LFxuICAgICAgOTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgwLFxuICAgICAgMjIsXG4gICAgICA4OSxcbiAgICAgIDY3LFxuICAgICAgMjE2LFxuICAgICAgMjMxLFxuICAgICAgMTg0LFxuICAgICAgMzksXG4gICAgICAyMDMsXG4gICAgICAyNDMsXG4gICAgICAyMzMsXG4gICAgICA5NSxcbiAgICAgIDcxLFxuICAgICAgMjYsXG4gICAgICAxNTUsXG4gICAgICAyMixcbiAgICAgIDE2MCxcbiAgICAgIDE2NCxcbiAgICAgIDc4LFxuICAgICAgMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ0tYWlhWQ0hcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMjY3NDIzOTg6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExNzgzNjg0MDIzNTIxOTozMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJUGxoZUVHRUw2eDhMWUdHQTRnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjVQRGRnM0dZaUtFdFc1VlFrQ1ovaXViR3ZQL2FNcVZSTGh6TUJMang3M3c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibVdOZnVJUGg4NEViSVM2Ym51S2ZiM2VubkNJRGRGM3NJR2FDOVorYm1QeitTMCs4eThnMzNvWmJZMzZGTGNXNWZuNzF4RG5JQmRXYlZNRC9CRUJvQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaGJ0RXptZU5kOGNRYzYwamhEMHd3WkpnbDIxQnhHYVV5Znh4cktFVHBtVk5LMzJrNlhiYzkza1V4Ry9ZaFB2ZElscU00TTVGRDN2VEdPMC9SbFVpZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAyNjc0MjM5ODozMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI1NzAwMjkwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==",  // PUT SESSION ID HERE 
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
 
