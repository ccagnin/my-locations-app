import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {

  const dummy_users = [
    {
      id: 1, 
      name: 'Cax Cagnin', 
      image: 'https://images.pexels.com/photos/3978007/pexels-photo-3978007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
      places: '3' 
    }
  ]; 

  return <UsersList items={dummy_users} />
};

export default Users;
