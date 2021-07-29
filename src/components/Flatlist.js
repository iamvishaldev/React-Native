import React, { useState, useEffect } from 'react'
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import RenderHeader from './RenderHeader'

const Flatlist = () => {

    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState('')
    const [refresh, setRefresh] = useState(false)

    const getData = async () => {
        try {
            setLoader(true)
            const response = await fetch("https://randomuser.me/api/?seed=1&page=1&results=20")
            const result = await response.json()
            console.log(result.results)
            setData(result.results)
            setLoader(false)
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    // Flatlist RenderItem
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={style.card}>
                <View style={style.cardSectionA}>
                    <Image
                        style={{ width: 70, height: 70, borderRadius: 30 }}
                        source={{ uri: item.picture.large }}
                    />
                </View>
                <View style={style.cardSectionB}>
                    <Text style={{ fontSize: 20, fontWeight: "normal" }}>{` ${item.name.title} ${item.name.first}`}</Text>
                    <Text style={{ fontSize: 15, fontWeight: "normal" }}>{item.email}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    // Pull To Refresh
    const onRefresh = () => {
        setRefresh(false)
        getData()
    }

    return (
        <React.Fragment>
            <View>
                <RenderHeader />
                {loader && <ActivityIndicator animating size={'large'} color={'#333'} />}
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.login.uuid}
                    refreshing={refresh}
                    onRefresh={onRefresh}
                />
            </View>
        </React.Fragment>
    )
}

export default Flatlist

const style = StyleSheet.create({
    card: {
        flexDirection: "row",
        backgroundColor: "white",
        width: "95%",
        height: 80,
        borderRadius: 10,
        elevation:4,
        margin: 5
    },
    cardSectionA: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    cardSectionB: {
        flex: 7,
        justifyContent: "center",
        alignItems:"center"
    },
})
