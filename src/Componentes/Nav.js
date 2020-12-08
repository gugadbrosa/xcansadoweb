import React from 'react';
import PropTypes from 'prop-types';

function Nav(props) {
    const logged_out_nav = (
        <ul>
            <button className="btn-primary btn" onClick={() => props.display_form('login')}>Login</button>
            <button className="btn-primary btn" onClick={() => props.display_form('signup')}>Cadastre-se</button>
            <a className="btn-primary btn" href='http://localhost:3000/' role='button'>Retornar à página principal</a>
        </ul>
    );

    const logged_in_nav = (
        <ul>
            <button className="btn-primary btn" onClick={props.handle_logout}>logout</button>
            <a className="btn-primary btn" href='http://localhost:3000/' role='button'>Retornar à página principal</a>
        </ul>
    );
    return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
}

export default Nav;

Nav.propTypes = {
    logged_in: PropTypes.bool.isRequired,
    display_form: PropTypes.func.isRequired,
    handle_logout: PropTypes.func.isRequired
};