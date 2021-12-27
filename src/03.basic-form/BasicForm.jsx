import React, { useState } from 'react'
import styled from 'styled-components';
import { columnIt } from '../globalStyle';



const Form = styled.form`
${columnIt};
align-items: center;
width: 300px;
height: 300px;
background-color: #990099;
border-radius: 20px;
`
const Wrapper = styled.div`
width: 90%;
height: 90%;
${columnIt};
align-items: center;
`

const Title = styled. h2`
margin-top: 20px;
color: white;
`
    

const Input = styled.input`
width: 90%;
height: 30px;
padding-left: 15px;
margin-top: 20px;
border: none;
background-color: white;
color: #990099;

&:focus{
    outline: none;
}
`

const Button = styled.button`
border: 0;
background-color: none;
margin-top: 25px;
width: 70%;
padding: 10px;
border-radius: 10px;
background-color: white;
color: #990099;
font-weight: 500;
`

const Button1 = styled.button`
border: 0;
background-color: none;
margin-top: 25px;
width: 70%;
padding: 10px;
border-radius: 10px;
background-color: #990099;
color: white;
font-weight: 500;
border: 1px solid white;
`

const BasicForm = () => {
    const [submitted, setSubmitted] = useState(false)

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    const handleFirstName = (ev) => {
        setValues({...values, firstName: ev.target.value})
    }

    const handleLastName = (ev) => {
        setValues({...values, lastName: ev.target.value})
    }
    const handleEmail = (ev) => {
        setValues({...values, email: ev.target.value})
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()

        const newUserData = {values}
        console.log(newUserData)

        setSubmitted(true)

        setValues({
        firstName: '',
        lastName: '',
        email: ''
        })
    }

    return (
        
    <Form onSubmit={handleSubmit}>
        <Wrapper>
            
            {!submitted && <Title>Enter your details</Title>}
            {submitted && <Title>New user submitted</Title>}
            
                <Input 
                name='firstName'
                type='text'
                placeholder='First Name'
                value={values.firstName}
                onChange={handleFirstName}
                />
                <Input 
                name='lastName'
                type='text'
                placeholder='Last Name'
                value={values.lastName}
                onChange={handleLastName}
                />
                <Input 
                name='email'
                type='email'
                placeholder='Email'
                value={values.email}
                onChange={handleEmail}
                />
                {!submitted && <Button type="submit">Add User</Button>}
                {submitted && <Button1 type="button">Thank You</Button1>}
        </Wrapper>
    </Form>
    )
}

export default BasicForm
