import { Request, Response } from 'express'
import { ListColaboratorsService } from '../services/ListColaboratorsService'

class ListColaboratorsController{
  async handle(req:Request, res: Response) {
    const listColaboratorsService = new ListColaboratorsService()

    const colaborators = await listColaboratorsService.execute()

    return res.json(colaborators)
  }
}

export { ListColaboratorsController }