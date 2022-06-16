import { getCustomRepository } from "typeorm"
import { RepositorioEndereco } from "../../repositories/RepositorioEndereco"

interface IProdutorRequest {
  id: string,
	cidade: string,
	estado: string,
}

class ServicoAtualizarEndereco {
	async execute({id, cidade, estado}: IProdutorRequest){
	
    const repositorioEndereco = getCustomRepository(RepositorioEndereco)

    if(!estado || !cidade){
      throw new Error("CAMPOS OBRIGATÓRIOS NÃO PREENCHIDOS")
    }

    const endereco = await repositorioEndereco.findOne(id)

    endereco.cidade = cidade ? cidade: endereco.cidade
    endereco.estado = estado ? estado: endereco.estado
    
    await repositorioEndereco.save(endereco)

    return endereco
  }
}

export {ServicoAtualizarEndereco}