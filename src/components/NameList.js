import React from 'react'

function NameList() {
    const names = ['sid','mahima', 'suchak','yande']
  return (
    <div>
      {names.map(n => <h2>{n}</h2>)}
    </div>
  )
}

export default NameList
