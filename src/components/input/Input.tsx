import React from 'react'

const InputBox = ({placeholder, setText}: {placeholder: string, setText: React.Dispatch<React.SetStateAction<string>>}) => {
  return (
    <>
        <input type="text" placeholder={placeholder} onChange={(e) => setText(e.target.value)}/>
    </>
  )
}

export default InputBox