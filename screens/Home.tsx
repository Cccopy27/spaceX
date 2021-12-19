import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native'
import React from "react";
import { useQuery,gql } from '@apollo/client';
import {useNavigation} from '@react-navigation/native';
import { homeScreenNavigationProp } from '../types/types';
// query
const rocketInfo = gql`
  query GetRocketInfo {
  rockets {
    id
    name
    company
    cost_per_launch
    country
    description
    first_flight
    height {
      meters
    }
    diameter {
      meters
    }
    mass {
      kg
    }
    wikipedia
  }
}
  `

const Home:React.FC=()=> {
  const navigation = useNavigation<homeScreenNavigationProp>();
    const {data,loading,error} = useQuery(rocketInfo);
    console.log(data);
    
    return (
        <View style={styles.header}>
          <Text style={styles.headerTitle}>All Rocket</Text>
            {!loading && <FlatList style={styles.flatlist}
            data={data.rockets}
            renderItem={({item})=>(
                <TouchableOpacity
                onPress={()=>{navigation.navigate("Detail",item)}}
                style={styles.itemContainer}>
                    <Text style={styles.item}>{item.name}</Text>
                </TouchableOpacity>
            )}
            />}

            {loading && <Text>Loading...</Text>}   
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
  header:{
    flex:1,
    marginTop: 15,

  },
  headerTitle:{
    justifyContent: "center",
    alignSelf: "center"
  },
  flatlist:{
    marginTop: 30,
  },
  item:{
    marginBottom: 5,
    marginVertical: 10,
  },
  itemContainer:{
    alignItems: 'center',
    backgroundColor:"yellow",
    marginVertical: 20,
    marginHorizontal: 10,
  }
})
