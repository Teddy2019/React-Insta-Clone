import React from 'react';
import instag_camera from './asset/instag_camera.png';
import instagram from './asset/instagram.png';
import instag_compas from './asset/instag_compas.png';
import instag_heart from './asset/instag_heart.png';
import instag_man from './asset/instag_man.png';
import instag_vert from './asset/instag_vertical.png';

function SearchBar() {
    return (
        <div className='searchbar'>
            <img src={instag_camera} alt='camera' />
            <img src={instag_vert} alt='vertical' />
            <img src={instagram} alt='instagram' />
            <input  className='search' type='text'  name='search' />
            <img src={instag_compas} alt='explore' />
            <img src={instag_heart} alt='heart' />
            <img src={instag_man} alt='account' />
        </div>
    )
};

export default SearchBar;