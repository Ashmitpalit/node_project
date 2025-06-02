const app = require('./app');
const db = require('./config/db');
const UserModel = require('./model/user_model')


app.get('/', (req, res) => {
    res.send("Hello World, I am Ashmit Palit")
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on Port http://localhost:${port}`);
});