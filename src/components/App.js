import React from 'react'
import { SearchInput } from './SearchInput'

export class App extends React.Component {

    onSearchInput = (e) => {
        console.log(e)
    }

    render() {
        return (
            <div className='ui container'>
                <SearchInput onSearchSubmit={this.onSearchInput} />
            </div>
        )
    }
}
