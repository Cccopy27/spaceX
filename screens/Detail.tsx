import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import { detailScreenRouteProp } from '../types/types';

  
const Detail:React.FC= () =>{
    const route = useRoute<detailScreenRouteProp>();
    return (
        <View>
            <Text>{route.params.name}</Text>
            <Text>{route.params.company}</Text>
            <Text>{route.params.country}</Text>
            <Text>{route.params.description}</Text>
            <Text>{route.params.diameter.meters}</Text>
            <Text>{route.params.height.meters}</Text>
            <Text>{route.params.mass.kg}</Text>
            <Text>{route.params.first_flight}</Text>
            <Text>{route.params.cost_per_launch}</Text>
        </View>
    )
}

export default Detail;

const styles = StyleSheet.create({})
