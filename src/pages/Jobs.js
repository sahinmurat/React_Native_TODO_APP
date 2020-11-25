import Axios from 'axios';
import React, {useState, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View, Text,TouchableOpacity, FlatList, Button } from 'react-native';
import {JobItem} from '../components/JobItem'
import {jobs, modal} from '../styles';
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
        <View  style={jobs.view}>
            <Text style={jobs.text}> JOBS FOR  {selectedLanguage.toUpperCase()} </Text>
       
            <FlatList 
            data={data}
            renderItem={renderItem}
            />
            <TouchableOpacity
            style={jobs.opacity}
            onPress={()=>props.navigation.navigate('SavedJobs')}>
              <Text style={{color:'white'}}>Go to the Saved Items</Text>
            </TouchableOpacity>

            <Modal isVisible={modalflag} onBackdropPress={()=>{setModalFlag(false)}}>
              <View style={modal.view}>
                 <Text style={modal.text} >Job Title:  {selectedJob.title}</Text>
                 <Text style={modal.text} >Company: {selectedJob.company}</Text>
                 <Text style={modal.text} >Location: {selectedJob.location}</Text>
                 <Text style={modal.text} >Type: {selectedJob.type}</Text>
                 <Text  style={modal.text} numberOfLines={4}>About: {selectedJob.description}</Text>
              </View>
              <TouchableOpacity
              style={modal.touch}
              onPress = {onJobSave}>
                <Text style={modal.touchtext}>SAVE  IT </Text>
              </TouchableOpacity>
             

            </Modal>
        </View>
    )
    }
