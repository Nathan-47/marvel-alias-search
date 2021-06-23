import React, {useState} from 'react'

const Filter = ({search}) => {
    const[name,setName] = useState('')

    const onSearch= (s) => {
        setName(s)
        search(s)
    }

    return (
        <div className="search-bar"> 
                <input id="name-input"
              placeholder="Character Name"
              type="text"
              autoFocus
              // Handler returns event data in this case the input value and is activated when value has been typed in
                onChange={(e)=>onSearch(e.target.value)}
                value={name}/>
                </div>
    )
}

export default Filter