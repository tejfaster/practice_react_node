import React from 'react'

const Input = (props) => {
    return (
        <div className={props.styles}>
            <label className={props.label} for={props.for}>{props.textholder}</label>
            <input className={props.input} type={props.type} value={props.value}onChange={props.onChange} id={props.id} placeholder={props.placeholder} />
        </div>
    )
}

export default Input