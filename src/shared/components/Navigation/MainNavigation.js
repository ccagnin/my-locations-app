import React, { useState } from 'react';
import MainHeader from './MainHeader';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';
import './MainNavigation.css';

const MainNavigation = props => {
    const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

    const toggleSideDrawer = () => {
        setIsSideDrawerOpen(true);
        console.log('toggleSideDrawer');
    };

    const closeSideDrawer = () => {
        setIsSideDrawerOpen(false);
        console.log('closeSideDrawer');
    }

    return (
        <React.Fragment>
            {isSideDrawerOpen && <Backdrop onClick={closeSideDrawer} /> }
            <SideDrawer show={isSideDrawerOpen} onClick={closeSideDrawer}>
                <nav className="main-navigation__drawer-nav">
                    <NavLinks />
                </nav>
            </SideDrawer>

            <MainHeader>
                <button className='main-navigation__menu-btn' onClick={toggleSideDrawer}>
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className='main-navigation__title'>
                    <Link to="/">Your Places</Link>
                </h1>
                <nav className='main-navigation__header-nav'>
                    <NavLinks />
                </nav>
            </MainHeader>
        </React.Fragment>
    );
};

export default MainNavigation;

