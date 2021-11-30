import React from 'react'
import { useState } from 'react/cjs/react.development'
import CharacterBadge from '../CharacterBadge/CharacterBadge'

export default function ListCharacters({ searchResultArray, setActualTeam, teams }) {
    
    // console.log(searchResultArray)
    // const [newTeam, setNewTeam] = useState([])
    

    return(
        <div className="container mt-3">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                {
                    searchResultArray.map((character) => {

                        const addCharacterToTeam = () => {
                            setActualTeam([...teams, character])
                        }

                        return (
                            <div className="col" key={character.id}>
                                <CharacterBadge 
                                    name={character.name} 
                                    img={character.image.url}
                                    id={character.id}
                                    addCharacterToTeam={addCharacterToTeam}
                                />
                            </div>
                        )
                    })
                }
            </div>
            <button onClick={() => console.log(teams)} >consultar estado</button>
        </div>
    )

}
