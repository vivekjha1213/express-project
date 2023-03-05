# express-project
This project for my contacts backend Rest api in node js and express.js MongoDb+Auth




npm install

npm start dev



please make sure before run this project you have  to need config..



.ENV
PORT=3000
CONNECTION_STRING=mongodb+srv://admin:<password>@<>cluster.atqnfmf.mongodb.net/mycontacts-backend?retryWrites=true&w=majority



Sample Request .....

//@desc Get all contacts
//@route GET /api/contacts
//@access private




//@desc Create New contact
//@route POST /api/contacts
//@access private

http://localhost:3000/api/users/register

{
  "username": "jha vivek",
  "email": "jhavivek1213@.com",
  "password": "1234567899"
}

Status: 201 Created
Size: 62 Bytes
Time: 748 ms
Response
Headers6
Cookies
Results
Docs
{
  "_id": "6403961beab5a3865fd6692f",
  "email": "jhavivek1213@.com"
}

insert into DB

Hashed Password:  $2b$10$PPnSQ4CQXAdec/nocwPbpOxx/kqddcyj59pKakgW.b1rxIu3eXKiS
User created {
  username: 'jha vivek',
  email: 'jhavivek1213@.com',
  password: '$2b$10$PPnSQ4CQXAdec/nocwPbpOxx/kqddcyj59pKakgW.b1rxIu3eXKiS',
  _id: new ObjectId("6403961beab5a3865fd6692f"),
  createdAt: 2023-03-04T19:03:55.987Z,
  updatedAt: 2023-03-04T19:03:55.987Z,
  __v: 0
}






//@desc Login user
//@route POST /api/users/login
//@access public

http://localhost:3000/api/users/login


{
  "email": "jhavivek1213@.com",
  "password": "1234567899"
}
![Screenshot 2023-03-05 at 12 25 02 AM](https://user-images.githubusercontent.com/67068290/222924767-682149e1-e446-40b9-8629-2cc3dc9a4562.png)

![Screenshot 2023-03-05 at 12 34 03 AM](https://user-images.githubusercontent.com/67068290/222924770-b65955c0-5f04-48cc-92d9-4d48437e8575.png)





