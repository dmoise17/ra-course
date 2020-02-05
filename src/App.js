// in src/App.js
import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserList from './features/users/UserList';
import UserEdit from './features/users/UserEdit';

const dataProvider = jsonServerProvider('http://localhost:3004');
const App = () => <Admin dataProvider={dataProvider} >
    <Resource name="users" list={UserList} edit={UserEdit}/> 
  </Admin>;

export default App;