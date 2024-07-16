const express = require('express');
const sql = require('mssql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const config = {
    server: 'localhost\sqlexpress', 
    database: 'DotNetCourseDatabase', 
    options: {
      encrypt: true, 
      trustServerCertificate: true, 
    },
    authentication: {
      type: 'default', 
    }
  };

sql.connect(config, (err) => {
  if (err) console.log(err);
  else console.log('Connected to Azure SQL Database');
});

app.post('/submit', async (req, res) => {
  const { inputValue } = req.body;
  const query = `INSERT INTO YourTableName (ColumnName) VALUES ('${inputValue}')`;
  try {
    await sql.query(query);
    res.status(201).send('Data saved successfully');
  } catch (error) {
    res.status(400).send('Error saving data');
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
