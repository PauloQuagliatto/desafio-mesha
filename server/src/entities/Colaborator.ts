import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, OneToOne } from "typeorm"
import { v4 as uuid } from "uuid"

import { Knowledge } from "./Knowledge"

@Entity("colaborators")
class Colaborator {
  @PrimaryGeneratedColumn()
  readonly id: string

  @Column({ type: "varchar", length: 100 })
  name: string

  @Column({ type: "varchar", length: 100 })
  email: string

  @Column({ type: "varchar", length: 14 })
  cpf: string

  @Column()
  phone: string

  @OneToOne(type => Knowledge)
  knowledge: Knowledge

  @UpdateDateColumn()
  updated_at: Date

  constructor(){
    if(!this.id){
      this.id = uuid()
    }
  }
}

export { Colaborator }