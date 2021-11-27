import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';

// components
// import Search from '../components/search/Search';

export default function Home() {

    const [teams, setTeams] = useState([]);

    // const teams = [
    //     {
    //         name: 'avengers',
    //         members: 'Hulk; IronMan; Thor; Capitan America;'
    //     }
    // ]

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

    // if(teams.length == 0){
    //     return (
    //         <p>No existe nigún equipo actualmente</p>
    //     )
    // }

  
    if(teams.length !== 0){
        return(
            <p>Mostrando equipos</p>
        )
    }

    return(
        <Fragment>
            <p>No hay equipos para mostrar actualmente</p>
            <p>Empieza por <Link to="/create">crear uno!</Link></p>
            
        </Fragment>
    )
}
