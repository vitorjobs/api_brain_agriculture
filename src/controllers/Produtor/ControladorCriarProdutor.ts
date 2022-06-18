import {Request, Response} from "express"
import { ServicoCriarProdutor } from "../services/ServicoCriarProdutor"

class ControladorCriarProdutor {

  async handle(request: Request, response: Response){
    const {nome, cpf_cnpj} = request.body
    
    const servicoCriarProdutor = new ServicoCriarProdutor()

    const produtor = await servicoCriarProdutor.execute({nome, cpf_cnpj})

    return response.json({
      "Produtor Criado com Sucesso ": {
        nome,
        cpf_cnpj
      }
    })

  }
}

export {ControladorCriarProdutor}