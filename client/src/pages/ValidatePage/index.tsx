import { useContext, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { ColaboratorsContext } from '../../contexts/ColaboratorsContext'

interface RouteParams {
  nomedocolaborador: string
}

const ValidatePage = () => {
  const { nomedocolaborador } = useParams<RouteParams>()
  const colaboradores = useContext(ColaboratorsContext).colaborators
  const colaborador = colaboradores.findOne({ name: nomedocolaborador })
  const [isValidated, setIsValidated] = useState(colaborador.is_validated)
  const updateColaborator = useContext(ColaboratorsContext).updateColaborator
  const history = useHistory()

  const handleUpdate = () => {
    updateColaborator({id: colaborador.id, is_validatedUpdate: isValidated})
    history.push('/')
  }
  
  return(
    <div>
      <label>{nomedocolaborador}</label>
      <label>Validação</label>
      <select
        onChange={e => e.target.value === 'valdidated' ? setIsValidated(true) : setIsValidated(false)}
      >
        <option value="validated">Validado</option>
        <option value="not-validated">Não Validado</option>
      </select>
    <button onClick={handleUpdate}>Atualizar</button>
    </div>
  )
}

export { ValidatePage }