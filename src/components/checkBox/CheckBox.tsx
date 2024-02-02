const CheckBox = ({value, text}: {value: string, text: string}) => {
  return (
    <>
        <label id={value}>{text}</label>
        <input type="checkbox" value={value} onChange={e => {
            console.log(e.target.value)
        }}/>
    </>
  )
}

export default CheckBox