/**
 * 
 * GET - Server Application
 * SET - JSON
 * 
 */
import express from "express"
import {server} from "./server"

const app = express()

/* Set Json */
app.use(express.json())

/* Set Server Application */
app.use(server)
