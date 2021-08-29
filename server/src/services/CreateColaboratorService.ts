import { getCustomRepository } from "typeorm"
import { ColaboratorsRepositories } from "../repositories/ColaboratorsRepositories"

interface IColaboratorRequest {
  name: string
  email: string
  cpf: string
  phone: string
}

class CreateColaboratorService {

  async execute({ name, email, cpf, phone }: IColaboratorRequest) {
    const colaboratorsRepository = getCustomRepository(ColaboratorsRepositories)

    if (!cpf) throw new Error("Missing e-mail")
    if (!email) throw new Error("Missing e-mail")

    const colaboratorCPFCheck = await colaboratorsRepository.findOne({
      name
    })

    if (colaboratorCPFCheck && cpf !== colaboratorCPFCheck.cpf) throw new Error("CPF é diferente")
    if (email !== ``) throw new Error("Email is invald!")
    if (cpf !== `/\d{3}\.\d{3}\.\d{3}\-\d{2}/g`) throw new Error("Invalid CPF!")
    if (phone !== `/\(\d{2}\)\d{5}\-\d{4}`) throw new Error("Invalid Phone Number!")

    const colaborator = colaboratorsRepository.create({
      name,
      email,
      cpf,
      phone
    })

    await colaboratorsRepository.save(colaborator)

    return colaborator
  }
}

export { CreateColaboratorService }