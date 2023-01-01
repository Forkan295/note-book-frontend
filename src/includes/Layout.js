import React from 'react';
import Container from '@mui/material/Container';
import Nav from './navbar'

const Layout = ({ children, container = true }) => {
    return (
        <>
            <Nav />
            {
                container ?
                    <Container maxWidth="xl">
                        {children}
                    </Container> :
                    <>
                        {children}
                    </>
            }
        </>
    );
}

export default Layout;
