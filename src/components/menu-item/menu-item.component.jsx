import React from 'react'
import { withRouter } from 'react-router-dom'

const MenuItem = ({ title, imageUrl, history, match }) => (
  <div
    className="menu-item"
    onClick={() => {
      history.push(`${match.url}${title}`)
    }}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="heading heading--medium">{title}</h1>
      <span className="heading heading--small">SHOP NOW</span>
    </div>
  </div>
)

export default withRouter(MenuItem)
