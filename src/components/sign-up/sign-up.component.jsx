import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import './sign-up.style.scss'

class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()

        const { displayName, email, password, confirmPassword } = this.state

        if (password !== confirmPassword) {
            alert('password do not match')
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, { displayName })

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.error(error)
        }
    }

    handleChange = event => {
        const { name, value } = event.target

        this.setState({ [name]: value })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state

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
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name='email'
                        type='email'
                        value={email}
                        label='Email'
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={password}
                        label='Password'
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name='confirmPassword'
                        type='password'
                        value={confirmPassword}
                        label='Confirm Password'
                        handleChange={this.handleChange}
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp