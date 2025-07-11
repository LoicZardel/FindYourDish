import React from 'react';

import { Route, Routes } from 'react-router-dom';
import AdminListePlat from './AdminListePlat';
import SideBarMenu from './SideBarMenu';

function AdminApp() {

  return (
    <div>
      <SideBarMenu />   
        
      <Routes>
        <Route path='/' element={<AdminListePlat />} />  
        
      </Routes>
    </div>
    
  );
}

export default AdminApp;