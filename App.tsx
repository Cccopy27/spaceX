import React from 'react';
import { StyleSheet, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {StackNavigationOptions} from "@react-navigation/stack";
import {ApolloClient, InMemoryCache, ApolloProvider,useQuery, gql} from "@apollo/client";

import Home from './screens/Home';
import Detail from './screens/Detail';


//apollo client
const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});

client.query({
  query: gql`
    {
    rockets {
      id
      }
    }
  `
}).then(result => console.log(result));

const Stack = createNativeStackNavigator();

const screenOptionStyles: NativeStackNavigationOptions ={
  headerShown: false,
}
const App: React.FC=()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={screenOptionStyles}>
        <Stack.Screen 
        name="Home" 
        component={Home}
        />
        <Stack.Screen name="Detail" component={Detail}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
