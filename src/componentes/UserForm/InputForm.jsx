import React from 'react'
import "./UserForm.css"
function InputForm(props) {
  return (
    <div className='inputform-box'>
        <label >{props.title}</label>
        <input
        value={props.value}
        required={props.required}
        name={props.name}
        type="text"
        onChange={props.onChange}
      />
    </div>
  )
}

export default InputForm