import React from 'react'
import axios from "axios";
import { SearchInput } from './SearchInput'
import { ImageList } from "./ImageList";

export class App extends React.Component {

    state = { imageList: [] }

    onSearchInput = async (e) => {
        if (e !== '') {
            const res = await axios.get(`https://pixabay.com/api/?key=26327819-27a54b2dfe378547093764858&q=${e}&image_type=photo`)
            this.setState({ imageList: res.data.hits })
        }
        // e !== '' ? console.log(e) : console.log();
    }

    render() {
        return (
            <div className='ui container'>
                <SearchInput onSearchInput={this.onSearchInput} />
                <div className='main'>
                    <h3 className='banner'> {this.state.imageList.length} images found</h3>
                    <ImageList images={this.state.imageList} />
                </div>
            </div>
        )
    }
}
