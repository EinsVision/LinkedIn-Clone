import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';

function Header() {

    const dispatch = useDispatch();
    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    };

    return (
        <div className='header'>
            <div className='header__left'>
                <img src='https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1613268512~hmac=c0144cc2965b14d522c09d39498c2d38' alt=''/>

                <div className='header__search'>
                    <SearchIcon />
                    <input placeholder='Search' type='text' />
                </div>
                
            </div>

            <div className='header__right'>
                <HeaderOption Icon={ HomeIcon } title='Home'/>
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
                <HeaderOption Icon={ChatIcon} title='Messaging'/>
                <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
                <HeaderOption 
                    onClick={logoutOfApp}
                    avatar='https://lh3.googleusercontent.com/ogw/ADGmqu-1Qpu1Yl1nZeuXf2YX2U1PLD8Rqh6lLVuVLHvK=s192-c-mo' 
                    title='me'/>
            </div>
            
        </div>
    )
}

export default Header;
