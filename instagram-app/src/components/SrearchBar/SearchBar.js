import React from 'react';
import instag_camera from './asset/instag_camera.png';
import instagram from './asset/instagram.png';
import instag_compas from './asset/instag_compas.png';
import instag_heart from './asset/instag_heart.png';
import instag_man from './asset/instag_man.png';
import instag_vert from './asset/instag_vertical.png';

function SearchBar(props) {
    
     const submitHandeler = (e)=>{
        e.preventDefault();
        props.Search();
     }

    return (
        <div className='searchbar'>
            <img src={instag_camera} alt='camera' />
            <img src={instag_vert} alt='vertical' />
            <img src={instagram} alt='instagram' />
            <form className='search' onSubmit={submitHandeler}>
             <input  className='search' 
             type='text'  name='search' 
             placeholder = 'Search... &#128269; '
             onChange={props.serachChangeHundeler} 
             />
            </form>
            <img src={instag_compas} alt='explore' />
            <img src={instag_heart} alt='heart' />
            <img src={instag_man} alt='account' />
        </div>
    )
};

export default SearchBar;