import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';

// components
// import Search from '../components/search/Search';

export default function Home({ teams }) {

    // const [teams, setTeams] = useState([]);

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
    // const ListTeams = () => {
    //     teams.map((team) => {
    //         return(
    //             <ul>
    //                 <li>{team}</li>
    //             </ul>
    //         )
    //     })
    // }
  
    if(teams.length !== 0){
        return(
            <div>
                <p>Mostrando equipos</p>
                {/* <ListTeams/> */}
                <button onClick={() => console.log(teams)} >consultar estado</button>
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
