import { useContext } from 'react'
import { useParams } from "react-router-dom"

import  { CollaboratorForm } from '../../components/CollaboratorForm'

import {ColaboratorsContext} from '../../contexts/ColaboratorsContext'

import { Container } from './styles'

interface RouteParams {
  nomedocolaborador: string
}

interface Colaborator {
  name: string
  email: string
  cpf: string
  phone: string
  git: boolean
  react: boolean
  php: boolean
  nodejs: boolean
  devops: boolean
  databases: boolean
  typescript: boolean
  number_of_skills: number
}

const RegisterPage = () => {
  const { nomedocolaborador } = useParams<RouteParams>()
  const createColaborator = useContext(ColaboratorsContext).createColaborator

  const onSubmit = (colaborator: Colaborator) => {
    createColaborator(colaborator)
  }
  return (
    <Container>
      <h1>Registre um Colaborador:</h1>
      <CollaboratorForm 
      onSubmit={onSubmit}
      nomedocolaborador={nomedocolaborador} 
      />
    </Container>
  )
}

export { RegisterPage }