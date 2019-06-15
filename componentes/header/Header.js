import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
    return(
        <header>
             <h1 className="text-center">{props.titulo}</h1>
            <img src="https://cdn.pixabay.com/photo/2016/10/10/14/13/dog-1728494_960_720.png"  alt="perro" width='200px'></img>
        </header>
    );

}
export default Header;

Header.propTypes = {
    titulo : PropTypes.string.isRequired
}