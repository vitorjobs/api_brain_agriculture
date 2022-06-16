import {Router} from "express"
import {ControladorCriarUsuario} from "./controllers/ControladorCriarUsuario"
import {ControladorAutenticarUsuario} from "./controllers/ControladorAutenticarUsuario"

import {ControladorCriarProdutor} from "./controllers/ControladorCriarProdutor"

import {autenticacao} from "./middlewares/Autenticacao"
import {usuarioAdmin} from "./middlewares/ValidacaoUsuarioAdm"

const router = Router()

/* Controlador - USUÁRIOS */
const createUserController = new ControladorCriarUsuario()
const controladorAutenticarUsuario = new ControladorAutenticarUsuario()

/* Controlador - PRODUTOR */
const controladorCriarProdutor = new ControladorCriarProdutor()

/* Rotas = USUÁRIOS */
router.post("/usuario", createUserController.handle)
router.post("/login",   controladorAutenticarUsuario.handle)

/* Rotas = PRODUTOR */
router.post("/produtor", autenticacao, controladorCriarProdutor.handle)

export {router}