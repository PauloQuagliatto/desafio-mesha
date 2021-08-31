import { getCustomRepository } from "typeorm"
import { ColaboratorsRepositories } from "../repositories/ColaboratorsRepositories"

interface IColaboratorRequest {
  name: string
  email: string
  cpf: string
  phone: string
  git: boolean
  react: boolean
  php: boolean
  nodejs: boolean
  devops: boolean
  databases: boolean
  typescript: boolean
  number_of_skills: number
  is_validated?: boolean
}

class CreateColaboratorService {

  async execute({ name,
    email,
    cpf,
    phone,
    git,
    react,
    php,
    nodejs,
    devops,
    databases,
    typescript,
    number_of_skills,
    is_validated
  }: IColaboratorRequest) {
    const colaboratorsRepository = getCustomRepository(ColaboratorsRepositories)

    if (!cpf) throw new Error("Missing e-mail")
    if (!email) throw new Error("Missing e-mail")

    const colaboratorCheck = await colaboratorsRepository.findOne({
      cpf
    })

    if (colaboratorCheck && cpf !== colaboratorCheck.cpf) throw new Error("Usuário já existe com este CPF!")
    if (!cpf.match(/\d{3}\.\d{3}\.\d{3}\-\d{2}/g)) throw new Error("CPF inválido!")
    if (number_of_skills > 3) throw new Error("Há habilidades demais, campeão!")
    if (!phone) phone = '(00) 00000-0000'
    if(!is_validated) is_validated = false
    const colaborator = colaboratorsRepository.create({
      name,
      email,
      cpf,
      phone,
      git,
      react,
      php,
      nodejs,
      devops,
      databases,
      typescript,
      number_of_skills,
      is_validated
    })

    await colaboratorsRepository.save(colaborator)

    return colaborator
  }
}

export { CreateColaboratorService }