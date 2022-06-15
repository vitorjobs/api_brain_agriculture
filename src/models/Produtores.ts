import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import {v4 as uuid} from "uuid"

@Entity("produtor")
export class Producer {
  
  @PrimaryColumn()
  readonly id: string;

  @Column()
  nome: string;

  @Column()
  cpf_cnpj: string;

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
