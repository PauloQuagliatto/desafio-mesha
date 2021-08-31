import { useState } from 'react'

import { Form, CheckBoxContainer } from './styles'

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

interface Props {
  nomedocolaborador: string
  onSubmit: (colaborator: Colaborator) => void
}

const CollaboratorForm = (props: Props) => {
  const [name, setName] = useState(props.nomedocolaborador)
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [phone, setPhone] = useState('')
  const [git, setGit] = useState(false)
  const [react, setReact] = useState(false)
  const [php, setPhp] = useState(false)
  const [nodejs, setNodejs] = useState(false)
  const [devops, setDevops] = useState(false)
  const [database, setDatabase] = useState(false)
  const [typescript, setTypescript] = useState(false)
  const [numberOfSkills, setNumberOfSkills] = useState(0)

  const handleCheckGit = () => {
    const toSet = !!git
    if (!toSet === false) {
      const newNumberOfSkills = numberOfSkills - 1
      setNumberOfSkills(newNumberOfSkills)
    } else if (numberOfSkills < 3 && !toSet === true) {
      setGit(!toSet)
      const newNumberOfSkills = numberOfSkills + 1
      setNumberOfSkills(newNumberOfSkills)
    } else {
      alert("Quantidade máxima de conhecimentos possíveis!")
    }
  }

  const handleCheckReact = () => {
    const toSet = !!react
    if (!toSet === false) {
      const newNumberOfSkills = numberOfSkills - 1
      setNumberOfSkills(newNumberOfSkills)
    }
    if (numberOfSkills < 3 && !toSet === true) {
      setReact(!toSet)
      const newNumberOfSkills = numberOfSkills + 1
      setNumberOfSkills(newNumberOfSkills)
    } else {
      alert("Quantidade máxima de conhecimentos possíveis!")
    }
  }

  const handleCheckPhp = () => {
    const toSet = !!php
    if (!toSet === false) {
      const newNumberOfSkills = numberOfSkills - 1
      setNumberOfSkills(newNumberOfSkills)
    }
    if (numberOfSkills < 3 && !toSet === true) {
      setPhp(!toSet)
      const newNumberOfSkills = numberOfSkills + 1
      setNumberOfSkills(newNumberOfSkills)
    } else {
      alert("Quantidade máxima de conhecimentos possíveis!")
    }
  }

  const handleCheckNode = () => {
    const toSet = !!nodejs
    if (!toSet === false) {
      const newNumberOfSkills = numberOfSkills - 1
      setNumberOfSkills(newNumberOfSkills)
    }
    if (numberOfSkills < 3 && !toSet === true) {
      setNodejs(!toSet)
      const newNumberOfSkills = numberOfSkills + 1
      setNumberOfSkills(newNumberOfSkills)
    } else {
      alert("Quantidade máxima de conhecimentos possíveis!")
    }
  }

  const handleCheckDevops = () => {
    const toSet = !!devops
    if (!toSet === false) {
      const newNumberOfSkills = numberOfSkills - 1
      setNumberOfSkills(newNumberOfSkills)
    }
    if (numberOfSkills < 3 && !toSet === true) {
      setDevops(!toSet)
      const newNumberOfSkills = numberOfSkills + 1
      setNumberOfSkills(newNumberOfSkills)
    } else {
      alert("Quantidade máxima de conhecimentos possíveis!")
    }
  }

  const handleCheckDatabase = () => {
    const toSet = !!database
    if (!toSet === false) {
      const newNumberOfSkills = numberOfSkills - 1
      setNumberOfSkills(newNumberOfSkills)
    }
    if (numberOfSkills < 3 && !toSet === true) {
      setDatabase(!toSet)
      const newNumberOfSkills = numberOfSkills + 1
      setNumberOfSkills(newNumberOfSkills)
    } else {
      alert("Quantidade máxima de conhecimentos possíveis!")
    }
  }

  const handleCheckTypescript = () => {

    const toSet = !!typescript
    if (!toSet === false && !toSet === true) {
      const newNumberOfSkills = numberOfSkills - 1
      setNumberOfSkills(newNumberOfSkills)
    }
    if (numberOfSkills < 3) {
      setTypescript(!toSet && !toSet === true)
      const newNumberOfSkills = numberOfSkills + 1
      setNumberOfSkills(newNumberOfSkills)
    } else {
      alert("Quantidade máxima de conhecimentos possíveis!")
    }
  }

  const onSubmit = () => {
    props.onSubmit({
      name,
      email,
      cpf,
      phone,
      git,
      react,
      php,
      nodejs,
      devops,
      databases: database,
      typescript,
      number_of_skills: numberOfSkills
    })
  }
  return (
    <Form action="submit">
      <input type="text"
        placeholder="Nome"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input type="text"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input type="text"
        placeholder="CPF"
        value={cpf}
        onChange={e => setCpf(e.target.value)}
      />
      <input type="text"
        placeholder="Celular"
        value={phone}
        onChange={e => setPhone(e.target.value)}
      />
      <CheckBoxContainer>
        <div>
          <label>Git</label>
          <input className="check" type="checkbox" onClick={handleCheckGit} />
        </div>
        <div>
          <label>React</label>
          <input className="check" type="checkbox" onClick={handleCheckReact} />
        </div>
        <div>
          <label>PHP</label>
          <input className="check" type="checkbox" onClick={handleCheckPhp} />
        </div>
        <div>
          <label>NodeJS</label>
          <input className="check" type="checkbox" onClick={handleCheckNode} />
        </div>
        <div>
          <label>DevOps</label>
          <input className="check" type="checkbox" onClick={handleCheckDevops} />
        </div>
        <div>
          <label>Banco de Dados</label>
          <input className="check" type="checkbox" onClick={handleCheckDatabase} />
        </div>
        <div>
          <label>TypeScript</label>
          <input className="check" type="checkbox" onClick={handleCheckTypescript} />
        </div>
      </CheckBoxContainer>
    </Form>
  )
}

export { CollaboratorForm }