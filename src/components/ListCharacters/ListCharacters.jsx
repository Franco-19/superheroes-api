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
                                    characterData={character}
                                    // name={character.name} 
                                    // img={character.image.url}
                                    // id={character.id}
                                    // work={character.work}
                                    // appearance={character.appearance}
                                    // powerstats={character.powerstats}
                                    addCharacterToTeam={addCharacterToTeam}
                                />
                            </div>
                        )
                    })
                }
            </div>
            <div className="modal fade" id="detailsModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    ...
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
            <button onClick={() => console.log(teams)} >consultar estado</button>
        </div>
    )

}
