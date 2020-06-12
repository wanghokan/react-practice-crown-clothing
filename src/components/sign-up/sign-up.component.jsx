import React, { useState } from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { signUpStart } from '../../redux/user/user.action'

import './sign-up.style.scss'

const SignUp = ({ signUpStart }) => {

    const [userCredentials, setCredentials] = useState({ displayName: '', email: '', password: '', confirmPassword: '' })

    const { displayName, email, password, confirmPassword } = userCredentials

    const handleSubmit = async event => {
        event.preventDefault()

        if (password !== confirmPassword) {
            alert('password do not match')
            return
        }

        signUpStart({ displayName, email, password })
    }

    const handleChange = event => {
        const { name, value } = event.target

        setCredentials({ ...userCredentials, [name]: value })
    }

    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput
                    name='displayName'
                    type='text'
                    value={displayName}
                    label='Display Name'
                    onChange={handleChange}
                    required
                />
                <FormInput
                    name='email'
                    type='email'
                    value={email}
                    label='Email'
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    label='Password'
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    name='confirmPassword'
                    type='password'
                    value={confirmPassword}
                    label='Confirm Password'
                    handleChange={handleChange}
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp)