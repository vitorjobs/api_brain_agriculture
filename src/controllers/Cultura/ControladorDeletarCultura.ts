import {Request, Response} from "express"
import { ServicoDeletarCultura } from "../../services/Cultura/ServicoDeletarCultura"

class ControladorDeletarCultura {

  async handle(request: Request, response: Response){
    
    const {id} = request.params
    
    try {
      const servicoDeletarCultura = new ServicoDeletarCultura()

      const cultura = await servicoDeletarCultura.execute(id)
  
      if(cultura instanceof Error)  { 
        return response.status(400).json(cultura.message)
      }
      
      return response.json({
        mensagem: "Cultura Excluído Com Sucesso",
        cultura
      }).send(200)
      
    } catch (error) {
      return response.status(400).json(error) 
    }
  }
  
}

export {ControladorDeletarCultura}