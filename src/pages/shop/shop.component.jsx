import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import CollectionOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionPage from '../collection/collection.component'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors'

//const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage = ({ fetchCollectionsStart, match, isCollectionsLoaded }) => {

    useEffect(() => {
        fetchCollectionsStart()
    }, [fetchCollectionsStart])

    /*
    const { updateCollections } = this.props
    const collectionRef = firestore.collection('collections')

    collectionRef.get().then(snapshot => {
        const collectionMaps = convertColletionsSnapshopToMap(snapshot)
        updateCollections(collectionMaps)
        this.setState({ loading: false })
    })

    this.unsubscribeFromSnapShot = collectionRef.onSnapshot(async snapshot => {
        const collectionMaps = convertColletionsSnapshopToMap(snapshot)
        updateCollections(collectionMaps)
        this.setState({ loading: false })
    })
    */

    return (
        <div className='shop-page'>
            <Route
                exact
                path={`${match.path}`}
                component={CollectionOverviewContainer}
            />
            <Route
                path={`${match.path}/:collectionId`}
                render={props => (
                    <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />
                )}
            />
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    isCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)