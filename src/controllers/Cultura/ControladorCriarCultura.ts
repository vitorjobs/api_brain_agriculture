import {Request, Response} from "express"
import { ServicoCriarCultura } from "../../services/Cultura/ServicoCriarCultura"

class ControladorCriarCultura {

  async handle(request: Request, response: Response){

    try {
      const {nome} = request.body

      const servicoCriarCultura = new ServicoCriarCultura()
  
      const cultura = await servicoCriarCultura.execute({nome})
  
      return response.status(201).json({
        mensagem: "Cultura Cadastrado com sucesso",
        nome
      })

    } catch (error) {

      return response.status(400).json(error)

    }
  }
}

export {ControladorCriarCultura}