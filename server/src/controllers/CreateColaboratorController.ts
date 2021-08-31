import { Request, Response } from "express"
import { CreateColaboratorService } from '../services/CreateColaboratorService'

class CreateColaboratorControllers {

  async handle(req: Request, res: Response){
    const { name,
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
    } = req.body

    const createColaboratorService = new CreateColaboratorService()

    const colaborator = await createColaboratorService.execute({ name,
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

    return res.json(colaborator)
  }
}

export { CreateColaboratorControllers }