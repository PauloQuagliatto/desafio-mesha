import { createContext, useEffect, useState, ReactNode } from 'react'

import { api } from '../services/api'

interface Colaborator {
  id: string
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
  is_validated?: boolean
  updated_at?: Date
}

type ColaboratorInput = Omit<Colaborator, 'id' | 'is_validated'>

interface UpdateInfos {
  id: string
  is_validatedUpdate: boolean
}

interface ColaboratorsContextData {
  colaborators: Colaborator[]
  createColaborator: (colaboratorInput: ColaboratorInput) => Promise<void>
  updateColaborator: ({ id, is_validatedUpdate}: UpdateInfos) => Promise<void>
}

interface ColaboratorContextProviderProps {
  children: ReactNode
}

const ColaboratorsContext = createContext<ColaboratorsContextData>({} as ColaboratorsContextData)

const ColaboratorsContextProvider = ({ children }: ColaboratorContextProviderProps): JSX.Element => {
  const [colaborators, setColaborators] = useState<Colaborator[]>([])

  useEffect(() => {
    api.get('colaborators')
    .then(res => setColaborators(res.data.colaborators))
    .then(() => console.log(colaborators))
  }, [])

  const createColaborator = async (colaboratorInput: ColaboratorInput) => {
    const res = await api.post('/colaborator', colaboratorInput)

    const { colaborator } = res.data
    setColaborators([
      ...colaborators,
      colaborator
    ])
  }

  const updateColaborator = async ({ id, is_validatedUpdate}: UpdateInfos) => {
    const res = await api.post('/update', { id, is_validatedUpdate})

    const { updatedColaborator } = res.data
    const newColaborators = [...colaborators]
    
    newColaborators.filter(({ id }) => id !== updatedColaborator.id)
    
    setColaborators([
      ...newColaborators,
      updatedColaborator
    ])
  }

  return (
    <ColaboratorsContext.Provider value={{ colaborators, createColaborator, updateColaborator }}>
      {children}
    </ColaboratorsContext.Provider>
  )
}

export { ColaboratorsContextProvider,ColaboratorsContext }