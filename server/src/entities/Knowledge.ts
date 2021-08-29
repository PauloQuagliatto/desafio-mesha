import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, OneToOne } from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("knowledge")
class Knowledge {
  @PrimaryGeneratedColumn()
  readonly id: string

  @Column()
  Git: boolean

  @Column()
  React: boolean

  @Column()
  PHP: boolean

  @Column()
  NodeJS: boolean

  @Column()
  DevOps: boolean

  @Column()
  Databases: boolean

  @Column()
  TypeScript: boolean

  @Column()
  number_of_skills: number
  
  constructor(){
    if(!this.id){
      this.id = uuid()
    }
  }
}

export { Knowledge }