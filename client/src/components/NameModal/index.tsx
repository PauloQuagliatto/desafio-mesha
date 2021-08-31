import { useState } from "react"
import Modal from "react-modal"
import { useHistory } from "react-router-dom"

import { ModalDiv, ModalH1, ModalInput, ButtonDiv, RegisterButton } from "./styles"

interface NameModalProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const NameModal = ({ isOpen, setIsOpen }: NameModalProps) => {
  const history = useHistory()
  const [name, setName] = useState('')

  const handleCloseModal = () => {
    setIsOpen(false)
    console.log(isOpen)
  }

  const handleColaboratorCreationRoute = (name: string) => {
    history.push(`/${name}/registrar`)
  }

  return (
    <Modal
      isOpen={!!isOpen}
      onRequestClose={handleCloseModal}
      style={{
        overlay: {
          backgroundColor: 'rgba(82, 80, 80, 0.3)'
        },
        content: {
          borderRadius: '8px',
          background: '#fff',
          overflow: 'none',
          outline: 'none',
          padding: '20px'
        }
      }}
    >
      <ModalDiv>
        <ModalH1>Digite o nome da pessoa que gostaria de adicionar</ModalH1>
        <ModalInput 
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <ButtonDiv>
          <RegisterButton onClick={() => handleColaboratorCreationRoute(name)}>Registrar</RegisterButton>
        </ButtonDiv>
      </ModalDiv>
    </Modal>
  )
}

export { NameModal }