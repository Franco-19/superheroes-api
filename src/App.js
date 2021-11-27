import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Index from './routes/Index'

export default function App() {
    return (
        <BrowserRouter>
            <Index/>
        </BrowserRouter>
    )
}
