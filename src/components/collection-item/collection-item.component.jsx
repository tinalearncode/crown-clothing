import React from 'react'

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div
      className="item-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="collection-footer heading--small">
      <span className="name">{name}</span>
      <span className="price">${price}</span>
    </div>
  </div>
)

export default CollectionItem
