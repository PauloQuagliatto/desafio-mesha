import { EntityRepository, Repository } from 'typeorm'
import { Knowledge } from '../entities/Knowledge'

@EntityRepository(Knowledge)
class KnowledgesRepositories extends Repository<Knowledge> {}

export { KnowledgesRepositories }