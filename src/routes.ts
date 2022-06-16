import {Router} from "express"
import {ControladorCriarUsuario} from "./controllers/ControladorCriarUsuario"
import {ControladorAutenticarUsuario} from "./controllers/ControladorAutenticarUsuario"

import {ControladorCriarProdutor} from "./controllers/ControladorCriarProdutor"
import {ControladorListarProdutor} from "./controllers/ControladorListarProdutor"
import {ControladorAtualizarProdutor} from "./controllers/ControladorAtualizarProdutor"
import {ControladorDeletarProdutor} from "./controllers/ControladorDeletarProdutor"

import {ControladorCriarEndereco} from "./controllers/Endereco/ControladorCriarEndereco"
import {ControladorAtualizarEndereco} from "./controllers/Endereco/ControladorAtualizarEndereco"
import {ControladorListarEndereco} from "./controllers/Endereco/ControladorListarendereco"


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

/* Controlador - ENDEREÇO */
const controladorCriarEndereco = new ControladorCriarEndereco()
const controladorAtualizarEndereco = new ControladorAtualizarEndereco()
const controladorListarEndereco = new ControladorListarEndereco()

/* Rotas = USUÁRIOS */
router.post("/usuario", createUserController.handle)
router.post("/login",   controladorAutenticarUsuario.handle)

/* Rotas = PRODUTOR */
router.post("/produtor",    autenticacao, controladorCriarProdutor.handle)
router.get("/produtor",     autenticacao, controladorListarProdutor.handle)
router.put("/produtor/:id", autenticacao, controladorAtualizarProdutor.handle)
router.delete("/produtor/:id", autenticacao, controladorDeletarProdutor.handle)


/* Rotas = ENDEREÇO */
router.post("/endereco",    autenticacao, controladorCriarEndereco.handle)
router.get("/endereco",     autenticacao, controladorListarEndereco.handle)
router.put("/endereco/:id",    autenticacao, controladorAtualizarEndereco.handle)

export {router}