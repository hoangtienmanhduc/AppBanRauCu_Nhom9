import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Dimensions, ImageBackground, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { Component, useEffect, useState } from 'react';
import ViewSlider from 'react-native-view-slider'
const { width, height } = Dimensions.get('window');
export default function Home({ navigation, route }) {
  const [click, setcick] = useState()
  const [data, setData] = useState([])
  const [datagiohang, setDatagiohang] = useState([])
  const [data11, setData11] = useState([])

  const DATA = [
    {
      title: "Fruits",
    },
    {
      title: "Vegatable",
    },
  ];
  const DATA1 = [
    {
      title: "Strawbery",
      gt: "Fresh Fruits",
      price: "4.00",
      img: require("../../image/qua1.png"),
      star: 4.8,
      kg: 1,
      soluong: 1,


    },
    {
      title: "Mango",
      gt: "Fresh Fruits",
      price: "3.50",
      img: require("../../image/qua2.png"),
      star: 4.0,
      kg: 1,
      soluong: 1,

    },
    {
      title: "Graperfruit",
      gt: "Fresh Fruits",
      price: "4.50",
      img: require("../../image/qua3.png"),
      star: 3.8,
      kg: 1,
      soluong: 1,
    },
    {
      title: "Pomegranate",
      gt: "Fresh Fruits",
      price: "5.80",
      img: require("../../image/qua4.png"),
      star: 2.5,
      kg: 1,
      soluong: 1,
    },
    {
      title: "Carrot",
      gt: "Vegetable",
      price: "5.80",
      img: require("../../image/rau1.png"),
      star: 4.8,
      kg: 1
    },
    {
      title: "Cabbage",
      gt: "Vegetable",
      price: "5.50",
      img: require("../../image/rau2.png"),
      star: 4.0,
      kg: 1
    },
    {
      title: "Tomato",
      gt: "Vegetable",
      price: "7.80",
      img: require("../../image/rau3.png"),
      star: 3.8,
      kg: 1
    },
    {
      title: "Broccoli",
      gt: "Vegetable",
      price: "7.50",
      img: require("../../image/rau4.png"),
      star: 2.5,
      kg: 1
    },
  ];
  const DATA2 = [
    {
      title: "Strawbery",
      gt: "Fresh Fruits",
      price: "4.00",
      img: require("../../image/qua1.png"),
      star: 4.8,
      kg: 1,
      soluong: 1,


    },
    {
      title: "Mango",
      gt: "Fresh Fruits",
      price: "3.50",
      img: require("../../image/qua2.png"),
      star: 4.0,
      kg: 1,
      soluong: 1,

    },
    {
      title: "Graperfruit",
      gt: "Fresh Fruits",
      price: "4.50",
      img: require("../../image/qua3.png"),
      star: 3.8,
      kg: 1,
      soluong: 1,
    },
    {
      title: "Pomegranate",
      gt: "Fresh Fruits",
      price: "5.80",
      img: require("../../image/qua4.png"),
      star: 2.5,
      kg: 1,
      soluong: 1,
    },
  ];
  const DATA3 = [
    {
      title: "Carrot",
      gt: "Vegetable",
      price: "5.80",
      img: require("../../image/rau1.png"),
      star: 4.8,
      kg: 1
    },
    {
      title: "Cabbage",
      gt: "Vegetable",
      price: "5.50",
      img: require("../../image/rau2.png"),
      star: 4.0,
      kg: 1
    },
    {
      title: "Tomato",
      gt: "Vegetable",
      price: "7.80",
      img: require("../../image/rau3.png"),
      star: 3.8,
      kg: 1
    },
    {
      title: "Broccoli",
      gt: "Vegetable",
      price: "7.50",
      img: require("../../image/rau4.png"),
      star: 2.5,
      kg: 1
    },
  ];
  useEffect(() => {
    setData11(DATA1)
    if (route.params) {
      if (route.params.data) { setData(route.params.data) }
      if (route.params.datacart) { setDatagiohang(route.params.datacart)
      console.log(route.params.datacart); }
    }
  }, [route.params])
  const luutru = (e) => {
    const dataTam = [...data]
    const name = []
    if (dataTam.length > 0) {
      dataTam.forEach(element => {
        name.push(element.title)
      });
    }

    if (name.indexOf(e.title) === -1) {
      dataTam.push(e)
      setData(dataTam)
    }
  }
  const giohang = (e) => {
    const dataTam2 = [...datagiohang]

    const name = []
    if (dataTam2.length > 0) {
      dataTam2.forEach(element => {
        name.push(element.title)
      });
    }

    if (name.indexOf(e.title) === -1) {
      dataTam2.push(e)
      setDatagiohang(dataTam2)
    }
  }
  const Item = ({ item, click, onPress, backgroundColor, textColor, index }) => (
    <View>
      {click === index ? (<View><TouchableOpacity style={{ justifyContent: 'space-between', marginLeft: 70, alignItems: 'center' }} onPress={onPress}  >
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "black", textDecorationLine: "underline", marginRight: 70 }}>
          {item.title}
        </Text>
      </TouchableOpacity></View>) : (<View>
        <TouchableOpacity style={{ justifyContent: 'space-around', marginLeft: 70, alignItems: 'center' }} onPress={onPress}  >
          <Text style={{ fontSize: 18, color: "gray", marginRight: 70 }}>
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
          if (item.title === "Fruits") {
            setData11(DATA2)
          }
          else {
            setData11(DATA3)
          }
        }
        }

      />
    );
  };
  const Item1 = ({ item, click, onPress, backgroundColor, textColor, index }) => (
    <View>
      <View>
        <ImageBackground style={{ width: 170, marginLeft: 18, marginTop: 20, height: 240, justifyContent: 'center' }} source={require("../../image/border1.png")}>
          <TouchableOpacity style={{ flex: 0.2, justifyContent: "center", alignItems: "flex-end", paddingRight: 10, paddingTop: 5 }} onPress={() => { luutru(item) }}>
            <View style={{ width: 30, height: 35, backgroundColor: "#EAB1B1", justifyContent: "center", alignItems: "center", borderRadius: 10 }}>
              <Image style={{ width: 15, height: 20, justifyContent: "center", alignItems: "center" }} source={require("../../image/btn2.png")}></Image>
            </View>
          </TouchableOpacity>
          <View style={{ flex: 0.8, width: "100%", height: "100%", alignItems: "center" }}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} onPress={() => navigation.navigate("Detail", { item })}>
              <Image style={{ width: 180, height: 100, resizeMode: 'contain' }} source={item.img}></Image>
            </TouchableOpacity>
            <View style={{ width: "80%" }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.title}</Text>
              <Text style={{ fontSize: 16, color: "gray", fontStyle: 'italic' }}>{item.gt}</Text>
              <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={{ fontSize: 20, fontWeight: "bold", color: '#32cd32' }}>${item.price}</Text>
                <TouchableOpacity onPress={() => { giohang(item) }}>
                  <ImageBackground style={{ width: 30, height: 30, justifyContent: "center", alignItems: "center" }} source={require("../../image/icon1_1.png")}>
                    <Image style={{ width: 13, height: 20, justifyContent: "center", alignItems: "center" }} source={require("../../image/btngiohang.png")}></Image>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
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
        <View style={{ flex: 0.12, width: "100%", height: "100%", alignItems: "center", justifyContent: "flex-end" }}>
          <View style={{ width: "90%", height: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 5 }}>
            <TouchableOpacity onPress={() => navigation.navigate("Slideshow")}>
              <ImageBackground style={{ width: 50, height: 50, alignItems: "center", justifyContent: "center" }} source={require("../../image/icon1.png")}>
                <Image style={{ width: 20, height: 20 }} source={require("../../image/icon2.png")}></Image>
              </ImageBackground>
            </TouchableOpacity>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>Home</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <ImageBackground style={{ width: 50, height: 50, alignItems: "center", justifyContent: "center" }} source={require("../../image/icon1.png")}>
                <Image style={{ width: "100%", height: "100%", marginLeft: 10 }} source={require("../../image/avt.png")}></Image>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 0.34, height: "50%", width: "100%", justifyContent: "space-between" }}>
          <View>
            <>
              <ViewSlider
                renderSlides={
                  <>
                    <View style={styles.viewBox}>
                      <Image source={{ uri: 'https://t3.ftcdn.net/jpg/01/63/13/30/360_F_163133061_TlMOMqgxAvBuwzLAjxOQ8v1FQ3OexfRG.jpg' }} style={{ height: 220, width }} />
                    </View>
                    <View style={styles.viewBox}>
                      <Image source={{ uri: 'https://img.freepik.com/psd-premium/modelo-de-banner-de-vegetais-frescos_88281-5245.jpg' }} style={{ height: 220, width }} />
                    </View>
                    <View style={styles.viewBox}>
                      <Image source={{ uri: 'https://foodrevolution.org/wp-content/uploads/iStock-1070165924-1.jpg' }} style={{ height: 220, width }} />
                    </View>
                    <View style={styles.viewBox}>
                      <Image source={{ uri: 'https://thuonghieuvietnoitieng.com//image/admin/a4403756c350a658612a29db99a7e1142cafb645/b4/hq/bang-cach-chon-trai-cay-tuoi-ngon-cho-ngay-tet-gia-dinh-ban-se-luon-co-hoa-qua-tuoi-trong-dip-tet-sap-toi.jpg' }} style={{ height: 220, width }} />
                    </View>
                  </>
                }
                style={styles.slider}     //Main slider container style
                height={200}    //Height of your slider
                slideCount={4}    //How many views you are adding to slide
                dots={true}     // Pagination dots visibility true for visibile 
                dotActiveColor='red'     //Pagination dot active color
                dotInactiveColor='gray'    // Pagination do inactive color
                dotsContainerStyle={styles.dotContainer}     // Container style of the pagination dots
                autoSlide={true}    //The views will slide automatically
                slideInterval={5000}    //In Miliseconds
              />
            </>
          </View>
          <View style={{ alignItems: 'center' }}>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              horizontal
            />
          </View>
        </View>
        <View style={{ flex: 0.55, width: "100%", height: "100%", justifyContent: "center", alignItems: "center", marginTop: 5 }}>
          <View style={{ width: "100%", height: "100%" }}>
            <FlatList
              data={data11}
              renderItem={renderItem1}
              numColumns={2}
            />
          </View>
        </View>
        <View style={{ flex: 0.11, width: "100%", height: "100%", justifyContent: "flex-end" }}>
          <View style={{ width: "100%", height: "70%", backgroundColor: "#EAB1B1", alignItems: "center", flexDirection: "row", justifyContent: "space-between", padding: 15, borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
            <TouchableOpacity>
              <Image style={{ width: 30, height: 30 }} source={require("../../image/iconhome.png")}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { const dataTam1 = [...data]; setData([]); navigation.navigate("Favourite", { data: dataTam1 }) }}>
              <Image style={{ width: 17, height: 28 }} source={require("../../image/btn3.png")}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Cart", { datagiohang })}>
              <Image style={{ width: 30, height: 30 }} source={require("../../image/icongiohang.png")}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("OrderDetail",{datagiohang})}>
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
  viewBox: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    width: width,
    padding: 10,
    alignItems: 'center',
    height: 130,

  },
  slider: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  dotContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 15
  }
});