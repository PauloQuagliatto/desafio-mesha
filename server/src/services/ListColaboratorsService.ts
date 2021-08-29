import { getCustomRepository } from 'typeorm'
import { ColaboratorsRepositories } from '../repositories/ColaboratorsRepositories'

class ListUsersService {
  async execute() {
    const colaboratorsRepositories = getCustomRepository(ColaboratorsRepositories)

    const colaborators = await colaboratorsRepositories.find()

    return colaborators
  }
}

export { ListUsersService }