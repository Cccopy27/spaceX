import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import { detailScreenRouteProp } from '../types/types';

  
const Detail:React.FC= () =>{
    const route = useRoute<detailScreenRouteProp>();
    return (
        <View>
            <Text>{route.params.diameter.meters}</Text>
        </View>
    )
}

export default Detail;

const styles = StyleSheet.create({})
