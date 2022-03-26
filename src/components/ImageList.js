import React from 'react'

export const ImageList = (props) => {
    const imgs = props.images.map(img => {
        return (
            <div id='image-container' key={img.id} >
                <img className='image' src={img.webformatURL} alt={img.id} />
                <h6 className='detail'><b className='bold'>{img.downloads}</b> downloads</h6>
            </div>
        )
    });
    return (
        <div className='image-list' >{imgs}</div>
    )
}
