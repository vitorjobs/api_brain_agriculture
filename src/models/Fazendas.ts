import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn, ManyToMany} from "typeorm";
import {v4 as uuid} from "uuid"
import { Endereco } from "./Enderecos";
import { Produtor } from "./Produtores";
import { Cultura } from "./Culturas";

@Entity("fazenda")
export class Fazenda {
  
  @PrimaryColumn()
  readonly id: string;

  @Column()
  nome: string;

  @Column()
  a_tot_hect: number

  @Column()
  a_agric_hect: number

  @Column()
  a_vege_hect: number

  @Column()
  endereco_id: string 
  @ManyToOne( () => Endereco)
  @JoinColumn({name: "endereco_id"})
  endereco: Endereco; 

  @Column()
  produtor_id: string
  @ManyToOne( () => Produtor)
  @JoinColumn({name: "produtor_id"})
  produtor: Produtor; 

  @Column()
  cultura_id: string
  @ManyToMany( () => Cultura)
  @JoinColumn({name: "cultura_id"})
  cultura: Cultura; 


  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor(){
    if(!this.id){
      this.id = uuid()
    }
  }
}
