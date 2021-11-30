import React, { Fragment, useState } from 'react'

import { useFormik } from 'formik';
import axios from 'axios';
import ListCharacters from '../ListCharacters/ListCharacters';

export default function Search({ setActualTeam, teams }) {

    const [characters, setCharacters] = useState([]);

    const searchCharacter = (name) => {
        axios.get(`https://www.superheroapi.com/api.php/3085941028317253/search/${name}`)
            .then((response) => {
                // console.log(response.data.results)
                if(response.data.response == 'success'){
                    setCharacters(response.data.results)
                }
            })
    }

    const formik = useFormik({
      initialValues: {
        searchInput: '',
      },
      onSubmit: values => {
        searchCharacter(values.searchInput)
      },
    });

    const updateTeam = (team, character) => {
      
    }

    return (
      <Fragment>
        <form onSubmit={formik.handleSubmit} className="d-flex mx-4">
          <input
              className="form-control me-2"
              id="searchInput"
              name="searchInput"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.searchInput}
          />
        
          {/* <button type="submit">Submit</button> */}
          <button className="btn btn-outline-success" type="submit" >Buscar</button>
        </form>
        <ListCharacters searchResultArray={characters} setActualTeam={setActualTeam} teams={teams} />
      </Fragment>
    );
}
