import { getCustomRepository } from "typeorm"
import { RepositorioFazenda } from "../../../repositories/RepositorioFazenda"

class ServicoListarTotalFazendaAgric {
	async execute(){
    
		try {

      const totalHectar = getCustomRepository(RepositorioFazenda)
      .createQueryBuilder("fazenda")
      .select("SUM(a_agric_hect)", "Area_Agricultavel")
      .getRawOne()   

      // const totalFazendas = await repositorioFazenda.createQueryBuilder()
      // .select("SUM(a_agric_hect)" + Fazenda)
      // .getRawOne()    
	      
      return totalHectar
			
		} catch (error) {
			  return error
		}

	}
}

export {ServicoListarTotalFazendaAgric}