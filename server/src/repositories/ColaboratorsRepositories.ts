import { EntityRepository, Repository } from 'typeorm'
import { Colaborator } from '../entities/Colaborator'

@EntityRepository(Colaborator)
class ColaboratorsRepositories extends Repository<Colaborator> {}

export { ColaboratorsRepositories }