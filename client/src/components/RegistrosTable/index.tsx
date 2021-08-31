import { useContext } from 'react'
import { ColaboratorsContext } from '../../contexts/ColaboratorsContext'
import { Container, WarningDiv } from './styles'

const RegistrosTable = () => {
  const colaboratorsContext = useContext(ColaboratorsContext)

  return (
    <Container>
      {colaboratorsContext.colaborators.length === 0 ?
        <WarningDiv>
          <h1>Sem Colaboradores!</h1>
        </WarningDiv>
        :
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {colaboratorsContext.colaborators.map(colaborator => {
              return (
                <tr>
                  <td>{colaborator.name}</td>
                  <td className={colaborator.is_validated ? "validated" : "not-validated"}>
                    {colaborator.is_validated ? "Validado" : "Não Validado"}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      }
    </Container>
  )
}

export { RegistrosTable }