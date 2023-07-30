import Home from '@pages/Home';

const Layout = () => {
    if (window.location.pathname === '/') {
        return <Home />;
    }
    return <>Perdido</>;
};

export default Layout;
