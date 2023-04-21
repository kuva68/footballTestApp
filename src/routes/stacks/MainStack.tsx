import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Homepage from '@scenes/Homepage';
import Login from '@scenes/LoginPage';
import Register from '@scenes/RegisterPage';
import customTheme from '@theme';
import { FC } from 'react';
import * as React from 'react';

const MainStack = createStackNavigator();

export const MainStackScreen: FC = () => {
  return (
    <MainStack.Navigator initialRouteName="Register">
      <MainStack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,

          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name="Home"
        component={Homepage}
        options={{
          headerShown: false,

          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,

          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </MainStack.Navigator>
  );
};
