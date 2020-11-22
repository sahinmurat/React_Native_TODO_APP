import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native'
import { topicItem } from '../styles';

export const TopicItem = (props) => {
    return (
        <TouchableOpacity style={[topicItem.container, {backgroundColor:`#${props.item.color}`}]}>
            <Text style={topicItem.text}>{props.item}</Text>
        </TouchableOpacity>
    )
}