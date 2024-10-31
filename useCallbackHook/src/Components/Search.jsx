import React, { memo } from 'react'

const Search = memo(({hanldeSearch , search}) => {
    console.log('search re-rendered')
  return (
    <input type="text"  value={search} onChange={(e)=> hanldeSearch(e.target.value)} />
  )
})

export default Search