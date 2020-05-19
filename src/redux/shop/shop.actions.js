import ShopActionsTypes from './shop.types'

export const updateCollections = (collectionMaps) => ({
    type: ShopActionsTypes.UPDATE_COLLECTIONS,
    payload: collectionMaps
})