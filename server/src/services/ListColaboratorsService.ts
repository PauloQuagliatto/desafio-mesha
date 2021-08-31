import { getCustomRepository } from 'typeorm'
import { ColaboratorsRepositories } from '../repositories/ColaboratorsRepositories'

class ListColaboratorsService {
  async execute() {
    const colaboratorsRepositories = getCustomRepository(ColaboratorsRepositories)

    const colaborators = await colaboratorsRepositories.find()

    return colaborators
  }
}

export { ListColaboratorsService }