import React from 'react';
import { StyleSheet, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Detail from './screens/Detail';


const Stack = createNativeStackNavigator();

// const screenOptionStyles = () = {

// }
const App: React.FC=()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Home}
        options={{}}
        />
        <Stack.Screen name="Detail" component={Detail}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
