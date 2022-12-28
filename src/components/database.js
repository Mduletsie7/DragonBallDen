import React from 'react';
import { Express } from 'express';

const con = Express();

con.listen(8800, ()=>{
  console.log("Connection opened on port 8800")
})

const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"store_test",
})

con.get("/", (req, res)=>{
  res.json("Hello this is the backens")
})