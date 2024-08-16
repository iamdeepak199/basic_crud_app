const connection = require('./common/js/connectionToDb');
const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

const static_path1 = path.join(__dirname, './HTML&Css');
app.use(express.static(static_path1));

app.post('/users', (req, res) => {
    const username = "abc";
    const usercount = 1;

    connection.query('INSERT INTO user_count (username, usercount) VALUES (?, ?)', [username, usercount], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error creating user');
        } else {
            res.status(200).send('User is created successfully');
        }
    });
});


app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
});
