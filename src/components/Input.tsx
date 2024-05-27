import React from 'react'

type inputProps = {
    value?:string
    handleInput:(event:React.ChangeEvent<HTMLInputElement>) => void
}

function Input({value,handleInput}:inputProps) {
  return (
    <div>
      <input type='text' onChange={handleInput} value={value}/>
    </div>
  )
}

export default Input
