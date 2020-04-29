import React from 'react'
import SHOP_DATA from './shop.data'

import CollectionPreview from '../../components/collection.preview/collection-preview'

class ShopPage extends React.Component {
  state = { collections: SHOP_DATA }

  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...collection }) => {
          return <CollectionPreview key={id} {...collection} />
        })}
      </div>
    )
  }
}

export default ShopPage
