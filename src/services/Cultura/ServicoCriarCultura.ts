import { response } from "express"
import { getCustomRepository } from "typeorm"
import { RepositorioCultura } from "../../repositories/RepositorioCultura"

interface IProdutorRequest {
	nome: string,
}

class ServicoCriarCultura {
	async execute({nome}: IProdutorRequest){

		const repositorioCultura = getCustomRepository(RepositorioCultura)
		try {

      if(!nome){
        throw new Error("CAMPO OBRIGATÓRIO NÃO PREENCHIDO")
      }

      const cultura = repositorioCultura.create({
        nome
      })
      await repositorioCultura.save(cultura)

      return cultura
			
		} catch (error) {
			  return error
		}
	}
}

export {ServicoCriarCultura}