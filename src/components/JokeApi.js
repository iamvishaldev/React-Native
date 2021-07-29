import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

const JokeApi = () => {

    const [joke, setJoke] = useState("")

    const getJoke = async () => {
        try {
            const response = await fetch("http://api.icndb.com/jokes/random?firstName=ramesh&lastName=suresh")
            const result = await response.json()
            //   console.log(result.value.joke)
            setJoke(result.value.joke)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getJoke()
    }, [])

    return (
        <View>
            <Icon name="laugh-squint" style={style.icon} size={40} />
            <Text style={style.title}>Joke App</Text>
            <Button title="Get Joke" onPress={() => getJoke()} />
            {
                joke ? <Text style={style.jokeText}>{joke}</Text> : null
            }
        </View>
    )
}

const style = StyleSheet.create({
    icon: {
        marginLeft: 140,
    },
    title: {
        fontSize: 40,
        marginLeft: 80,
        marginBottom: 50,
        color: "red"
    },
    jokeText: {
        marginTop: 15,
        fontSize: 40,
        alignItems: "center",
    }
})

export default JokeApi
