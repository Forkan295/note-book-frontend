import Link from 'next/link';
import Layout from '../src/includes/Layout';
import Home from '../src/includes/home';
import { useSelector } from 'react-redux'

import React from 'react';
const Index = () => {
    const isLogin = useSelector((state) => {
        return state.login.value
    })

    return (
        <Layout container = {false}>
            <Home />
        </Layout>
    );
}

export default Index;
