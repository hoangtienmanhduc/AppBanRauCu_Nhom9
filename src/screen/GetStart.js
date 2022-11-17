import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ImageBackground,Image,TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{width:"100%",height:"100%"}}>
        <View style={{flex:0.6}}>
            <ImageBackground style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}} source={require("../../image/backgroundstart.png")}>
                <Image source={require("../../image/img1.png")}></Image>
            </ImageBackground> 
        </View>
        <View style={{flex:0.45,width:"100%",height:"100%"}}>
            <View style={{flex:0.6,alignItems:"center",justifyContent:"space-between",width:"100%",height:"100%"}}>
                <Text></Text>
                <Text style={{fontSize:30,fontWeight:"bold"}}>Buy Your Daily</Text>
                <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:30,fontWeight:"bold",color:"red"}}>Grocery </Text>
                    <Text style={{fontSize:30,fontWeight:"bold"}}>Easily</Text>
                </View>
                <View style={{justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:18,color:"gray"}}>The easiest way to shate your family's</Text>
                    <Text style={{fontSize:18,color:"gray"}}>grocery shopping - Try it out</Text>
                </View>
             
            </View>
            <View  style={{flex:0.4,width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}}>
                <TouchableOpacity style={{width:"50%",height:"40%",backgroundColor:"#E12020",borderRadius:15,justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>Let's Buy</Text>
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