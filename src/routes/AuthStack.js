import { createStackNavigator } from 'react-navigation-stack';

import Login from '../pages/Login';

const AuthStack = createStackNavigator(
    {
        Login
    },
    {
        defaultNavigationOptions: {
            headerShown: false,
        },
    }
);

export default AuthStack;
