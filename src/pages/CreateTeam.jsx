import React from 'react'
import Search from '../components/search/Search'

export default function CreateTeam({ setActualTeam, teams }) {
    return (
        <div>
            <p>¡Aqui crearemos nuestro primer equipo! <br /> Utiliza el buscador para encontrar tu personaje favorito</p>
            <Search setActualTeam={setActualTeam} teams={teams} />
        </div>
    )
}
