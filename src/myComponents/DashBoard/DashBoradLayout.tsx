import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/Store';
import UserDashBoard from './UserDashBoard';
import AdminDashboard from './AdminDashboard';
import Nav from '../NavBar/Nav';
import Footer from '../Footer/Footer';

const DashBoradLayout = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    const role = user.userRole;
    console.log(role);

    return (
        <div>
            <Nav /> {/* Add your Nav component here */}
            
            <div>
                {/* Conditional rendering for dashboard based on user role */}
                {role === 'user' && <UserDashBoard />}
                {role === 'admin' && <AdminDashboard />}
            </div>
            
            <Footer /> {/* Add your Footer component here */}
        </div>
    );
};

export default DashBoradLayout;
