import React from 'react';
import {View, Text,TouchableOpacity} from 'react-native';

import {jobitem} from '../styles'

export const JobItem = ({item}) =>{
    return(
        
            <TouchableOpacity style={jobitem.opacity} onPress={null}>
               <Text style={jobitem.text1} >{item.title} </Text>
               <Text style={jobitem.text2}>{item.type} / {item.location}</Text>
            </TouchableOpacity>
    
    )
}