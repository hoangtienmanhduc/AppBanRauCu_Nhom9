import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import GetStart from './src/screen/GetStart'
import Home from './src/screen/Home'
import Favourite from './src/screen/Favourite'
import Detail from './src/screen/Detail'
import Login from './src/screen/Login'
import Register from './src/screen/Register'
import Profile from './src/screen/Profile'
import OrderDetail from './src/screen/OrderDetail'
import Cart from './src/screen/Cart'

function StackNavigater() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="GetStart" options={{ headerMode: 'none' }} component={GetStart} />
        <Stack.Screen name="Home" options={{ headerMode: 'none' }} component={Home} />
        <Stack.Screen name="Favourite" options={{ headerMode: 'none' }} component={Favourite} />
        <Stack.Screen name="Detail" options={{ headerMode: 'none' }} component={Detail} />
        <Stack.Screen name="Login" options={{ headerMode: 'none' }} component={Login} />
        <Stack.Screen name="Register" options={{ headerMode: 'none' }} component={Register} />
        <Stack.Screen name="Profile" options={{ headerMode: 'none' }} component={Profile} />
        <Stack.Screen name="OrderDetail" options={{ headerMode: 'none' }} component={OrderDetail} />
        <Stack.Screen name="Cart" options={{ headerMode: 'none' }} component={Cart} />
    </Stack.Navigator>
  );
}
const Main = () => {
    return (
        <NavigationContainer>
            <StackNavigater></StackNavigater>
        </NavigationContainer>
    );
};

export default Main;
