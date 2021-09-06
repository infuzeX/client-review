![Infuzex logo](https://infuzex.in/images/logo/infuzex-logo-tp-2.png)
>Note: jiske pss bhi infuzex ka logo hai wo directory ke root folder dalke uska link upr dede

## 1. Client-Review System Features
**1. Get Review from clients**
**2. Contact Infuzex Ventures Pvt. Ltd.(infuzex.in) for help**
**3. Hire freelancer**

## 2. client review folder structure

client-review
 |--*public/*     **All client side assets and files will be inside public folder**
 |   |-->assets/  **Include's images and svg icons**
 |   |-->css/     **Include's css files**
 |   |-->js/      **Include's js files**
 |   |-->index.html **all html files in public root folders**
 |
 |--*Model/* **Include's database document models**
 |--*config/* **Include's socket and database config**
 |--*services/* **Include's database related operation**
 |--*routes/* **Include's route files**
 |   |-->api/ **Include's request handler routes**
 |--*controller/* **Include's api handler files**
 |--server.js **Heart of client review**

 >Note: using bootsrap or jquery in project is forbidden

 ## 3. client review technology used
 
 **1. Client**
 HTML ,CSS, JS

 **2. Server**
 Technology    | Description
 --------------|-------------------
 [express](https://expressjs.com/)   | Nodejs Framework
 [mongoose](https://mongoosejs.com/)  | Mongodb DB driver
 [MongoDB](https://mongodb.com/)   | Database
 [Socket IO](https://socket.io/) | for bidirectional communication between client and server


# 4. client Review contibutors profiles
>Note: please add your github username and link below
1. [codernuub](https://github.com/codernuub)
2. [jddalmia](https://github.com/jddalmia)



 ## 5. How to start project

 step 1. fork repo in your gihub
 step 2. clone it in your local system
 > git clone repo_url.git
 step 3. change branch
 > git checkout -b branch_name
 step 4. cd into project dir and install all dependencies *optional for fronted dev*
 > npm install
 step 5. start project *optional for fronted dev*
 > node server.js
