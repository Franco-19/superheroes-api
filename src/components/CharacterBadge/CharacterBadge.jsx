import React from 'react'

export default function CharacterBadge({ img, name, id, addCharacterToTeam }) {

  // const addCharacterToTeam = () => {
  //   // after verification, add character to an object
  //   return
  // }

  const verifyTeamSize = () => {
    // verify if team have less than six members, and they are 3 good and 3 bad
    return
  }

  // const handleCharacter = (id) => {
  //   addCharacterToTeam(id)
  // }

  return (
      <div className="card mb-3">
        <div className="row g-0">
          {/* <div >
          </div> */}
            <img src={img} className="card-img-top" alt={name}/>
          <div className="col-md-12">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <button className="btn btn-primary" onClick={addCharacterToTeam} >Agregar</button>
            </div>
          </div>
        </div>
      </div>
  )
}
