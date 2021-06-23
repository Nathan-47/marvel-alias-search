import React from 'react'
import CharacterMarvels from './CharacterMarvels'

const CharacterTable = ({marvels,isLoading}) => {
    // Gives a loading msg when data is being retrieved
    return isLoading ? <h1 id="heading-one">Loading</h1> :
    <section className="contents">
        {
            // Slice will return 1 item from array instead of all
            // Map returns callback data in correct order
            marvels.slice(0, 1).map(item=>(
                <CharacterMarvels key={item.id} item={item}></CharacterMarvels>
            ))
        }
    </section>
}

export default CharacterTable