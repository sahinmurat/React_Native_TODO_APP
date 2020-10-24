import React, { useState } from 'react';
import { View, Text, Button, Image, TextInput } from 'react-native';

const Second = (props) => {
    
    
    const geldi = props.route.params.selectedpost
    return (
        <View>
            <Text>{geldi.description} </Text>           
        </View>
    )
}

export default Second;