import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';

// components
// import Search from '../components/search/Search';
import CharacterBadge from '../components/CharacterBadge/CharacterBadge';
import StatsBadge from '../components/StatsBadge/StatsBadge';

export default function Home({ teams }) {

    const createTeam = () => {
        // this function should create a team
        return
    }

    const searchCharacter = (name) => {
        // return character by name
        return
    }

    const listTeams = () => {
        // return a list of all teams avaiables
        return
    }

    if(teams.length !== 0){
        return(
            <div className="">
                <p>Mostrando equipo</p>
                <p>Total Stats!</p>
                <StatsBadge teams={teams} />
                <div className="container mt-3">
                    <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4">
                        {
                            teams.map((team) => {
                                return(
                                    <div className="col">
                                        <CharacterBadge characterData={team} addButton={false} />
                                    </div>
                                )
                            })
                        }
                        <button onClick={() => console.log(teams)} >consultar estado</button>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <Fragment>
            <p>No hay equipos para mostrar actualmente</p>
            <p>Empieza por <Link to="/create">crear uno!</Link></p>
            
        </Fragment>
    )
}
