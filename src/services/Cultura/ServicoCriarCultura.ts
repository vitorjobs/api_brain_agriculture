import { response } from "express"
import { getCustomRepository } from "typeorm"
import { RepositorioCultura } from "../../repositories/RepositorioCultura"

interface ICulturaRequest {
	nome: string,
}

class ServicoCriarCultura {
	async execute({nome}: ICulturaRequest){

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