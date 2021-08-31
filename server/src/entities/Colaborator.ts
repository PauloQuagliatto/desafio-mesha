import { Entity, PrimaryColumn, Column, UpdateDateColumn } from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("colaborators")
class Colaborator {
  @PrimaryColumn()
  readonly id: string

  @Column({ type: "varchar", length: 100 })
  name: string

  @Column({ type: "varchar", length: 100 })
  email: string

  @Column({ type: "varchar", length: 14 })
  cpf: string

  @Column()
  phone: string

  @Column()
  is_validated: boolean

  @Column()
  git: boolean

  @Column()
  react: boolean

  @Column()
  php: boolean

  @Column()
  nodejs: boolean

  @Column()
  devops: boolean

  @Column()
  databases: boolean

  @Column()
  typescript: boolean

  @Column()
  number_of_skills: number

  @UpdateDateColumn()
  updated_at: Date

  constructor(){
    if(!this.id){
      this.id = uuid()
    }
  }
}

export { Colaborator }