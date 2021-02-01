import React from 'react'
import { NavigationContainer, } from '@react-navigation/native';
import { createStackNavigator,} from '@react-navigation/stack';
import Home from '../Screens/HomeScreen/Home/index';
import Login from '../Screens/Authentication/Login/index';
import LoginOtp from '../Screens/Authentication/LoginOtp/index';
import RegisterMobileNo from '../Screens/Authentication/RegisterMobileNo/index';
import RegisterOtp from '../Screens/Authentication/RegisterOtp/index';
import RegisterUser from '../Screens/Authentication/RegisterUser/index';
import EditProfile from '../Screens/Authentication/EditProfile/index';
import MaaliService from '../Screens/HomeScreen/MaaliService/index';
import KitchenGarden from '../Screens/HomeScreen/KitchenGraden/index';
import Horticulture from '../Screens/HomeScreen/Horticulture/index';
import AgriDoctor from '../Screens/HomeScreen/AgriDoctor/index';
import SoilTest from '../Screens/HomeScreen/SoilTest/index';
import SavePlants from '../Screens/HomeScreen/SavePlants/index'; 
import QuerySubmit from '../Screens/HomeScreen/QuerySubmit/index';

const authStack = createStackNavigator();

function MyStack() {
  return (
    <authStack.Navigator
      initialRouteName="Home"
       screenOptions={{
         headerShown: false, 
 
       }}
      >
      <authStack.Screen 
        name="Home" 
        component={Home} 
        options={
           {headerShown: false}
        }
      />       
      <authStack.Screen 
        name="Login" 
        component={Login} 
        options={
          {headerShown: false} 
        }
      />
       <authStack.Screen 
        name="LoginOtp" 
        component={LoginOtp} 
        options={
          {headerShown: false} 
        }
      />
        <authStack.Screen 
        name="RegisterMobileNo" 
        component={RegisterMobileNo} 
        options={
          {headerShown: false} 
        }
      />
        <authStack.Screen 
        name="RegisterOtp" 
        component={RegisterOtp} 
        options={
          {headerShown: false} 
        }
      />
       <authStack.Screen 
        name="RegisterUser" 
        component={RegisterUser} 
        options={
          {headerShown: false} 
        }
      />
       <authStack.Screen 
        name="EditProfile" 
        component={EditProfile} 
        options={
          {headerShown: false} 
        }
      />
        <authStack.Screen 
        name="Maali" 
        component={MaaliService} 
        options={
          {headerShown: false} 
        }
      />
        <authStack.Screen 
        name="Kitchen Garden" 
        component={KitchenGarden} 
        options={
          {headerShown: false} 
        }
      />
        <authStack.Screen 
        name="Horticulture" 
        component={Horticulture} 
        options={
          {headerShown: false} 
        }
      />
        <authStack.Screen 
        name="Agri-Doctor" 
        component={AgriDoctor} 
        options={
          {headerShown: false} 
        }
      />
        <authStack.Screen 
        name="Soil Test" 
        component={SoilTest} 
        options={
          {headerShown: false} 
        }
      />
        <authStack.Screen 
        name="Save Plants" 
        component={SavePlants} 
        options={
          {headerShown: false} 
        }
      />
       <authStack.Screen 
        name="QuerySubmit" 
        component={QuerySubmit} 
        options={
          {headerShown: false} 
        }
      />

    </authStack.Navigator>
  );
}



export default function Navigation() {
  return (
    <NavigationContainer>
<MyStack/>      
    </NavigationContainer>
  );
}
