import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'

const Login = (props) => {

    const [email, setemail] = useState('')

    const [password, setPassword] = useState('')

    const submitHandler = ()=>{
      const data = {
          email,
          password
      }
      console.log(data)
    }
    

    return (
        <View>
            <TextInput
                style={style.input}
                value={email}
                onChangeText={(text) => setemail(text)}
                placeholder="Add Email"
                keyboardType="email-address"
            />
            <TextInput
                style={style.input}
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder="Add Password"
                keyboardType="number-pad"
            />
            <Button title="Submit" onPress={submitHandler}/>
        </View>
    )
}

const style = StyleSheet.create({
        input: {
        backgroundColor: "white",
        width: "100%",
        padding: 20,
        borderWidth: 1,
        borderRadius: 20,
        color: "black",
        marginBottom: 10
    }
})

export default Login
