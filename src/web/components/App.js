import React from 'react'

import Header from './Header'
import '../css/main.css';

const App = ({ children }) => {
    return (
        <div className="fixed_wraper">
            <Header />
            {children}
        </div>
    )
}

export default App
