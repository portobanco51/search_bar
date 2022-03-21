import React from 'react'

export class SearchInput extends React.Component {
    render() {
        return (
            <div className='ui segment'>
                <form className='ui form'>
                    <div className='field'>
                        <div className='ui massive icon input'>
                            <label for='input' className='label'>Search: </label>
                            <input type='text' name='input' className='' placeholder='Type anything!'></input>
                            <i className='search icon'></i>
                        </div>
                    </div>
                </form>
            </div >
        )
    }
}
