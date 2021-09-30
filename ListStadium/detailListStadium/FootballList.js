import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { useFonts } from "expo-font";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

function fillData(myData) {
  return myData.map((element) => {
    return (
      <View
        key={element.id}
        style={{
          flexDirection: "column",
          paddingBottom: 20,
          borderWidth: 1,
          borderStyle: "dotted",
          borderColor: "transparent",
          borderBottomColor: "#BCC0C3",
          marginTop: 10,
          justifyContent: "center",
          width: width,
          paddingLeft: 5,
          paddingRight:5,
        }}
      >
        <View
          style={{
            paddingRight: width / 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: width / 3.5,
              height: width / 3.5,
              resizeMode: "stretch",
              borderRadius: 10,
            }}
            source={{
              uri: element.img,
            }}
          />
          <View style={{ marginLeft: 8 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialCommunityIcons
                  style={{
                    marginRight: 2,
                  }}
                  name="check-decagram"
                  size={24}
                  color="#3ac5c9"
                />
                <Text
                  style={{
                    fontSize: 16,
                    width: width / 2,
                    fontFamily: "RobotoBlack",
                  }}
                >
                  {element.name}
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <AntDesign name="star" size={24} color="#F7B603" />
                <Text style={{ fontSize: 16 }}>{element.rating}</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Entypo
                name="map"
                color="#3ac5c9"
                style={{ marginRight: 5,fontSize:24 }}
              />
              <Text style={{ width: width / 2, fontFamily: "RototoMedium" }}>
                {element.address}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <MaterialCommunityIcons
                name="soccer-field"
                color="#3ac5c9"
                style={{  marginRight: 7,fontSize:25}}
              />
              <Text
                style={{
                  flex: 1,
                  width: width / 2,
                  lineHeight: 18,
                  color: "black",
                  fontFamily: "RototoMedium",
                  marginTop: 5,
                  marginBottom: 5,
                }}
              >
                {element.type}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <FontAwesome5
                  name="money-bill"
                  color="#3ac5c9"
                  style={{ marginRight: 2,fontSize:20 }}
                />
                <Text
                  style={{
                    fontSize: 16,
                    marginBottom: 2,
                    color: "black",
                    fontFamily: "RototoMedium",
                  }}
                >
                  {element.price} VND / 1h
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Entypo name="location-pin" size={24} color="#3ac5c9" />
                <Text
                  style={{
                    fontSize: 16,
                    color: "#969EA6",
                    fontFamily: "RobotoBlack",
                  }}
                >
                  {element.distance} km
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={{
                width: width / 1.5,
                marginTop: 10,
                paddingTop: 5,
                paddingBottom: 5,
                backgroundColor: "red",
                borderWidth: 1,
                borderRadius: 5,
                borderColor: "red",
              }}
            >
              <Text
                style={{ textAlign: "center", fontSize: 16, fontFamily:"RobotoMedium",color:"white" }}
              >
                Đặt sân ngay
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  });
}

export default function FootballList(props) {
  const [loaded] = useFonts({
    RobotoBlack: require("../../assets/fonts/Roboto-Black.ttf"),
    RobotoThin: require("../../assets/fonts/Roboto-Thin.ttf"),
    RototoMedium: require("../../assets/fonts/Roboto-Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return <View>{fillData(props.myData)}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
