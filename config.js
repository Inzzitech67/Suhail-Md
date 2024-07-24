const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348061693101"; "2349059174528";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_42_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUyLFxuICAgICAgICA3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDMsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTY5LFxuICAgICAgICA2MixcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzksXG4gICAgICAgIDQ4LFxuICAgICAgICAzLFxuICAgICAgICA3NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjE1LFxuICAgICAgICA4MCxcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDg3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQyLFxuICAgICAgICA2MyxcbiAgICAgICAgODQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTgzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjUxLFxuICAgICAgICA4MCxcbiAgICAgICAgODYsXG4gICAgICAgIDIxLFxuICAgICAgICAzMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDY3LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MixcbiAgICAgICAgNjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDQ2LFxuICAgICAgICA2NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDkxLFxuICAgICAgICA3MyxcbiAgICAgICAgODMsXG4gICAgICAgIDU2LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ4LFxuICAgICAgICA1NixcbiAgICAgICAgMTEyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODYsXG4gICAgICAgIDI4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDU3LFxuICAgICAgICAxOCxcbiAgICAgICAgODgsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDkxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTM2LFxuICAgICAgICA1OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk0LFxuICAgICAgICA3LFxuICAgICAgICA4MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgODksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjUyLFxuICAgICAgICA4NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNSxcbiAgICAgICAgNzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjMzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTgxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDQwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzksXG4gICAgICAgIDMxLFxuICAgICAgICAxMjksXG4gICAgICAgIDMyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiL1FjTTdZN0dDZmpZRWc4VUplMHRZMXJNTllYQUpRejZTNFV2MVJyMWZ1cz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwid2p0UFBpZWlSc3FtUk1KT0g2R1JJQVwiLFxuICBcInBob25lSWRcIjogXCI2YjYzOTExZC1hZjRmLTQ1MWYtYWI4My1iY2VkNjRmZmE1MzNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTYsXG4gICAgICAxNTcsXG4gICAgICAyMzIsXG4gICAgICAyNDksXG4gICAgICAxNTgsXG4gICAgICAxMjgsXG4gICAgICAxNixcbiAgICAgIDEwMSxcbiAgICAgIDI0NSxcbiAgICAgIDExOCxcbiAgICAgIDE2NixcbiAgICAgIDIxMixcbiAgICAgIDE2LFxuICAgICAgMTM2LFxuICAgICAgMTAwLFxuICAgICAgNTQsXG4gICAgICAyMTcsXG4gICAgICAxMDMsXG4gICAgICAxNjUsXG4gICAgICA3N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDMsXG4gICAgICAyMTMsXG4gICAgICAyOSxcbiAgICAgIDEwMyxcbiAgICAgIDUxLFxuICAgICAgMTM1LFxuICAgICAgMjMwLFxuICAgICAgMTMxLFxuICAgICAgMTM2LFxuICAgICAgNzAsXG4gICAgICAzNSxcbiAgICAgIDE3MixcbiAgICAgIDMyLFxuICAgICAgMTM4LFxuICAgICAgMjMwLFxuICAgICAgMzcsXG4gICAgICAzOSxcbiAgICAgIDgwLFxuICAgICAgOTYsXG4gICAgICAyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTUkRXUjdRMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA2MTY5MzEwMTo1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA2ODQxNDk3ODEzMDk1OjU5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BhU2dqQVE0NXVCdFFZWUJDQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieUh6aGVaelZTOE54QmRtcVdzeFJIekN1MU9hRWFyUlF6TVNLN25sVVBVRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJsS3U5bjlLZDF5Vms2NE1hOWxPVEpta3BMc3hLWTEyZFpjbkhYQ2pOaUJwVXIzRDZQVkZUcHBHZlBLbmFGeVF6OHltMEsxZEVRcE5yZkZqWk96SStEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ0VGxydno4Q0Y3OGpYa1FkNFNTZGYyWVBXeHRQZ0U4eW85MHBrRG9ZQ1FFV0VhZEsrNmE0amVPTGt2WlhiSlVRVUhZS25CUHFNaGY2VU5VR0cwU2NnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDYxNjkzMTAxOjU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTc4MTczNFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
