import React, { useState } from "react";

import ModalCharacter from "../ModalCharacter/ModalCharacter";

export default function CharacterBadge({
  characterData,
  addCharacterToTeam,
  addButton = true,
}) {
  const verifyTeamSize = () => {
    // verify if team have less than six members, and they are 3 good and 3 bad
    return;
  };

  const AddButton = () => {
    if (addButton) {
      return (
        <button className="btn btn-primary m-1" onClick={addCharacterToTeam}>
          Agregar
        </button>
      );
    }
    return(
      null
    )
  };

  return (
    <div className="card mb-3">
      <div className="row g-0">
        {/* <div >
          </div> */}
        <img
          src={characterData.image.url}
          className="card-img-top"
          alt={characterData.name}
        />
        <div className="col-md-12">
          <div className="card-body">
            <h5 className="card-title">{characterData.name}</h5>
            <AddButton />
            {/* <button
              className="btn btn-primary m-1"
              onClick={addCharacterToTeam}
            >
              Agregar
            </button> */}
            <button
              className="btn btn-secondary m-1"
              data-bs-toggle="modal"
              data-bs-target={"#detailsModal" + characterData.id}
            >
              Detalles
            </button>
          </div>
        </div>
      </div>

      <ModalCharacter
        work={characterData.work}
        appearance={characterData.appearance}
        powerstats={characterData.powerstats}
        id={characterData.id}
        addCharacter={addCharacterToTeam}
      />
    </div>
  );
}
