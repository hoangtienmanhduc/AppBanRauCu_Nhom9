import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';

export default function Detail({ navigation, route }) {
    const item = route.params.item
    const [count, setcount] = useState(1)
    return (
        <View style={styles.container}>
            <View style={{ width: "100%", height: "100%" }}>
                <View style={{ flex: 0.6 }}>
                    <ImageBackground style={{ width: "100%", height: "100%" }} source={require("../../image/backgroundstart.png")}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 25 }}>
                            <TouchableOpacity style={{ marginLeft: 25 }}>
                                <ImageBackground style={{ width: 45, height: 45, alignItems: "center", justifyContent: "center" }} source={require("../../image/icon1.png")}>
                                    <Image style={{ width: 12, height: 22 }} source={require("../../image/btnback.png")}></Image>
                                </ImageBackground>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 28, fontWeight: "bold", marginRight: 105 }}>Order Details</Text>
                        </View>
                        <View style={{alignItems:'center',marginTop:25}}>
                            <Image style={{ width: 340, height: 300, resizeMode: 'contain'}} source={item.img}></Image>
                        </View>
                    </ImageBackground>
                </View>
                <View style={{ flex: 0.45, width: "100%", height: "100%" }}>
                    <View style={{ flex: 0.8, alignItems: "center", width: "100%", height: "100%" }}>
                        <View style={{ flex: 0.2, width: "100%", height: "100%", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <View style={{ width: "30%", height: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <TouchableOpacity onPress={() => { if (count > 1) { setcount(count - 1) } }}>
                                    <View style={{ width: 30, height: 30, backgroundColor: "#c0c0c0", borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                                        <Image style={{ width: 15, height: 15, resizeMode: 'contain' }} source={require("../../image/icontru.png")}></Image>
                                    </View>
                                </TouchableOpacity>
                                <Text style={{ fontSize: 18, fontWeight: "bold" }}>{count} KG</Text>
                                <TouchableOpacity onPress={() => setcount(count + 1)}>
                                    <View style={{ width: 30, height: 30, backgroundColor: "red", borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                                        <Image style={{ width: 15, height: 15, resizeMode: 'contain' }} source={require("../../image/btncong.png")}></Image>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flex: 0.3, width: "100%", height: "100%", justifyContent: "space-between", alignItems: "center" }}>
                            <View style={{ width: "80%", flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={{ fontSize: 25, fontWeight: "bold", color: "black" }}>
                                    {item.title}
                                </Text>
                                <Text style={{ fontSize: 25, fontWeight: "bold", color: "red" }}>
                                    ${item.price}/Kg
                                </Text>
                            </View>
                            <View style={{ width: "80%", flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={{ fontSize: 18, color: "gray" }}>
                                    {item.gt}
                                </Text>
                                <View style={{ width: "30%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "red" }}>
                                        {item.star}
                                    </Text>
                                    {item.star > 4 && item.star < 5 ? (<View style={{ flexDirection: "row" }}>
                                        <Image style={{ width: 20, height: 20, marginTop: 5 }} source={require("../../image/iconstar.png")}></Image>
                                        <Image style={{ width: 20, height: 20, marginTop: 5 }} source={require("../../image/iconstar.png")}></Image>
                                        <Image style={{ width: 20, height: 20, marginTop: 5 }} source={require("../../image/iconstar.png")}></Image>
                                        <Image style={{ width: 20, height: 20, marginTop: 5 }} source={require("../../image/iconstar.png")}></Image>
                                        <Image style={{ width: 20, height: 20, marginTop: 5 }} source={require("../../image/iconstar.png")}></Image>
                                    </View>) : (<View>
                                        {item.star >= 3 && item.star <= 4 ? (<View style={{ flexDirection: "row" }}>
                                            <Image style={{ width: 20, height: 20, marginTop: 5 }} source={require("../../image/iconstar.png")}></Image>
                                            <Image style={{ width: 20, height: 20, marginTop: 5 }} source={require("../../image/iconstar.png")}></Image>
                                            <Image style={{ width: 20, height: 20, marginTop: 5 }} source={require("../../image/iconstar.png")}></Image>
                                            <Image style={{ width: 20, height: 20, marginTop: 5 }} source={require("../../image/iconstar.png")}></Image>

                                        </View>) : (<View>
                                            {item.star >= 2 && item.star < 3 ? (<View style={{ flexDirection: "row" }}>
                                                <Image style={{ width: 20, height: 20, marginTop: 5 }} source={require("../../image/iconstar.png")}></Image>
                                                <Image style={{ width: 20, height: 20, marginTop: 5 }} source={require("../../image/iconstar.png")}></Image>
                                                <Image style={{ width: 20, height: 20, marginTop: 5 }} source={require("../../image/iconstar.png")}></Image>

                                            </View>) : (<View>
                                                {item.star >= 1 && item.star < 2 ? (<View style={{ flexDirection: "row" }}>
                                                    <Image style={{ width: 20, height: 20, marginTop: 5 }} source={require("../../image/iconstar.png")}></Image>
                                                    <Image style={{ width: 20, height: 20, marginTop: 5 }} source={require("../../image/iconstar.png")}></Image>

                                                </View>) : (<View>
                                                    {item.star >= 0.5 && item.star < 1 ? (<View style={{ flexDirection: "row" }}>
                                                        <Image style={{ width: 20, height: 20, marginTop: 5 }} source={require("../../image/iconstar.png")}></Image>

                                                    </View>) : (<View></View>)}
                                                </View>)}
                                            </View>)}
                                        </View>)}
                                    </View>)}

                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 0.5, width: "100%", paddingLeft: 20, height: "100%", justifyContent: "center", alignItems: "center" }}>
                            <View style={{ width: "90%", height: "60%", justifyContent: "space-between" }}>
                                <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>
                                    Details
                                </Text>
                                <View>
                                    <Text style={{ fontSize: 16, color: "gray" }}>
                                        The garden Strawbery is a widely grown hibrid species of the genut Francia and collecttively
                                    </Text>
                                </View>
                            </View>
                        </View>

                    </View>
                    <View style={{ flex: 0.22, width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity onPress={() => { navigation.navigate('Home') }} style={{ width: "60%", height: "75%", backgroundColor: "#E12020", borderRadius: 15, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>Add To Cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});