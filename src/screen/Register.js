import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Register({ navigation }) {
    const [visible, setVisible] = useState(true);
    const [visiblepass, setVisiblePass] = useState(true);
    return (
        <View style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
            <View
                style={{
                    height: "25%",
                    width: "80%",
                    marginLeft: "10%",

                    marginTop: 20,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Image
                    style={{ height: 236, width: 216 }}
                    source={require("../../image/logo-removebg-preview.png")}
                ></Image>
            </View>
            <View
                style={{
                    height: "60%",
                    width: "80%",
                    marginLeft: "10%",

                    marginTop: 10,
                }}
            >
                <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                    Sign Up
                </Text>
                <Text
                    style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}
                >
                    Name
                </Text>
                <View
                    style={{
                        height: "10%",
                        borderWidth: 1,
                        borderRadius: 15,
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 5,
                    }}
                >
                    <Image
                        style={{ marginLeft: 10, height: 35, width: 35 }}
                        source={require("../../image/idpngrepocom.png")}
                    ></Image>
                    <TextInput
                        placeholder="Type your name"
                        style={{
                            height: "100%",
                            width: 270,
                            marginLeft: 10,
                            paddingRight: 30,
                        }}
                    >
                        <Text></Text>
                    </TextInput>
                </View>
                <Text
                    style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}
                >
                    Email
                </Text>
                <View
                    style={{
                        height: "10%",
                        borderWidth: 1,
                        borderRadius: 15,
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 5,
                    }}
                >
                    <Image
                        style={{ marginLeft: 10, height: 35, width: 35 }}
                        source={require("../../image/email-pngrepo-com.png")}
                    ></Image>
                    <TextInput
                        placeholder="Type your email"
                        style={{
                            height: "100%",
                            width: 270,
                            marginLeft: 10,
                            paddingRight: 30,
                        }}
                    >
                        <Text></Text>
                    </TextInput>
                </View>
                <Text
                    style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}
                >
                    Password
                </Text>
                <View
                    style={{
                        height: "10%",
                        borderWidth: 1,
                        borderRadius: 15,
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 5,
                    }}
                >
                    <Image
                        style={{ marginLeft: 10, height: 35, width: 35 }}
                        source={require("../../image/password-pngrepo-com.png")}
                    ></Image>
                    <TextInput
                        placeholder="Type your password"
                        secureTextEntry={visiblepass ? false : true}
                        style={{
                            height: "100%",
                            width: 225,
                            marginLeft: 10,
                            paddingRight: 10,
                        }}
                    >
                        <Text></Text>
                    </TextInput>
                    <TouchableOpacity
                        onPress={() => {
                            console.log("pass");
                            setVisiblePass(!visiblepass);
                        }}
                    >
                        <Image
                            style={{ height: 25, width: 25 }}
                            source={
                                visiblepass
                                    ? require("../../image/visible-eye-pngrepo-com.png")
                                    : require("../../image/invisible-pngrepo-com.png")
                            }
                        ></Image>
                    </TouchableOpacity>
                </View>
                <Text
                    style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}
                >
                    Confirm password
                </Text>
                <View
                    style={{
                        height: "10%",
                        borderWidth: 1,
                        borderRadius: 15,
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 5,
                    }}
                >
                    <Image
                        style={{ marginLeft: 10, height: 35, width: 35 }}
                        source={require("../../image/password-pngrepo-com.png")}
                    ></Image>
                    <TextInput
                        placeholder="Confirm your password"
                        secureTextEntry={visible ? false : true}
                        style={{
                            height: "100%",
                            width: 225,
                            marginLeft: 10,
                            paddingRight: 10,
                        }}
                    >
                        <Text></Text>
                    </TextInput>
                    <TouchableOpacity
                        onPress={() => {
                            setVisible(!visible);
                        }}
                    >
                        <Image
                            style={{ height: 25, width: 25 }}
                            source={
                                visible
                                    ? require("../../image/visible-eye-pngrepo-com.png")
                                    : require("../../image/invisible-pngrepo-com.png")
                            }
                        ></Image>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={{
                        height: "11%",
                        backgroundColor: "#151414",
                        width: "60%",
                        borderWidth: 1,
                        borderRadius: 15,
                        marginLeft: "20%",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 20,
                    }}
                >
                    <Text
                        style={{
                            color: "#FFFFFF",
                            fontWeight: "bold",
                            fontSize: 15,
                        }}
                    >
                        Register
                    </Text>
                </TouchableOpacity>
                <View
                    style={{
                        height: "10%",

                        marginTop: 20,
                        flexDirection: "row",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 15,
                            color: "#000000",
                            marginLeft: 20,
                        }}
                    >
                        Do you have account?
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Login");
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 15,
                                fontWeight: "bold",
                                marginLeft: 60,
                            }}
                        >
                            Sign In
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
