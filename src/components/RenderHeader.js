import React,{useState}from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native'

const RenderHeader = () => {

    const [search,setSearch] = useState('')

    return (
        <View style={style.headerContainer}>
            <TextInput 
            style={style.searchTextInput}
            placeholder={"Search The Profile"}
            placeholderTextColor={"#fff"}
            value={search}
            onChangeText={(text)=>setSearch(text)}
            />
        </View>
    )
}

export default RenderHeader

const style= StyleSheet.create({
    headerContainer:{
        width:"100%",
        height:80,
        alignItems:"center",
        justifyContent:"center",
        padding:10 ,
    },
    searchTextInput:{
        width:"100%",
        backgroundColor:"#333",
        height:60,
        borderRadius:20,
        color:"#fff",
        textAlign:"center",
        fontSize:20
    }
})
