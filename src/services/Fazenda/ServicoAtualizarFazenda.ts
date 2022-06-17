// import { getCustomRepository } from "typeorm"
// import { RepositorioFazenda } from "../../repositories/RepositorioFazenda"

// interface IProdutorRequest {
//   id: string,
// 	cidade: string,
// 	estado: string,
// }

// class ServicoAtualizarFazenda {
// 	async execute({id, cidade, estado}: IProdutorRequest){
	
//     try {
//       const repositorioFazenda = getCustomRepository(RepositorioFazenda)

//       if(!estado || !cidade){
//         throw new Error("CAMPOS OBRIGATÓRIOS NÃO PREENCHIDOS")
//       }
  
//       const fazenda = await repositorioFazenda.findOne(id)
      
//       if(!fazenda){
//         return new Error("Endereço não encontrado")
//       }
  
//       fazenda.cidade = cidade ? cidade: fazenda.cidade
//       fazenda.estado = estado ? estado: fazenda.estado
      
//       await repositorioFazenda.save(fazenda)
  
//       return fazenda

//     } catch (error) {
//         return error
//     }
//   }
// }

// export {ServicoAtualizarFazenda}