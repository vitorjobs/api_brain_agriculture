import { getCustomRepository } from "typeorm"
import { RepositorioEndereco } from "../../repositories/RepositorioEndereco"

class ServicoDeletarFazenda {
	async execute(id: string) {
	
  const repositorioEndereco = getCustomRepository(RepositorioEndereco)
  
  if(!(await repositorioEndereco.findOne(id))){
    return new Error("VERIFIQUE SE O ENDERÇEO EXISTE, E TENTE NOVAMENTE")
  }
  
  await repositorioEndereco.delete(id)

  }
}

export {ServicoDeletarFazenda}