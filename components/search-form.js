import { useState } from 'react'

import Button from '../components/button'
import Input from '../components/input'
import FormLabel from '../components/form-label'
import Select from '../components/select'

export default function SearchForm(props) {
  const {
    className
  } = props

  const professions = [
    { value: 'm', text: 'Médecin' }, 
    { value: 'p', text: 'Pharmacie' }
  ]

  const places = [
    { value: 1, text: 'Antananarivo Avaradrano' }
  ]

  const [name, setName] = useState('')
  const [profession, setProfession] = useState(professions[0].value)
  const [place, setPlace] = useState(places[0].value)

  function search() {
    alert('search')
    return null
  }
  
  return (
    <div className={`pl-4 h-12 bg-white rounded-r-md rounded-l-md flex ${className}`}>
      <div className="pr-2 flex-1 flex items-center">
        <FormLabel value="Nom"/>
        <Input value={name} setValue={setName} placeholder="nom" className="flex-1" />
      </div>
      <div className="px-2 border-l-2 border-gray-400 flex items-center flex-shrink-0">
        <Select options={professions} onChange={setProfession}/>
      </div>
      <div className="px-2 border-l-2 border-gray-400 flex items-center flex-shrink-0">
        <Select options={places} onChange={setPlace} />
      </div>
      <Button onClick={search} className="rounded-r-md transition ease-in-out 400 bg-green-600 hover:bg-green-700 text-white text-lg" >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
      </Button>
    </div>
  )
}