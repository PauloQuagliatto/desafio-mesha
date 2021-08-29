import { Request, Response } from "express"
import { CreateColaboratorService } from '../services/CreateColaboratorService'

class CreateColaboratorControllers {

  async handle(request: Request, response: Response){
    const { name, email, admin, password } = request.body

    const createColaboratorService = new CreateColaboratorService()

    const user = await createColaboratorService.execute({ name, email, admin, password })

    return response.json(user)
  }
}

export { CreateColaboratorControllers }