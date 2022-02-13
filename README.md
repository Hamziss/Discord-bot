
# A discord bot "Rachid La Garde" that :

     show the present members of a a vocal channel: !rachid present
     show the absent members of a vocal channel: !rachid absent
     send a customable dm to absent members: !rachid dm 

## He uses data from a google sheet doc of all members:

  <div align="center">
  <img src="https://i.ibb.co/jr0ttcF/chrome-sbt-T1gejc-C.png" />
</div>
<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" 
     xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink"
     width="100" height="50"
>
  <text font-size="16" x="10" y="20">
    <tspan fill="red">Hello</tspan>,
    <tspan fill="green">world</tspan>!
  </text>
</svg>

## fonction:
 
 he will be usefull in large meeting to check absent member that must be here or send them dm .
 
 ## 🛠 Installation & Set Up 🛠
 
1. Install dependencies :
  ```sh
   npm install discord.js google-spreadsheets dotenv
   ```  
2. Create a Bot in discord developer portal
3. Create a .env file and copy and fill those:
```sh
token= bot token
GOOGLE_SHEETS_DOCUMENT_ID= yoursheetdocid
GOOGLE_SERVICE_ACCOUNT_EMAIL=yourserviceaccountmail
sheet_id=yoursheetid
GOOGLE_PRIVATE_KEY= yourprivatekey
```
4. Run it in a node environnement or host it in horuku
```sh
node index.js
```
5. Add him to your server and start using it:
copy your client id in the link:

https://discord.com/api/oauth2/authorize?client_id=<span style="color:red">here</span>&permissions=0&scope=bot%20applications.commands


