import React,{useState} from "react";
import './style/signUp.css'
import Input from '../components/Input'

const SignUp = () => {
    const [firstName,setFirstName] = useState(null)
    const [lastName,setLastName] = useState(null)
    const [phone,setPhone] = useState(null)
    const [email,setEmail] = useState(null)
    const [password,setPassword] = useState(null)
    const [confirmPassword,setConfirmPassword] = useState(null)

    const handleInputChange = (e) => {
        const {id , value} = e.target
        if(id === 'firstName'){
            setFirstName(value)
        }
        if(id === 'lastName'){
            setLastName(value)
        }
        if(id === 'phone'){
            setPhone(value)
        }
        if(id === 'email'){
            setEmail(value)
        }
        if(id === 'password'){
            setPassword(value)
        }
        if(id === 'confirmPassword'){
            setConfirmPassword(value)
        }
    }

    return (
        <div className='form'>
            <div className='form-body'>
                <Input styles="firstname" lable="form_label" for="firstName" textholder="First Name" value={firstName} onChange={(e) => handleInputChange(e)} input="form_input" type="text" id="firstName" placeholder="First Name"/>
                <Input styles="lastname" lable="form_label" for="lastName" textholder="last Name" value={lastName} onChange={(e)=>handleInputChange(e)} input="form_input" type="text" id="lastName" placeholder="Last Name"/>
                <Input styles="phone" lable="form_label" for="phone" textholder="Phone" value={phone} onChange={(e)=>handleInputChange(e)} input="form_input" type="phone" id="phone" placeholder="Phone"/>
                <Input styles="email" lable="form_label" for="email" textholder="Email" value={email} onChange={(e)=>handleInputChange(e)} input="form_input" type="email" id="email" placeholder="Email"/>
                <Input styles="password" lable="form_label" for="password" textholder="Password" value={password} onChange={(e)=>handleInputChange(e)} input="form_input" type="password" id="password" placeholder="Password"/>
                <Input styles="confirm-password" lable="form_label" for="confirmPassword" textholder="Confirm Password" value={confirmPassword} onChange={(e)=>handleInputChange(e)} input="form_input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
            </div>
        </div>
    )
}

export default SignUp