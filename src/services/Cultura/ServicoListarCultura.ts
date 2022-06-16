import { getCustomRepository } from "typeorm"
import { RepositorioCultura } from "../../repositories/RepositorioCultura"

class ServicoListarCultura {
	async execute(){
    
		try {

      const repositorioCultura = getCustomRepository(RepositorioCultura)
      const cultura = await repositorioCultura.find()
      
      return cultura
			
		} catch (error) {
			  return error
		}
	}
}

export {ServicoListarCultura}