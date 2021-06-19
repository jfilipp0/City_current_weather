import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './components/main'



export default function Routes() {
    return (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Main} />
        </Switch>
    </BrowserRouter>
    )
}