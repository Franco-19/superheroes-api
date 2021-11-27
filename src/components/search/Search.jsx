import React from 'react'

export default function Search() {
    return (
        <form className="d-flex mx-4 ">
            <input className="form-control me-2" type="search" placeholder="Nombre de heroe" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Buscar</button>
        </form>
    )
}
