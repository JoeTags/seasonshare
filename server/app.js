const path = require('path');
const express = require('express');
const usersRepo = require('./users.js')

const app = express();



app.use(express.json());
app.use(express.static(path.resolve(__dirname, '..', 'dist')));



app.get('/', (req, res) => {
  console.log("req:", req.body)
})

app.post('/', async(req, res) => {
 
  const { id, firstName, lastName, email, phoneNumber } = req.body.data;

  const existingUser = await usersRepo.getOneBy({ lastName })

  if(existingUser) {
    return res.send("User Exists")
  }

  const addUser = await usersRepo.create({id, firstName, lastName, email, phoneNumber})

  res.send('User Added!')
});

app.delete('/:id', async(req, res) => {
  const { id } = req.params;

  const deleteUser = await usersRepo.delete(Number(id));
  
  res.send('user deleted').status(200);
})

app.put('/:id', async(req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  console.log('req:', req.body)

  const updateUser = await usersRepo.update(Number(id), data);
  
  res.send('user updated').status(200);
})


module.exports = app;