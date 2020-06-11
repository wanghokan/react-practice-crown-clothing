import ShopActionsTypes from './shop.types'

import { firestore, convertColletionsSnapshopToMap } from '../../firebase/firebase.utils'

export const fetchCollectionsStart = () => ({
    type: ShopActionsTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = collectionMaps => ({
    type: ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMaps
})

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionsTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections')
        dispatch(fetchCollectionsStart())

        collectionRef.get()
            .then(snapshot => {
                const collectionMaps = convertColletionsSnapshopToMap(snapshot)
                dispatch(fetchCollectionsSuccess(collectionMaps))
            })
            .catch(error => dispatch(fetchCollectionsFailure(error.message)))
    }
}