import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ImageBackground, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { Component, useState } from 'react';
export default function Profail({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{ justifyContent: "flex-end" }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 30 }}>
                    <TouchableOpacity>
                        <ImageBackground style={{ width: 50, height: 50, alignItems: "center", justifyContent: "center", marginLeft: 20 }} source={require("../../image/icon1.png")}>
                            <Image style={{ width: 15, height: 25 }} source={require("../../image/btnback.png")}></Image>
                        </ImageBackground>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 30, fontWeight: "bold" }}>Profile</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                        <ImageBackground style={{ width: 50, height: 50, alignItems: "center", justifyContent: "center", marginRight: 20 }} source={require("../../image/icon1.png")}>
                            <Image style={{ width: 25, height: 25 }} source={require("../../image/btnsua.png")}></Image>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <View style={{ width: 100, height: 100, backgroundColor: "#EAB1B1", borderRadius: 10, marginTop: 15 }}>
                    <Image style={{ width: 100, height: 100, marginLeft: 12 }} source={require("../../image/avt.png")}></Image>
                </View>
            </View>
            <View style={{ marginTop: 20, alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Hoàng Tiến Mạnh Đức</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <ImageBackground style={{ width: 350, height: 80, justifyContent: "center", marginTop: 20 }} source={require("../../image/border_profile.png")}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{ marginLeft: 15 }}>
                            <Image style={{ width: 30, height: 30, marginLeft: 20 }} source={require("../../image/btn1_pf.png")}></Image>
                            <Text style={{ marginLeft: 5, fontWeight: 'bold' }}>My Order</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={{ width: 31, height: 25, marginLeft: 20 }} source={require("../../image/btn2_pf.png")}></Image>
                            <Text style={{ marginLeft: 5, marginTop: 5, fontWeight: 'bold' }}>Paymen</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginRight: 15 }}>
                            <Image style={{ width: 33, height: 30, marginLeft: 20 }} source={require("../../image/btn3_pf.png")}></Image>
                            <Text style={{ marginLeft: 5, fontWeight: 'bold' }}>Location</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
            <TouchableOpacity style={{ height: '10%', width: '90%', flexDirection: 'row', marginTop:20,marginLeft:20 }}>
                <View style={{ width: 45, height: 45, backgroundColor: "#CCC8C8", borderRadius: 10, justifyContent: "center", alignItems: "center", marginTop: 12 }}>
                    <Image style={{ width: 20, height: 20}} source={require("../../image/btn7_pf.png")}></Image>
                </View>
                <Text style={{ marginTop: 22, fontSize: 20,marginLeft:30 }}>User Detail</Text>
                <Image style={{ width: 14, height: 26, marginTop: 23,marginLeft:160 }} source={require("../../image/btnchuyen_pf.png")}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={{ height: '10%', width: '90%', flexDirection: 'row',marginLeft:20 }}>
                <View style={{ width: 45, height: 45, backgroundColor: "#CCC8C8", borderRadius: 10, justifyContent: "center", alignItems: "center", marginTop: 12 }}>
                    <Image style={{ width: 25, height: 25}} source={require("../../image/btn5_pf.png")}></Image>
                </View>
                <Text style={{ marginTop: 22, fontSize: 20,marginLeft:30 }}>Setting</Text>
                <Image style={{ width: 14, height: 26, marginTop: 23,marginLeft:195 }} source={require("../../image/btnchuyen_pf.png")}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={{ height: '10%', width: '90%', flexDirection: 'row',marginLeft:20 }}>
                <View style={{ width: 45, height: 45, backgroundColor: "#CCC8C8", borderRadius: 10, justifyContent: "center", alignItems: "center", marginTop: 12 }}>
                    <Image style={{ width: 25, height: 22}} source={require("../../image/btn6_pf.png")}></Image>
                </View>
                <Text style={{ marginTop: 22, fontSize: 20,marginLeft:30 }}>Help & Support</Text>
                <Image style={{ width: 14, height: 26, marginTop: 23,marginLeft:122 }} source={require("../../image/btnchuyen_pf.png")}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={{ height: '10%', width: '90%', flexDirection: 'row',marginLeft:20 }}>
                <View style={{ width: 45, height: 45, backgroundColor: "#CCC8C8", borderRadius: 10, justifyContent: "center", alignItems: "center", marginTop: 12 }}>
                    <Image style={{ width: 25, height: 25}} source={require("../../image/btn4_pf.png")}></Image>
                </View>
                <Text style={{ marginTop: 22, fontSize: 20,marginLeft:30 }}>Chane Language</Text>
                <Image style={{ width: 14, height: 26, marginTop: 23,marginLeft:105 }} source={require("../../image/btnchuyen_pf.png")}></Image>
            </TouchableOpacity>
            <View  style={{justifyContent:"center",alignItems:"center",marginTop:10}}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Home')}} style={{width:250,height:50,backgroundColor:"#E12020",borderRadius:15,justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>Log Out</Text>
                </TouchableOpacity>
            </View>
           
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});