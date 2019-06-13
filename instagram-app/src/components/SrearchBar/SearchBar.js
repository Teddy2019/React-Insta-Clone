import React from 'react';
import instag_camera from './asset/instag_camera.png';
import instagram from './asset/instagram.png';
import instag_compas from './asset/instag_compas.png';
import instag_heart from './asset/instag_heart.png';
import instag_man from './asset/instag_man.png';

function SearchBar() {
    return (
        <div>
            <img src={instag_camera} />
            <img src={instagram} />
            <input type='text' placeholder='search...' name='search' />
            <img src={instag_compas} />
            <img src={instag_heart} />
            <img src={instag_man} />
        </div>
    )
};

export default SearchBar;