import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import GetStart from './src/screen/GetStart'
import Home from './src/screen/Home'
import Favourite from './src/screen/Favourite'

function StackNavigater() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="GetStart" options={{ headerMode: 'none' }} component={GetStart} />
        <Stack.Screen name="Home" options={{ headerMode: 'none' }} component={Home} />
        <Stack.Screen name="Favourite" options={{ headerMode: 'none' }} component={Favourite} />
    </Stack.Navigator>
  );
}
const Main = ()=>{
  return(
    <NavigationContainer>
      <StackNavigater>

      </StackNavigater>
    </NavigationContainer>
  )
}

export default Main;