import {Router} from "express"
import {ControladorCriarUsuario} from "./controllers/ControladorCriarUsuario"

const router = Router()

/* Controlador - USUÁRIOS */
const createUserController = new ControladorCriarUsuario()

/*Rotas = USUÁRIOS */
router.post("/usuario", createUserController.handle)

export {router}