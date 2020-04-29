import React from 'react'
import MenuItem from '../menu-item/menu-item.component'

class Directory extends React.Component {
  state = {
    sections: [
      {
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id: 1,
      },
      {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id: 2,
      },
    ],
  }

  render() {
    return (
      <div className="directory">
        {this.state.sections.map(({ id, ...other }) => (
          <MenuItem key={id} {...other} />
        ))}
      </div>
    )
  }
}

export default Directory
