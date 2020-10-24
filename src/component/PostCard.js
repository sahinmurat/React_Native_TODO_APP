import React from 'react';
import {View, Text, Button,Image,TouchableOpacity} from 'react-native';

const PostCard = (props) => {
    return(
        <TouchableOpacity>
            <Image
            source= {{ uri: props.post.img}}
             />
             <Text>{props.post.userName}</Text>
        </TouchableOpacity>
    )

}
export default PostCard;