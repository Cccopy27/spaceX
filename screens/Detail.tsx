import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import React,{useState, useRef, useEffect}from 'react';
import {useRoute} from '@react-navigation/native';
import { detailScreenRouteProp } from '../types/types';

  
const Detail:React.FC= () =>{
    const route = useRoute<detailScreenRouteProp>();
    const ac = new AbortController();
    // auto scrolling for description part
    const [offSet,setOffset] = useState(0);
    const scrollViewRef = useRef<ScrollView>(null);
    console.log(offSet);
    useEffect(()=>{
        autoScroll();
        return () => {
            ac.abort();
        }
    },[offSet]);
    const autoScroll = () => {
        if(offSet<2000){
            requestAnimationFrame(()=>{
                const y = offSet + 5;
                scrollViewRef.current?.scrollTo({x:0, y,animated:true});
                // scrollViewRef.current?.scrollToEnd({animated:true});
                setOffset(y);
                
            })
        }
        
    }
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Text style={styles.title}>{route.params.name}</Text>
                <View style={styles.by}>
                    <Text style={styles.company}>by {route.params.company}</Text>
                    <Text style={styles.country}>{route.params.country}</Text>
                </View>
                <ScrollView ref={scrollViewRef} style={styles.description_container}>
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
        textAlign:"center",
        // flex:1,
        fontSize: 30,
        color:"white",
        alignSelf:"center",
    },
    by:{
        // flex:1,
        marginVertical: 20,
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
        flex: 1,

        justifyContent: "space-between",
    },
    description:{
        flex:1 ,
        fontSize: 25,
        color:"white",
        textAlign:"center",
        marginVertical: 20,
    },
    description_container:{
        borderWidth:1,
        borderColor:"red",
        padding: 30,
        flex:4,
        minHeight: 100,
        alignSelf:"center",
        width: "85%",
        // marginVertical: 20,
    },
    section1:{
        justifyContent:"center",
        borderWidth:1,
        borderColor:"blue",
        // flex:2,
        padding: 10,
        marginTop: 40,
        marginHorizontal: 20,
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
        borderWidth: 1,
        borderColor:"yellow",
        justifyContent:"center",
        marginHorizontal:20,
        marginVertical: 30,
        // flex:2,
        padding: 10,
    },
    first_flight:{
        color:"white",
    },
    cost_per_launch:{
        color:"white",
    },
    wikipedia:{
        flex:1,
        paddingBottom: 5,
        textAlign:"center",
        textAlignVertical:"bottom",
        color:"white",
        
    }
})
