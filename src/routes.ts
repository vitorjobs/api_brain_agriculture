import {Router} from "express"
import {ControladorCriarUsuario} from "./controllers/ControladorCriarUsuario"
import {ControladorAutenticarUsuario} from "./controllers/ControladorAutenticarUsuario"

import {ControladorCriarProdutor} from "./controllers/ControladorCriarProdutor"
import {ControladorListarProdutor} from "./controllers/ControladorListarProdutor"
import {ControladorAtualizarProdutor} from "./controllers/ControladorAtualizarProdutor"
import {ControladorDeletarProdutor} from "./controllers/ControladorDeletarProdutor"


import {autenticacao} from "./middlewares/Autenticacao"
import {usuarioAdmin} from "./middlewares/ValidacaoUsuarioAdm"

const router = Router()

/* Controlador - USUÁRIOS */
const createUserController = new ControladorCriarUsuario()
const controladorAutenticarUsuario = new ControladorAutenticarUsuario()

/* Controlador - PRODUTOR */
const controladorCriarProdutor = new ControladorCriarProdutor()
const controladorListarProdutor = new ControladorListarProdutor()
const controladorAtualizarProdutor = new ControladorAtualizarProdutor()
const controladorDeletarProdutor = new ControladorDeletarProdutor()

/* Rotas = USUÁRIOS */
router.post("/usuario", createUserController.handle)
router.post("/login",   controladorAutenticarUsuario.handle)

/* Rotas = PRODUTOR */
router.post("/produtor",    autenticacao, controladorCriarProdutor.handle)
router.get("/produtor",     autenticacao, controladorListarProdutor.handle)
router.put("/produtor/:id", autenticacao, controladorAtualizarProdutor.handle)
router.delete("/produtor/:id", autenticacao, controladorDeletarProdutor.handle)

export {router}