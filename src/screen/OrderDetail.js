import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ImageBackground, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { Component, useState } from 'react';
export default function OrderDetail({ navigation }) {
    const DATA1 = [
        {
            title: "Strawbery",
            kg: "3",
            price: "4.53",
            img: require("../../image/qua1.png")

        },
        {
            title: "Mango",
            kg: "2",
            price: "3.9",
            img: require("../../image/qua2.png")

        },
        {
            title: "Graperfruit",
            kg: "4",
            price: "4.53",
            img: require("../../image/qua3.png")
        },
        {
            title: "Pomegranate",
            kg: "3",
            price: "4.53",
            img: require("../../image/qua4.png")
        },
    ];

    const Item1 = ({ item, click, onPress, backgroundColor, textColor, index }) => (
        <View>
            <ImageBackground style={{ width: 350, marginLeft: 20, marginTop: 25, height: 130, flexDirection: 'row' }} source={require("../../image/border2.png")}>
                <View style={{ flex: 0.4, width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                    <Image style={{ width: 120, height: 90, resizeMode: 'contain' }} source={item.img}></Image>
                </View>
                <View style={{ flex: 0.5, width: "100%", height: "100%", alignItems: "center", justifyContent: 'center' }}>
                    <View style={{ width: "100%", height: "100%", justifyContent: 'space-between', paddingTop: 15, paddingBottom: 15 }}>
                        <Text style={{ fontSize: 22, fontWeight: "bold" }}>{item.title}</Text>
                        <Text style={{ fontSize: 18, color: "gray", fontStyle: 'italic' }}>{item.kg} kg</Text>
                        <Text style={{ fontSize: 25, fontWeight: "bold", color: '#32cd32' }}>${item.price}</Text>
                    </View>
                </View>
                <View style={{ flex: 0.12, height: '85%', alignItems: "center", justifyContent: "space-between", paddingTop: 10, paddingBottom: 15, backgroundColor: '#E77A7A', marginTop: 10, marginRight: 15, borderRadius: 10 }}>
                    <TouchableOpacity>
                        <Image style={{ width: 17, height: 17, resizeMode: 'contain' }} source={require("../../image/btncong.png")}></Image>
                    </TouchableOpacity>
                    <Text style={{ fontWeight: 'bold', fontSize: 17 }}>3</Text>
                    <TouchableOpacity>
                        <Image style={{ width: 17, height: 3, justifyContent: "center", alignItems: "center" }} source={require("../../image/icontru.png")}></Image>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
    const renderItem1 = ({ item, index }) => {
        return (
            <Item1
                item={item}
                index={index}
            />
        );
    };
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <TouchableOpacity style={{ marginLeft: 25 }}>
                    <ImageBackground style={{ width: 45, height: 45, alignItems: "center", justifyContent: "center" }} source={require("../../image/icon1.png")}>
                        <Image style={{ width: 12, height: 22 }} source={require("../../image/btnback.png")}></Image>
                    </ImageBackground>
                </TouchableOpacity>
                <Text style={{ fontSize: 28, fontWeight: "bold", marginRight: 95 }}>Order Details</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Image style={{ width: 350, height: 145, marginTop: 15 }} source={require("../../image/bando.png")}></Image>
            </View>
            <View style={{marginLeft:25,marginTop:15,flexDirection:'row',alignItems:'center'}}>
                <Text style={{fontWeight:'bold'}}>Order Id #89087678</Text>
                <Image style={{ width: 20, height: 20, marginLeft: 130 }} source={require("../../image/delivery.png")}></Image>
                <Text style={{fontWeight:'bold',marginLeft:10}}>Delivered</Text>
            </View>
            <Text style={{fontWeight:'bold',marginLeft:25}}>Yesterday, 8:50 AM</Text>

            <Text style={{marginLeft:25,marginTop:10,color:'#AAA8A8'}}>Delivered to</Text>
            <Text style={{fontWeight:'bold',marginLeft:25}}>Thống nhất, phường 15, Gò Vấp, TP HCM</Text>

            <Text style={{marginLeft:25,marginTop:10,color:'#AAA8A8'}}>Paymen method</Text>
            <Text style={{fontWeight:'bold',marginLeft:25}}>xxxx-5321-5132 VISA</Text>

            <View>
                <Text style={{marginLeft:25}}>--------------------------------------------------------------------------------------</Text>
            </View>
            <View style={{ width: 400, height: 175, justifyContent: "center", alignItems: "center", marginTop: 10 }}>
                <View style={{ width: "100%", height: "100%" }}>
                    <FlatList
                        data={DATA1}
                        renderItem={renderItem1}
                    />
                </View>
            </View>

            <View>
                <Text style={{marginLeft:25}}>--------------------------------------------------------------------------------------</Text>
            </View>

            <View style={{marginLeft:25,marginTop:5,flexDirection:'row',justifyContent:'space-between',marginRight:25}}>
                <Text style={{fontWeight:'bold'}}>Subtotal</Text>
                <Text style={{fontWeight:'bold'}}>$30.50</Text>
            </View>
            <View style={{marginLeft:25,marginTop:5,flexDirection:'row',justifyContent:'space-between',marginRight:25}}>
                <Text style={{fontWeight:'bold'}}>Delivery</Text>
                <Text style={{fontWeight:'bold'}}>Free</Text>
            </View>
            <View style={{marginLeft:25,marginTop:5,flexDirection:'row',justifyContent:'space-between',marginRight:25}}>
                <Text style={{fontWeight:'bold'}}>Total</Text>
                <Text style={{fontWeight:'bold'}}>$30.50</Text>
            </View>
            <View style={{ width: 400, height: 85, justifyContent: "flex-end"}}>
                <View style={{ width: "100%", height: "70%", backgroundColor: "#EAB1B1", alignItems: "center", flexDirection: "row", justifyContent: "space-between", padding: 15, borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <Image style={{ width: 30, height: 30 }} source={require("../../image/btn4.png")}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Favourite")}>
                        <Image style={{ width: 17, height: 28 }} source={require("../../image/btn3.png")}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                        <Image style={{ width: 30, height: 30 }} source={require("../../image/icongiohang.png")}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("OrderDetail")}>
                        <Image style={{ width: 30, height: 30 }} source={require("../../image/chuongred.png")}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 25,
    },
});