import React from 'react';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <Link to='/' style={{ color: '#fff' }}>
                    <img
                        alt='Farinter Brand'
                        src='data:image/png;base64,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'
                        width='140px'
                        height='auto'
                    />
                </Link>
            </div>
            <ul>
                <li>
                    <Link to="/login" className='link'>
                        <FaSignInAlt /> Login
                    </Link>
                </li>
                <li>
                    <Link to="/registro">
                        <FaUser /> Registro
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header