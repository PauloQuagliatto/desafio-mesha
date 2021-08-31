import { Router } from "express"

import { CreateColaboratorControllers } from '../controllers/CreateColaboratorController'
import { ListColaboratorsController } from '../controllers/ListColaboratorsController'
import { UpdateColaboratorController } from '../controllers/UpdateColaboratorController'

const router = Router()

const createColaboratorController = new CreateColaboratorControllers()
const listColaboratorsController = new ListColaboratorsController()
const updateColaboratorController = new UpdateColaboratorController()

router.post("/colaborator", createColaboratorController.handle)
router.post("/update", updateColaboratorController.handle)

router.get("/colaborators", listColaboratorsController.handle)

export { router }