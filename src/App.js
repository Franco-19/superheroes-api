import React, { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Index from './routes/Index'
import Header from './shared/Header'

export default function App() {
    return (
        <Fragment>
            <BrowserRouter>
                <Header/>
                <Index/>
            </BrowserRouter>
        </Fragment>
    )
}
