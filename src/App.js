// in src/App.js
import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import GroupList from './features/groups/GroupList';
import GroupCreate from './features/groups/GroupCreate';
import GroupEdit from './features/groups/GroupEdit';
import UserList from './features/users/UserList';
import UserEdit from './features/users/UserEdit';
import UserCreate from './features/users/UserCreate';
import { MyTheme } from './MyTheme';

const dataProvider = jsonServerProvider('http://localhost:3004');
const App = () => <Admin dataProvider={dataProvider} theme={MyTheme}>
    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate}/> 
    <Resource name="groups" list={GroupList} edit={GroupEdit} create={GroupCreate}/>
  </Admin>;

export default App;