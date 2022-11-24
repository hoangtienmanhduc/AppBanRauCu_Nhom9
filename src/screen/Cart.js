import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ImageBackground, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { Component, useEffect, useState } from 'react';
import localStorage from 'react-native-sync-localstorage'
export default function Cart({ navigation, route }) {
    const [datacart, setData] = useState([])
    const [sum, setSum] = useState(0)
    useEffect(() => {
        var sumTam2 = 0
        if(localStorage.getItem("giohang"))
        {
            setData(localStorage.getItem("giohang"))
            localStorage.getItem("giohang").forEach(element => {
                sumTam2+=element.price*element.soluong
            });
        }
        
        setSum(sumTam2)
    }, [])
    const checkout = () =>{
        if(localStorage.getItem('order'))
        {
            const order =[...localStorage.getItem('order')]
            datacart.forEach(element => {
                order.push(element)
            });
            localStorage.setItem("order",order)
            
            localStorage.setItem("giohang",[])
            navigation.navigate("Home",{datacart:[]})
        }
        else{
            const order =[]
            datacart.forEach(element => {
                order.push(element)
            });
            localStorage.setItem("order",order)
    
           localStorage.setItem("giohang",[])
            navigation.navigate("Home",{datacart:[]})
        }
        
    }
    const cong = (item) => {
        const dataTam2 = [...datacart]
        console.log(dataTam2);
        const name = []
        if (dataTam2.length > 0) {
            dataTam2.forEach(element => {
                name.push(element.title)
            });
        }
        const i = name.indexOf(item.title)
        const data22 = dataTam2[i]
        data22.soluong = data22.soluong+1
        dataTam2[i] = data22
        setSum(sum+parseInt(item.price+5.00))
        setData(dataTam2)
    }

    const tru = (item) => {
        if (item.soluong > 1) { 
            const dataTam2 = [...datacart]
            console.log(dataTam2);
            const name = []
            if (dataTam2.length > 0) {
                dataTam2.forEach(element => {
                    name.push(element.title)
                });
            }
            const i = name.indexOf(item.title)
            const data22 = dataTam2[i]
            data22.soluong = data22.soluong-1
            dataTam2[i] = data22
            setSum(sum-parseInt(item.price))
            setData(dataTam2)
         }
        else {
            const dataTam2 = [...datacart]
            const name = []
            if (dataTam2.length > 0) {
                dataTam2.forEach(element => {
                    name.push(element.title)
                });
            }
            dataTam2.splice(name.indexOf(item.title), 1)
            setSum(sum-parseInt(item.price))
            setData(dataTam2)
            localStorage.setItem("giohang",dataTam2)
        }
    }
    const Item1 = ({ item, click, onPress, backgroundColor, textColor, index }) => (
        <View>
            <ImageBackground style={{ width: 350, marginLeft: 20, marginTop: 10, height: 130, flexDirection: 'row' }} source={require("../../image/border2.png")}>
                <View style={{ flex: 0.4, width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                    <Image style={{ width: 120, height: 90, resizeMode: 'contain' }} source={item.img}></Image>
                </View>
                <View style={{ flex: 0.5, width: "100%", height: "100%", alignItems: "center", justifyContent: 'center' }}>
                    <View style={{ width: "100%", height: "100%", justifyContent: 'space-between', paddingTop: 15, paddingBottom: 15 }}>
                        <Text style={{ fontSize: 22, fontWeight: "bold" }}>{item.title}</Text>
                        <Text style={{ fontSize: 18, color: "gray", fontStyle: 'italic', fontWeight: "bold" }}>{item.kg} kg</Text>
                        <Text style={{ fontSize: 22, fontWeight: "bold", color: '#32cd32' }}>${item.price}</Text>
                    </View>
                </View>
                <View style={{ flex: 0.12, height: '85%', alignItems: "center", justifyContent: "space-between", paddingTop: 10, paddingBottom: 15, backgroundColor: '#E77A7A', marginTop: 10, marginRight: 15, borderRadius: 10 }}>
                    <TouchableOpacity onPress={() => {cong(item)}}>
                        <Image style={{ width: 17, height: 17, resizeMode: 'contain' }} source={require("../../image/btncong.png")}></Image>
                    </TouchableOpacity>
                    <Text style={{ fontWeight: 'bold', fontSize: 17 }}>{item.soluong}</Text>
                    <TouchableOpacity onPress={() => { tru(item) }}>
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
                    <ImageBackground style={{ width: 50, height: 50, alignItems: "center", justifyContent: "center" }} source={require("../../image/icon1.png")}>
                        <Image style={{ width: 20, height: 20 }} source={require("../../image/icon2.png")}></Image>
                    </ImageBackground>
                </TouchableOpacity>
                <Text style={{ fontSize: 30, fontWeight: "bold" }}>Cart</Text>
                <TouchableOpacity style={{ marginRight: 25 }} onPress={() => navigation.navigate("Profile")}>
                    <ImageBackground style={{ width: 50, height: 50, alignItems: "center", justifyContent: "center" }} source={require("../../image/icon1.png")}>
                        <Image style={{ width: 25, height: 25 }} source={require("../../image/iconsearchcart.png")}></Image>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            <View style={{ width: 400, height: 285, justifyContent: "center", alignItems: "center", marginTop: 10 }}>
                <View style={{ width: "100%", height: "100%" }}>
                    <FlatList
                        data={datacart}
                        renderItem={renderItem1}
                    />
                </View>
            </View>
            <View style={{ marginTop: 15, alignItems: 'center', justifyContent: 'center' }}>
                <ImageBackground style={{ width: 350, height: 230 }} source={require("../../image/bordercart.png")}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 20, marginTop: 12 }}>Order Infor</Text>
                    <View style={{ marginLeft: 20, marginTop: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#AAA8A8' }}>Subtotal</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, marginRight: 20 }}>${sum.toFixed(2)}</Text>
                    </View>
                    <View style={{ marginLeft: 20, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#AAA8A8' }}>Delevery fee</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, marginRight: 20 }}>$1.00</Text>
                    </View>
                    <View style={{ marginLeft: 20, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#AAA8A8' }}>Discount</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, marginRight: 20 }}>10%</Text>
                    </View>
                    <View style={{ marginLeft: 20, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#AAA8A8' }}>---------------------------------------------</Text>
                    </View>
                    <View style={{ marginLeft: 20, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Total</Text>
                        {datacart.length > 0 ? (<Text style={{ fontWeight: 'bold', fontSize: 18, marginRight: 20 }}>${((sum+1.00)*0.9).toFixed(2)}</Text>):(<Text style={{ fontWeight: 'bold', fontSize: 18, marginRight: 20 }}>$0</Text>)}
                    </View>
                </ImageBackground>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                <TouchableOpacity onPress={() => { checkout() }} style={{ width: 250, height: 50, backgroundColor: "#E12020", borderRadius: 15, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>Checkout</Text>
                </TouchableOpacity>
            </View>
            <View style={{ width: 400, height: 75, justifyContent: "flex-end" }}>
                <View style={{ width: 392, height: 55, backgroundColor: "#EAB1B1", alignItems: "center", flexDirection: "row", justifyContent: "space-between", padding: 15, borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Home", { datacart })}>
                        <Image style={{ width: 30, height: 30 }} source={require("../../image/btn4.png")}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Favourite")}>
                        <Image style={{ width: 17, height: 28 }} source={require("../../image/btn3.png")}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                        <Image style={{ width: 30, height: 30 }} source={require("../../image/icongiohangred.png")}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("OrderDetail")}>
                        <Image style={{ width: 30, height: 30 }} source={require("../../image/iconchuong.png")}></Image>
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