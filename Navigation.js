import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import Screen1 from './src/screen/GetStart'

function StackNavigater() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Screen1" options={{ headerMode: 'none' }} component={Screen1} />
      
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