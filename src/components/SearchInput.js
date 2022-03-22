import React from 'react'

export class SearchInput extends React.Component {

    state = { entry: '' }

    onFormSubmit = (e) => {
        e.preventDefault()
        this.props.onSearchSubmit(this.state.entry)
    }

    render() {
        return (
            <div className='ui segment'>
                <form className='ui form' onSubmit={this.onFormSubmit}>
                    <div className='field'>
                        <div className='ui massive icon input'>
                            <label htmlFor='input' className='label'>Search: </label>
                            <input type='text' name='input' className='' placeholder='Type anything!' onChange={(e) => { this.setState({ entry: e.target.value }) }} value={this.state.entry}></input>
                            <i className='search icon'></i>
                        </div>
                    </div>
                </form >
            </div >
        )
    }
}
