import { getCustomRepository } from 'typeorm'
import { ColaboratorsRepositories } from '../repositories/ColaboratorsRepositories'

interface IUpdateRequest {
  id: string
  is_validatedUpdate: boolean
}

class UpdateColaboratorsService {
  async execute({ id, is_validatedUpdate }: IUpdateRequest) {
    const colaboratorsRepository = getCustomRepository(ColaboratorsRepositories)

    const colaborator = await colaboratorsRepository.findOne({
      id
    })

    if(!colaborator) throw new Error("Colaborador não encontrado")
    
    const newColaborator = {
      ...colaborator,
      is_validated: is_validatedUpdate
    }

    await colaboratorsRepository.save(newColaborator)

    return newColaborator
  }
}

export { UpdateColaboratorsService }