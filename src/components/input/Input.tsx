import React from 'react'
import './Input.scss'

const InputBox = ({placeholder, setText}: {placeholder: string, setText: React.Dispatch<React.SetStateAction<string>>}) => {
  return (
    <>
        <input className='InputBox' type="text" placeholder={placeholder} onChange={(e) => setText(e.target.value)}/>
    </>
  )
}

export default InputBox