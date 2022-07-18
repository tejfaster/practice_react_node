import React from 'react'
import './style/app.css'
import Header from '../components/header'
import SignUp from '../screen/signUp'

const App = () => {
    return (
        <div className="App">
            <Header/>
            <SignUp/>
        </div>
    )
}

export default App