import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native'

const Counter = () => {

    const [count, setCount] = useState(10);
    const [start, setStart] = useState(false)

    useEffect(() => {
        const timerId = setInterval(() => {
            if (count > 0 && start === true) {
                setCount(count - 1)
            }
        }, 1000)
        // cleanup function
        return () => clearInterval(timerId)
    }, [count, start])

    return (
        <View>
            <View style={styles.innerContainer}>
                <Text style={styles.headerText}>TIMER</Text>
                <Text style={styles.headerText}>{count}</Text>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => setCount(count + 1)}>
                    <Text style={styles.text}>Inc</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => setCount(count - 1)}>
                    <Text style={styles.text}>Dec</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => setCount(0)}>
                    <Text style={styles.text}>Reset</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => setStart(true)}>
                    <Text style={styles.text} >START</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => setStart(false)}>
                    <Text style={styles.text}>RE-START</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
    },
    innerContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#141823',
        marginVertical: 50,
    },
    btn: {
        width: 200,
        height: 50,
        backgroundColor: 'blue',
        color: '#fff',
        alignItems: 'center',
        marginTop: 5,
    },
    text: {
        fontSize: 30,
        color: 'white',
    },
});

export default Counter
