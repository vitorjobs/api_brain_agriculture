/**
 * 
 * Server Application
 *   
 **/
import express from "express"
require('dotenv/config')

const server = express()

server.listen(process.env.SERVER_PORT, () =>{
  console.log(`NodeJs Server Running on port: 3000`)
})

export {server}