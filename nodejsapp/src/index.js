//import express from 'express';
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json());

const contact = {
 name: 'Ammar Merzougui',
 email: 'amm@er.com',
 phone: '210-123-333' 
}

app.all('/contacts/',contactsController)
app.get('/contacts/:id',contactsController)

function contactsController(req,res){
     
	res.send(contact);
        
    
}

app.listen(3000, () => console.log(`Listening on port 3000`));



