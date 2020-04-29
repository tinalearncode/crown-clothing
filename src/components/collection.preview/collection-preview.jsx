import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="heading heading--large">{title}</h1>
    <div className="item-list">
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
)

export default CollectionPreview
