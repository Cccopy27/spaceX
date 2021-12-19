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
      <View style={styles.background}>
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
      </View>

    )
}

export default Home;

const styles = StyleSheet.create({
  background:{
    backgroundColor:"black",
    flex:1,
  }
  ,
  header:{
    marginTop: 20,
  },
  headerTitle:{
    fontSize: 20, 
    color:"white",
    justifyContent: "center",
    alignSelf: "center"
  },
  flatlist:{
    marginTop: 30,
  },
  item:{
    fontSize: 20,
    color:"white",
    marginBottom: 5,
    marginVertical: 10,
  },
  itemContainer:{
    borderColor: "#ff21f8",
    borderRadius: 2,
    overflow:"hidden",
    borderStyle:"solid",
    borderWidth: 2,
    height: 70,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor:"#232426",
    marginVertical: 20,
    marginHorizontal: 10,
  }
})
