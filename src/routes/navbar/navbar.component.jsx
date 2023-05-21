import React, { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navbar.styles.scss';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils'

const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  }
  
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
                {
                  currentUser ? (
                    <span className='nav-link' onClick={signOutHandler}>SIGN OUT</span> 
                    ) : (
                      <Link className='nav-links-container' to='/auth'>
                        SIGN IN
                      </Link>
                )}
              </div>
            </div>
            <Outlet />
          </Fragment>
        )
      }

export default Navbar