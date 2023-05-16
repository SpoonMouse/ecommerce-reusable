import React, { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navbar.styles.scss';
import { UserContext } from '../../contexts/user.context';

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  
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