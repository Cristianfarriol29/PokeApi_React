import React, {useState} from 'react'
import "./_Input.scss"

export const Input = ({setPokemones, pokemones}) => {

  const [value, setValue] = useState("Busca tu pokemon favorito..")
  const handleInputValue = (e) => {
    e.preventDefault()
    setValue(e.target.value)
  }

  

  const pokemonPetition = (e) => {
    e.preventDefault()
    pokemones.filter(pokemon => {
      if(pokemon.name === value){
        setPokemones([pokemon])
      }
    })
  }
    
 


  return (
    <form onSubmit={pokemonPetition}>
    <div className='header_input'>
    <h1>Busca a tu pokemon favorito</h1>
    <input type="text" onChange={handleInputValue} value={value}/>
    </div>
    </form>
  )
}
