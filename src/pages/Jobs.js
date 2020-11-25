import Axios from 'axios';
import React, {useState, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View, Text,TouchableOpacity, FlatList, Button } from 'react-native';
import {JobItem} from '../components/JobItem'
import {jobs} from '../styles';
import Modal from 'react-native-modal'

export const Jobs = (props) => {
    const [data, setData] = useState('');
    const [modalflag, setModalFlag] = useState(false);
    const [selectedJob, setSelectedJob] = useState('');
    const {selectedLanguage} = props.route.params;

    const onJobSelect = (job) =>{
      setModalFlag(true);
      setSelectedJob(job);
    }

    const fetchData = () =>{
        Axios.get(`https://jobs.github.com/positions.json?search=${selectedLanguage.toLowerCase()}`)
        .then((gelen)=>setData(gelen.data))
        .catch((error)=> console.log(error) )
    } 
    // ***Alternative***  
    // const fetchData = async () => {
    //   const response = await Axios.get(
    //     `https://jobs.github.com/positions.json?search=${selectedLanguage.toLowerCase()}`,
    //   );
    //   setData(response.data);
    // };

const renderItem = ({item}) => {return <JobItem item={item} onSelect={()=>onJobSelect(item)} /> 
}
    useEffect(()=>{
        fetchData()
    },[])

    const onJobSave = async () =>{
      let savedJobList = await AsyncStorage.getItem('@SAVED_JOBS');
      savedJobList = savedJobList == null ? [] : JSON.parse(savedJobList)
      
      const updatedJobList = [...savedJobList, selectedJob];
      
      AsyncStorage.setItem('@SAVED_JOBS',JSON.stringify(updatedJobList))
    }



    return (
        <View  style={jobs.opacity}>
            <Text style={jobs.text}> JOBS FOR  {selectedLanguage.toUpperCase()} </Text>
       
            <FlatList 
            data={data}
            renderItem={renderItem}
            />
            <TouchableOpacity
            style={{
              color:'white',
              backgroundColor:'blue',
              padding:10,
              borderRadius:10,
              position:"absolute",
              bottom:10,
              right:10
            }}
            onPress={()=>props.navigation.navigate('SavedJobs')}>
              <Text style={{color:'white'}}>Go to the Saved Items</Text>
            </TouchableOpacity>

            <Modal isVisible={modalflag} onBackdropPress={()=>{setModalFlag(false)}}>
              <View style={{backgroundColor:'orange'}}>
                 <Text>{selectedJob.title}</Text>
                 <Text>{selectedJob.company}</Text>
                 <Text>{selectedJob.type}</Text>
                 <Text numberOfLines={4}>{selectedJob.description}</Text>
              </View>
              <Button title='SAVE' onPress={onJobSave} />

            </Modal>
        </View>
    )
    }
