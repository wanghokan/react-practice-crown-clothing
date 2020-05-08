import { createSelector } from 'reselect'

const selectCart = state => state.cart

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
        0
    )
)

export const selectCartDropdownHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (totalPrice, cartItem) => totalPrice + cartItem.price * cartItem.quantity,
        0
    )
)