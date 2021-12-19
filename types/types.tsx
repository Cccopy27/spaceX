import React from 'react';
import { NativeStackNavigationProp  } from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

// typescript param for all navigation
type paramList = {
    Home: undefined;
    Detail: { 
        id:string,
        name:string,
        company:string,
        cost_per_launch:number,
        country:string,
        description:string,
        first_flight:string,
        height:{
            meters:number,
        },
        diameter:{
            meters: number,
        }
        mass:{
            kg: number
        },
        wikipedia:string,


    };
}


// typescript param for useNavigation
type homeScreenNavigationProp = NativeStackNavigationProp<paramList, "Home">;

// typescript param for useRoute
type detailScreenRouteProp = RouteProp<paramList, "Detail">;

export {paramList, homeScreenNavigationProp, detailScreenRouteProp};