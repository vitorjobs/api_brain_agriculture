import { getCustomRepository } from "typeorm"
import { RepositorioProdutor } from "../../repositories/RepositorioProdutor"

class ServicoDeletarProdutor {
	async execute(id: string) {
	
  const repositorioProdutor = getCustomRepository(RepositorioProdutor)

  const produtor = await repositorioProdutor.findOne(id)

  if(!(await repositorioProdutor.findOne(id))){
    return new Error("Produtor não encontrato na base de dados")
  }
  
  await repositorioProdutor.delete(id)

  }
}

export {ServicoDeletarProdutor}