import React, { useState } from 'react';
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from 'components/navbar';
import Sidebar from 'components/sidebar'
import { useGetUserQuery } from 'state/api';

const Layout = () => {
  const isNotMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  
  const userId = useSelector((state) => state.global.userId);
  const { data } = useGetUserQuery(userId);
    
  console.log("🚀 ~ Layout ~ data:", data)

  return (
    <Box
      display={isNotMobile ? "flex" : "block"} 
      width='100%' height='100%'
    >
      <Sidebar 
        user={data || {}}
        isNotMobile={isNotMobile}   
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}   
      />

      <Box flexGrow={1}>
        <Navbar 
          user={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}   
        />
        <Outlet />
      </Box>

    </Box>
  )
}

export default Layout