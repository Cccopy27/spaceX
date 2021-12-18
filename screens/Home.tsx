import { StyleSheet, Text, View } from 'react-native'
import React from "react";
import { useQuery } from '@apollo/client';
import { rocketInfo } from '../App';

const Home: React.FC= () => {
    const {data,loading,error} = useQuery(rocketInfo);
    loading ? console.log("loading") : console.log(data);

    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({})
