import React from 'react';
import MainPageReports from 'components/reports/MainPage';
import Header from "components/Shippments/Header";
import AdmonNavbar from "components/admon/Navbar_admon";
import SimpleFooterDark from "components/SimpleFooterDark";

const Users = () => {
    return (
        <>
            <div className="absolute w-full z-20">
                <AdmonNavbar />
            </div>
            <main>
                <Header />
                <MainPageReports />
            </main>
            <SimpleFooterDark />
        </>
    )
}

export default Users;