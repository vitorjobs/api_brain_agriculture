import {Request, Response} from "express"
import { ServicoCriarUsuario } from "../../services/Usuario/ServicoCriarUsuario"

class ControladorCriarUsuario {

  async handle(request: Request, response: Response){
    const {nome, email, admin, senha} = request.body
    
    const servicoCriarUsuario = new ServicoCriarUsuario()

    const usuario = await servicoCriarUsuario.execute({nome, email, admin, senha})

    return response.json(usuario)

    // return response.json({
    //   "usuario criado com Sucesso ": {
    //     nome,
    //     email,
    //     admin
    //   }
    // })
  }
}

export {ControladorCriarUsuario}