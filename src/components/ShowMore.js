import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

const ShowMore = (props) => {

    const [hidden, setHidden] = useState(true)

    useEffect(()=>{
        console.log("------>inside useEffect")
    },[])

    console.log("------>outside useEffect")

    const maxLength = 60

    return (
        <View style={style.showMoreStyle}>
            <Image style={style.img} source={{ uri: "https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }} />
            <Text>
                {hidden ? `${props.text.substr(0, maxLength).trim()}....` : props.text}
                {
                    hidden ? <Text onPress={()=>setHidden(false)} style={style.seemore}>See more</Text> :<Text onPress={()=>setHidden(true)} style={style.seeless}>See less</Text>
                }
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    img: {
        height: 300
    },
    seemore:{
        fontSize:20,
        color:"red"
    },
    seeless:{
        fontSize:20,
        color:"red"
    }
})

export default ShowMore
