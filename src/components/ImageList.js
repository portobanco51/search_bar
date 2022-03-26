import React from 'react'

export const ImageList = (props) => {
    const imgs = props.images.map(img => {
        return (
            <img className='image' src={img.webformatURL} alt={img.id} key={img.id} />
        )
    });
    return (
        <div className='image-list' >{imgs}</div>
    )
}
