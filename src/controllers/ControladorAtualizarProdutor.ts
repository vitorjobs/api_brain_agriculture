import {Request, Response} from "express"
import { ServicoAtualizarProdutor } from "../services/ServicoAtualizarProdutor"

class ControladorAtualizarProdutor {

  async handle(request: Request, response: Response){
    
    try {

      const {id} = request.params
      const {nome, cpf_cnpj } = request.body
      
      const servicoAtualizarProdutor = new ServicoAtualizarProdutor()
  
      const produtor = await servicoAtualizarProdutor.execute({id, nome, cpf_cnpj})
  
      // return response.json(produtor)
  
      return response.json({
        "Dados do Produtor atualizados com Sucesso ": {
          nome,
          cpf_cnpj,
        }
      })
      
    } catch (error) {
      return error
    }
  }
}

export {ControladorAtualizarProdutor}