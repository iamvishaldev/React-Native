import React, { useState, useEffect } from 'react';

import {
    StyleSheet,
    View,
} from 'react-native';
import Counter from './src/components/Counter';
// import JokeApi from './src/components/JokeApi';
// import Login from './src/components/Login';
// import ShowMore from './src/components/ShowMore';
import Flatlist from './src/components/Flatlist'


const App = () => {

    // const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

    return (
        <View style={styles.container}>
            <Flatlist/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
        padding: 30
    },
});

export default App;
