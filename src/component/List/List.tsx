import React from 'react'

import './List.css'
import StaticDataList from './StaticDataList/StaticDataList'
import StoreList from './StoreList/StoreList'

function List(): React.ReactElement {
  return (
    <div className="list">
      <StaticDataList />
      <StoreList />
    </div>
  )
}

export default List
