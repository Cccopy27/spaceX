import React, {useState}from 'react';
import { StyleSheet, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {ApolloClient, InMemoryCache, ApolloProvider, gql} from "@apollo/client";

import Home from './screens/Home';
import Detail from './screens/Detail';


//apollo client
const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});

const Stack = createNativeStackNavigator();

const screenOptionStyles: NativeStackNavigationOptions ={
  headerStyle:{
    backgroundColor: "black",
  },
  headerTintColor:"red",
  title: "Space X",
  headerTitleAlign:"center",
  headerTitleStyle:{
    fontWeight:"bold",
  }
  
}
const App: React.FC=()=> {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>

  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
  },
});
