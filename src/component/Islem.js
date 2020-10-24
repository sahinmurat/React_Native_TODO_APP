import React from 'react';
import { View, Image, Text, TouchableOpacity ,Dimensions} from 'react-native';

const Islem = (props) => {
    const onPress=()=>{props.navigation.navigate('second1', {item})}
    return (
        <TouchableOpacity
        onPress={()=>navigation.navigate('second1',{selectedpost:item})}>
            <Image
                style={{ height:Dimensions.get('window').height /3
                }}
                source={{ uri: props.her.img }}
            />
            <Text>{props.her.description}</Text>
        </TouchableOpacity>
    )
}
export default Islem;