import React from 'react'
import { View, Text,ScrollView} from 'react-native';


import {TopicItem} from '../components/TopicItem'
import { intro } from '../styles';

const topics = [
    {
      id: 0,
      name: 'Java',
      color: 'fb5607',
    },
    {
      id: 1,
      name: 'Python',
      color: '007f5f',
    },
    {
      id: 2,
      name: 'Javascript',
      color: 'ffb703',
    },
    {
      id: 3,
      name: '.NET',
      color: '023e7d',
    },
    {
      id: 4,
      name: 'Dart',
      color: '001845',
    },
    {
      id: 5,
      name: 'Go',
      color: 'f8961e',
    },
    {
      id: 6,
      name: 'Ruby',
      color: 'e63946',
    },
    {
      id: 7,
      name: 'C',
      color: 'fb8b24',
    },
    {
      id: 8,
      name: 'C++',
      color: '06d6a0',
    },
  ];
  

export const Intro = (props) => {
  function selectLanguage(lang){
    props.navigation.navigate('Jobs',{selectedLanguage:lang})
  }
    return (
        <View style={intro.view} >
          <View style={intro.lang}>
            <Text style={intro.text}>Choose Your Language</Text>
          </View>
  
            <ScrollView horizontal={true} contentContainerStyle={{alignItems:"center"}}>
            {
                topics.map((t)=>{
                    return <TopicItem key={t.id} item={t} onSelect={()=>selectLanguage(t.name)} />
                })
            }
            </ScrollView>
        </View>
    )
}
