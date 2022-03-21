import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './components/App'
import './css/style.css'

export const Index = () => {
    return (
        <div><App /> </div>
    )
}

ReactDOM.render(<Index />, document.querySelector('#root'))