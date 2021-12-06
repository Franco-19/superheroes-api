import React from "react";

const ListTitleUnderline = ({ text }) => {
  return(
    <span className="fw-bold text-decoration-underline">{text}</span>
  )
}

export default function ModalCharacter({ work, appearance, powerstats, id, addCharacter }) {
  return (
    <div
      className="modal fade"
      id={"detailsModal" + id}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <ul className="list-group mb-3">
              <li className="list-group-item"><h4>Work</h4></li>
              <li className="list-group-item"><ListTitleUnderline text="Work Base"/>: {work.base}</li>
              <li className="list-group-item">
                <ListTitleUnderline text="Work Occupation" />: {work.occupation}
              </li>
            </ul>

            <div className="row">
              <div className="col-6">
                <ul className="list-group list-group-flush">
                  <h4>Appearance</h4>
                  <li className="list-group-item"><ListTitleUnderline text="Eye color" />: {appearance["eye-color"]}</li>
                  <li className="list-group-item"><ListTitleUnderline text="Gender" />: {appearance.gender}</li>
                  <li className="list-group-item"><ListTitleUnderline text="Hair color" />: {appearance["hair-color"]}</li>
                  <li className="list-group-item"><ListTitleUnderline text="Height" />: {appearance.height[1]}</li>
                  <li className="list-group-item"><ListTitleUnderline text="Race" />: {appearance.race}</li>
                  <li className="list-group-item"><ListTitleUnderline text="Weight" />: {appearance.weight[1]}</li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-group list-group-flush">
                  <h4>Powerstats</h4>
                  <li className="list-group-item"><ListTitleUnderline text="Combat" />: {powerstats.combat}</li>
                  <li className="list-group-item"><ListTitleUnderline text="Durability" />: {powerstats.durability}</li>
                  <li className="list-group-item"><ListTitleUnderline text="Intelligence" />: {powerstats.intelligence}</li>
                  <li className="list-group-item"><ListTitleUnderline text="Power" />: {powerstats.power}</li>
                  <li className="list-group-item"><ListTitleUnderline text="Speed" />: {powerstats.speed}</li>
                  <li className="list-group-item"><ListTitleUnderline text="Strenght" />: {powerstats.strength}</li>
                </ul>
              </div>
            </div>


          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={addCharacter}>
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
