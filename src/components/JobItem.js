import React from 'react';
import {View, Text} from 'react-native';

export const JobItem = ({item}) =>{
    return(
        <View>
            <Text>
                {item.title}
            </Text>
        </View>
    )
}