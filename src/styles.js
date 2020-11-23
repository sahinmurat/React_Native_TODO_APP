import {StyleSheet, Dimensions} from 'react-native'

export const topicItem = StyleSheet.create({
    container:{
        flex:1,
        padding:12,
        margin:12,
        borderRadius:8
    },
    text:{
        fontSize:25
    }
})

export const intro = StyleSheet.create({
    text:{
        fontSize:25,
        fontWeight:'bold',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        borderRadius:10,
        margin:5,
        padding:5,
        paddingLeft:15
    },
    view:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'aquamarine',
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center'
    },
    lang:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export const jobs = StyleSheet.create({
    opacity:{
        flex:1,
        backgroundColor:'lightblue',
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontSize:25,
        backgroundColor:'lightpink',
        borderRadius:10,
        fontWeight:"bold",
        margin:20,
        padding: 10
    }
})
export const jobitem = StyleSheet.create({
    opacity:{
    backgroundColor:'lightgray',
    margin:5,
    padding:10,
    borderRadius:10  
    },
    text1:{
        fontSize:20,
        fontWeight:'bold'
    },
    text2:{
        marginTop:5,
        fontSize:15,
    }
})