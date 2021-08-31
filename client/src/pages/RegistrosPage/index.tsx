import { useState } from 'react'

import { Container, TitleContainer } from './styles'

import { RegistrosTable } from '../../components/RegistrosTable'
import { NameModal } from '../../components/NameModal'


const RegistrosPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpenModal = () => {
    setIsOpen(true)
  }
  return (
    <Container>
      <TitleContainer>
        <h1>Registros:</h1>
        <button onClick={handleOpenModal}>+</button>
        <NameModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </TitleContainer>
      <RegistrosTable />
    </Container>
  )
}

export { RegistrosPage }