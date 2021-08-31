import { Request, Response } from "express"
import { UpdateColaboratorsService } from '../services/UpdateColaboratorsService'


class UpdateColaboratorController {
  async handle(req: Request, res: Response){
  
  const updatedCollaboratorsService = new UpdateColaboratorsService()
  const { id, is_validatedUpdate } = req.body

  const updatedCollaborator = await updatedCollaboratorsService.execute({
    id, is_validatedUpdate
  })

  return res.json(updatedCollaborator)
  }
}

export { UpdateColaboratorController }