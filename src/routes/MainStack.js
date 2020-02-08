import { createStackNavigator } from 'react-navigation-stack';

import Main from '../pages/Main';

export default createStackNavigator(
    {
        Main
    },
    {
        defaultNavigationOptions: {
            title: 'Notas',
            headerStyle: {
                backgroundColor: '#da552f',
            },
            headerTintColor: '#fff'
        }
    }
);
