import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from './navigator/AppNavigator';


const Stack = createStackNavigator();


const App: React.FC = () => {
  return (
  <AppNavigator/>
  );};

export default App;
