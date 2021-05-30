import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import ManageUsers from '../Pages/ManageUsers';
const screens={
    ManageUsers:
    {
        screen:ManageUsers
    },
}

const HomeStack=createStackNavigator(screens);

export default createAppContainer(HomeStack);
