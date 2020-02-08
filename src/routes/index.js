import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import '../config/StatusBarConfig';

import MainStack from './MainStack';
import AuthStack from './AuthStack';

const App = createAppContainer(
    createSwitchNavigator(
        {
            AuthStack,
            MainStack
        },
        {
            initialRouteName: 'AuthStack'
        }
    )
);

export default App;
