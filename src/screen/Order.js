import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Order() {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: "100%", width: "84%", marginLeft: "7%" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image source={require("../assets/favicon.png")}></Image>
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            marginLeft: 100,
                        }}
                    >
                        Order
                    </Text>
                </View>
                <View
                    style={{
                        height: "8%",
                        width: "100%",
                        borderWidth: 1,
                        marginTop: 20,
                        borderRadius: 15,
                        flexDirection: "row",
                    }}
                >
                    <TouchableOpacity
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            height: "90%",
                            marginTop: "1%",
                            width: "46%",
                            borderWidth: 1,
                            borderRadius: 15,
                            marginLeft: "2%",
                        }}
                    >
                        <Text>Deliver</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            height: "90%",
                            borderRadius: 15,
                            marginTop: "1%",
                            width: "46%",
                            marginLeft: "2%",
                            borderWidth: 1,
                        }}
                    >
                        <Text>Pick up</Text>
                    </TouchableOpacity>
                </View>
                <View></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
