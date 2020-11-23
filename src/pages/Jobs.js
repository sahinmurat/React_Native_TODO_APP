import Axios from 'axios';
import React, {useState, useEffect} from 'react'
import { View, Text,TouchableOpacity, FlatList } from 'react-native';
import {JobItem} from '../components/JobItem'
import {jobs} from '../styles';

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

    const {selectedLanguage} = props.route.params
    function goBack(){
        props.navigation.navigate('Intro')
    }
    const fetchData = () =>{
        Axios.get(`https://jobs.github.com/positions.json?search=${selectedLanguage.toLowerCase()}`)
        .then((gelen)=>setData(gelen.data))
        .catch((error)=> console.log(error) )
    } 

const renderItem = ({item}) => {return <JobItem item={item} /> 
}
    useEffect(()=>{
        fetchData()
    },[])

    return (
        <TouchableOpacity  style={jobs.opacity}>
            <Text style={jobs.text}> JOBS FOR  {selectedLanguage.toUpperCase()} </Text>
            <FlatList 
            data={data}
            renderItem={renderItem}
             />
        </TouchableOpacity>
    )
}

// :
// company: "Delicious Data GmbH"
// company_logo: "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdTJRIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8de0991e7a1b1884426d34936cd17b9cb2cc4977/delicious-data-gmb-h-logo-l.png"
// company_url: "https://www.delicious-data.com/"
// created_at: "Mon Nov 23 07:59:31 UTC 2020"
// description: "<p>As part of our tech team, you will build software to help our customers combat one of the biggest problems of our society: food waste. With this goal in mind, you will focus on developing and improving our demand forecasting pipeline. We offer you a visionary, innovative environment and give you the support and tools you need to succeed. In our fast growing team there is plenty of room for personal development. Are you ready to build Delicious Data with us and change the world for the better? We are looking forward to getting to know you!</p>↵<p><strong>Tasks</strong></p>↵<ul>↵<li>As a member of our backend team you will work closely with our Founder, Jakob, responsible for developing and improving our machine learning pipeline</li>↵<li>You will have the freedom to implement your own ideas on how to improve and develop our products further</li>↵<li>You will make use of our large datasets to create valuable models that save tonnes of food from being wasted every day</li>↵<li>You will bring models into production, monitor them and iterate upon your observations to improve their performance</li>↵</ul>↵<p><strong>Requirements</strong></p>↵<ul>↵<li>A degree in Machine Learning, Computer Science, Mathematics, Physics or a related field</li>↵<li>While we value academic experience, we're specifically looking for candidates that have at least 1-3 years professional experience in tackling business challenges using Data Science and Machine Learning</li>↵<li>You have experience working on timeseries data and forecasting problems</li>↵<li>Tools like Pandas, scikit-learn, Pytorch are second nature to you</li>↵<li>You are passionate about your work and love to collaborate with others</li>↵</ul>↵<p><strong>Benefits</strong></p>↵<ul>↵<li>A lot of room for creative ideas and personal initiative.</li>↵<li>Use your annual development budget of 1,000 euros, which you can use as you wish to further your professional development.</li>↵<li>30 days of vacation.</li>↵<li>We pay for your public transportation costs.</li>↵</ul>↵<p>We are looking forward to getting to know you!</p>↵"
// how_to_apply: "<p><a href="https://delicious-data.join.com/jobs/1602659-machine-learning-engineer-f-m-d?pid=357a3b4531918760973f&amp;utm_source=github_jobs&amp;utm_medium=paid&amp;utm_campaign=single%2Bposting&amp;utm_content=machine%2Blearning%2Bengineer%2Bf%2Bm%2Bd">https://delicious-data.join.com/jobs/1602659-machine-learning-engineer-f-m-d?pid=357a3b4531918760973f&amp;utm_source=github_jobs&amp;utm_medium=paid&amp;utm_campaign=single%2Bposting&amp;utm_content=machine%2Blearning%2Bengineer%2Bf%2Bm%2Bd</a></p>↵"
// id: "83cd5517-5c26-4e05-9988-716dd5978712"
// location: "Garching, Munich"
// title: "Machine Learning Engineer (f/m/d)"
// type: "Full Time"
// url: "https://jobs.github.com/positions/83cd5517-5c26-4e05-9988-716dd5978712"