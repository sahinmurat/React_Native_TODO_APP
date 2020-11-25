import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import {View, Text,TouchableOpacity} from 'react-native';

import {jobitem} from '../styles'

export const JobItem = (props) =>{
    return(
        
            <TouchableOpacity style={jobitem.opacity} onPress={props.onSelect}>
               <Text style={jobitem.text1} >{props.item.title} </Text>
               <Text style={jobitem.text2}>{props.item.type} / {props.item.location}</Text>
            </TouchableOpacity>
    
    )
}