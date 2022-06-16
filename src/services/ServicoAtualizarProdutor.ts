import { getCustomRepository } from "typeorm"
import { RepositorioProdutor } from "../repositories/RepositorioProdutor"

// INTERFACE COM OS DADOS DA TABELA PRODUTOR
interface IProdutorRequest {
  id: string,
	nome: string,
	cpf_cnpj: string,
}

// MÉTODO EXECUTE, RECEBE OS PARAMETROS NOME e CPF_CNPJ VINDOS DA INTERFACE
class ServicoAtualizarProdutor {
	async execute({id, nome, cpf_cnpj}: IProdutorRequest){
	
		try {

      // Inicializa o repositório
		  const repositorioProdutor = getCustomRepository(RepositorioProdutor)

      // VALIDA SE EXISTE NOME e CPF_CNPJ PREENCHIDO
      if(!nome ||  !cpf_cnpj){
        throw new Error("Campos obrigatórios não preenchidos")
      }

      // BUSCA PELO CPF_CNPJ
      const verificarCpf_CnpjUsuario = await repositorioProdutor.findOne({
        cpf_cnpj
      })

      // VALIDA SE EXISTE O CPF_CNPJ JÁ EXISTE
      if(verificarCpf_CnpjUsuario) {
        throw new Error("CPF ou CNPJ já existe")
      }

      // ATUALIZA O PRODUTOR PELO ID
      const produtor = await repositorioProdutor.findOne({
        id
      })

      produtor.nome = nome ? nome: produtor.nome
      produtor.cpf_cnpj = cpf_cnpj ? cpf_cnpj: produtor.cpf_cnpj

      // SALVA O USUÁRIO NO BANCO DE DADOS	
      await repositorioProdutor.save(produtor)

      return produtor
			
		} catch (error) {
			  return error
		}
	}
}

export {ServicoAtualizarProdutor}