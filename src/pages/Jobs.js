import Axios from 'axios';
import React, {useState, useEffect} from 'react'
import { View, Text,TouchableOpacity, FlatList, Button } from 'react-native';
import {JobItem} from '../components/JobItem'
import {jobs} from '../styles';
import Modal from 'react-native-modal'

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


export const Jobs = (props) => {
    const [data, setData] = useState('');
    const [modalflag, setModalFlag] = useState(false);
    const [selectedJob, setSelectedJob] = useState('');
    const {selectedLanguage} = props.route.params;

    const onJobSelect = (job) =>{
      setModalFlag(true);
      setSelectedJob(job);
    }
    console.log(selectedJob)
    function goBack(){
        props.navigation.navigate('Intro')
    }

    const fetchData = () =>{
        Axios.get(`https://jobs.github.com/positions.json?search=${selectedLanguage.toLowerCase()}`)
        .then((gelen)=>setData(gelen.data))
        .catch((error)=> console.log(error) )
    } 

const renderItem = ({item}) => {return <JobItem item={item} onSelect={()=>onJobSelect(item)} /> 
}
    useEffect(()=>{
        fetchData()
    },[])

    return (
        <View  style={jobs.opacity}>
            <Text style={jobs.text}> JOBS FOR  {selectedLanguage.toUpperCase()} </Text>
       
            <FlatList 
            data={data}
            renderItem={renderItem}
            />
            <TouchableOpacity>
              <Text>Kayitlara Git</Text>
            </TouchableOpacity>

            <Modal isVisible={modalflag}>
              <View style={{backgroundColor:'orange'}}>
                 <Text>{selectedJob.title}</Text>
                 <Text>{selectedJob.company}</Text>
                 <Text>{selectedJob.type}</Text>
                 <Text numberOfLines={4}>{selectedJob.description}</Text>
              </View>
              <Button title='Close the Modal' onPress={()=>setModalFlag(false)} />

            </Modal>
        </View>
    )
    }
