import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ImageBackground, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { Component, useState } from 'react';
export default function Home({ navigation }) {
  const [click, setcick] = useState()
  const DATA = [
    {
      title: "Fruits",
    },
    {
      title: "Vegatable",
    },
    {
      title: "Bakery",
    },
    {
      title: "Fast food",
    },
  ];
  const DATA1 = [
    {
      title: "Strawbery",
      gt: "Fresh Fruits",
      price: "4.53",
      img: require("../../image/qua1.png"),
      star: 4.8

    },
    {
      title: "Mango",
      gt: "Fresh Fruits",
      price: "3.9",
      img: require("../../image/qua2.png"),
      star: 4.0

    },
    {
      title: "Graperfruit",
      gt: "Fresh Fruits",
      price: "4.53",
      img: require("../../image/qua3.png"),
      star: 3.8
    },
    {
      title: "Pomegranate",
      gt: "Fresh Fruits",
      price: "4.53",
      img: require("../../image/qua4.png"),
      star: 2.5
    },
  ];
  const Item = ({ item, click, onPress, backgroundColor, textColor, index }) => (
    <View>
      {click === index ? (<View><TouchableOpacity style={{justifyContent:'center',marginLeft:18,alignItems:'center'}} onPress={onPress}  >
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "black",textDecorationLine: "underline" }}>
          {item.title}
        </Text>
      </TouchableOpacity></View>) : (<View>
        <TouchableOpacity style={{justifyContent:'center',marginLeft:18,alignItems:'center' }} onPress={onPress}  >
          <Text style={{ fontSize: 18, color: "gray" }}>
            {item.title}
          </Text>
        </TouchableOpacity>
      </View>)}

    </View>
  );
  const renderItem = ({ item, index }) => {
    return (
      <Item
        item={item}
        index={index}
        click={click}
        onPress={() => {
          setcick(DATA.indexOf(item))
        }
        }

      />
    );
  };
  const Item1 = ({ item, click, onPress, backgroundColor, textColor, index }) => (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Detail", { item })}>
        <ImageBackground style={{width: 170, marginLeft: 18, marginTop: 20, height: 240,justifyContent:'center'}} source={require("../../image/border1.png")}>
        <View style={{ flex: 0.2, justifyContent: "center", alignItems: "flex-end", paddingRight: 10,paddingTop:5}}>
            <View style={{ width: 30, height: 35, backgroundColor: "#EAB1B1", justifyContent: "center", alignItems: "center", borderRadius: 10 }}>
              <Image style={{ width: 15, height: 20, justifyContent: "center", alignItems: "center" }} source={require("../../image/btn2.png")}></Image>
            </View>
          </View>
          <View style={{ flex: 0.8, width: "100%", height: "100%", alignItems: "center" }}>
            <View style={{ width: "100%", alignItems: "center"}}>
              <Image style={{ width: 180, height: 100, resizeMode: 'contain'}} source={item.img}></Image>
            </View>
            <View style={{ width: "80%" }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.title}</Text>
              <Text style={{ fontSize: 16, color: "gray", fontStyle: 'italic'}}>{item.gt}</Text>
              <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={{ fontSize: 20, fontWeight: "bold",color:'#32cd32' }}>${item.price}</Text>
                <ImageBackground style={{ width: 30, height: 30, justifyContent: "center", alignItems: "center" }} source={require("../../image/icon1_1.png")}>
                  <Image style={{ width: 13, height: 20, justifyContent: "center", alignItems: "center" }} source={require("../../image/btngiohang.png")}></Image>
                </ImageBackground>
              </View>
            </View>
          </View>
        </ImageBackground> 
      </TouchableOpacity>
    </View>
  );
  const renderItem1 = ({ item, index }) => {
    return (
      <Item1
        item={item}
        index={index}
        click={click}
      // onPress={() => {
      //        setcick(DATA.indexOf(item))
      //     }
      // }  
      />
    );
  };
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", height: "100%", alignItems: "center" }}>
        <View style={{ flex: 0.15, width: "100%", height: "100%", alignItems: "center", justifyContent: "flex-end" }}>
          <View style={{ width: "90%", height: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <TouchableOpacity onPress={() => navigation.navigate("Slideshow")}>
              <ImageBackground style={{ width: 50, height: 50, alignItems: "center", justifyContent: "center" }} source={require("../../image/icon1.png")}>
                <Image style={{ width: 20, height: 20 }} source={require("../../image/icon2.png")}></Image>
              </ImageBackground>
            </TouchableOpacity>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>Home</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <ImageBackground style={{ width: 50, height: 50, alignItems: "center", justifyContent: "center" }} source={require("../../image/icon1.png")}>
                <Image style={{ width: "100%", height: "100%", marginLeft:10 }} source={require("../../image/avt.png")}></Image>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 0.2, width: "90%", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>Let's find best food here</Text>
          <View style={{ width: "100%", paddingLeft: 15, height: "35%", flexDirection: "row", backgroundColor: "#F2EFEF", borderRadius: 10, alignItems: "center", justifyContent: "flex-start" }}>
            <Image style={{ width: 35, height: 35, paddingLeft: 10 }} source={require("../../image/iconsearch.png")}></Image>
            <TextInput style={{ width: "70%", height: "100%", paddingLeft: 20, fontSize: 20 }} placeholder={"Search now"}></TextInput>
          </View>
          <View>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              horizontal
            />
          </View>
        </View>
        <View style={{ flex: 0.55, width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
          <View style={{ width: "100%", height: "100%" }}>
            <FlatList
              data={DATA1}
              renderItem={renderItem1}
              numColumns={2}
            />
          </View>
        </View>
        <View style={{ flex: 0.1, width: "100%", height: "100%", justifyContent: "flex-end" }}>
          <View style={{ width: "100%", height: "70%", backgroundColor: "#EAB1B1", alignItems: "center", flexDirection: "row", justifyContent: "space-between", padding: 15 }}>
            <TouchableOpacity>
              <Image style={{ width: 30, height: 30 }} source={require("../../image/iconhome.png")}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Favourite")}>
              <Image style={{ width: 17, height: 28 }} source={require("../../image/btn3.png")}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
              <Image style={{ width: 30, height: 30 }} source={require("../../image/icongiohang.png")}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("OrderDetail")}>
              <Image style={{ width: 30, height: 30 }} source={require("../../image/iconchuong.png")}></Image>
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