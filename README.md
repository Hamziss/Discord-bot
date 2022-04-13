# A discord bot "Rachid La Garde" that :

     show the present members of a a vocal channel: !rachid present
     show the absent members of a vocal channel: !rachid absent
     send a customable dm to absent members: !rachid dm 

## He uses data from a google sheet doc of all members:

  <div align="center">
  <img src="https://camo.githubusercontent.com/cc1ad253f9cc697024caffd0c5079f0ab099cac44b3117a988274bec0217ccae/68747470733a2f2f692e6962622e636f2f6a7230747463462f6368726f6d652d7362742d543167656a632d432e706e67" />
</div>


## Fonction:

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
4. Add him to your server by
copying your client id where i wrote "here":

https://discord.com/api/oauth2/authorize?client_id=here&permissions=0&scope=bot%20applications.commands

5. Run it in a node environnement or host it in horuku
```sh
node index.js
```

## Updates:

1.0.1 he can now do country quiz using data from json file

