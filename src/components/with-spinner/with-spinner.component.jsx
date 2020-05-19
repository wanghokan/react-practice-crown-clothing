import React from 'react'

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.style'

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
            <WrappedComponent {...otherProps} />
        )
}
/*
const WithSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
                <WrappedComponent />
            )
    }
    return Spinner
}
*/

export default WithSpinner