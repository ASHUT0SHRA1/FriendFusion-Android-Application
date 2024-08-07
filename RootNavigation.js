import React from 'react';
import { AuthProvider } from './context/authcontext';
import Screenmenu from './Menus/Screenmenu';
import { PostProvider } from './context/postcontext';

const RootNavigation = () => {
  return (
    <AuthProvider>
      <PostProvider>
        <Screenmenu/>
      </PostProvider>
    </AuthProvider>
  );
};

export default RootNavigation;

