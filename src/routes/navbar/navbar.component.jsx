import React, { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navbar.styles.scss';

const Navbar = () => {
  return (
          <Fragment>
            <div className='navbar'>
             <Link className='logo-container' to='/'>
              <CrwnLogo className='logo'/>
              </Link>
              <div className='links-container'>
                <Link className='nav-links-container' to='/shop'>
                    SHOP
                </Link>
                <Link className='nav-links-container' to='/auth'>
                    SIGN IN
                </Link>
              </div>
            </div>
            <Outlet />
          </Fragment>
        )
      }

export default Navbar