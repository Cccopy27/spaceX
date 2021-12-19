import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import { detailScreenRouteProp } from '../types/types';

  
const Detail:React.FC= () =>{
    const route = useRoute<detailScreenRouteProp>();
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.title}>{route.params.name}</Text>
                <View style={styles.by}>
                    <Text style={styles.company}>by {route.params.company}</Text>
                    <Text style={styles.country}>{route.params.country}</Text>
                </View>
                <ScrollView style={styles.description_container}>
                    <Text style={styles.description}>{route.params.description}</Text>    
                </ScrollView>
                <View style={styles.section1}>
                    <Text style={styles.diameter}>Diameter: {route.params.diameter.meters} M</Text>
                    <Text style={styles.height}>Height: {route.params.height.meters} M</Text>
                    <Text style={styles.mass}>Weight: {route.params.mass.kg}kg</Text>
                </View>
                <View style={styles.section2}>
                    <Text style={styles.first_flight}>First Flight: {route.params.first_flight}</Text>
                    <Text style={styles.cost_per_launch}>Cost per launch: {route.params.cost_per_launch}</Text>
                </View>
                
                <Text style={styles.wikipedia}>Learn more: {route.params.wikipedia}</Text>
            </ScrollView>
            
        </View>
    )
}

export default Detail;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"black",
    },
    title:{
        fontSize: 30,
        color:"white",
        alignSelf:"center",
    },
    by:{
        marginTop: 20,
        color:"white",
        flexDirection:"row",
        justifyContent:"center",
    },
    company:{
        fontSize: 15,
        color:"white",
        marginHorizontal: 10,
    },
    country:{
        fontSize: 15,
        color:"white",  
    },
    scrollView:{

    },
    description:{
        fontSize: 25,
        color:"white",
        textAlign:"center",
        marginVertical: 20,
    },
    description_container:{
        alignSelf:"center",
        width: "85%",
        marginVertical: 20,
        height:150,
    },
    section1:{
        marginRight: 20,
    },
    diameter:{
        textAlign:"right",
        color:"white",
    },
    height:{
        textAlign:"right",
        color:"white",
    },
    mass:{
        textAlign:"right",
        color:"white",
    },
    section2:{
        marginLeft: 20,

    },
    first_flight:{
        color:"white",
    },
    cost_per_launch:{
        color:"white",
    },
    wikipedia:{
        flexWrap:"wrap-reverse",
        color:"white",
    }
})
