import React from "react";
import {
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet,
  Button,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { useFonts } from "expo-font";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

export default class DetailStadium extends React.Component {
  data = [
    {
      id: 1,
      img: "https://bangsport.net/wp-content/uploads/2020/12/1200px-Panoramic_santiago_bernabeu.jpg",
      name: "Sân bóng Hoa Lư",
      address: "19 Hòa Hưng Quận Tân Bình Thành Phố HCM",
      price: "450000",
      type: "Sân 5",
      rating: "4.6",
      distance: 0.5,
    },
    {
      id: 2,
      img: "https://bangsport.net/wp-content/uploads/2020/12/1200px-Panoramic_santiago_bernabeu.jpg",
      name: "Sân bóng Hoa Lư",
      address: "19 Hòa Hưng Quận Tân Bình Thành Phố HCM",
      price: "350000",
      type: "Sân 7",
      rating: "4.6",
      distance: 0.5,
    },
    {
      id: 3,
      img: "https://bangsport.net/wp-content/uploads/2020/12/1200px-Panoramic_santiago_bernabeu.jpg",
      name: "Sân bóng Hoa Lư",
      address: "19 Hòa Hưng Quận Tân Bình Thành Phố HCM",
      price: "555000",
      type: "Sân 110",
      rating: "4.6",
      distance: 0.5,
    },
    {
      id: 4,
      img: "https://bangsport.net/wp-content/uploads/2020/12/1200px-Panoramic_santiago_bernabeu.jpg",
      name: "Sân bong Hoa Lư",
      address: "19 Hòa Hưng Quận Tân Bình Thành Phố HCM",
      price: "555000",
      type: "Sân 111",
      rating: "4.6",
      distance: 0.5,
    },
  ];

  listStadium = () => {
    return this.data.map((element) => {
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
            paddingRight: 5,
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
                      width: width / 2.5,
                      fontFamily: "RobotoBlack",
                      marginBottom: 3,
                    }}
                  >
                    {element.name}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <AntDesign name="star" size={24} color="#F7B603" />
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: "RototoMedium",
                    }}
                  >
                    {element.rating}
                  </Text>
                </View>
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
                  style={{ marginRight: 7, fontSize: 25 }}
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
                    style={{ marginRight: 2, fontSize: 20 }}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      marginBottom: 2,
                      color: "black",
                      fontFamily: "RototoMedium",
                    }}
                  >
                    {element.price} vnđ / 1h
                  </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Entypo name="location-pin" size={24} color="#3ac5c9" />
                  <Text
                    style={{
                      fontSize: 16,
                      color: "black",
                      fontFamily: "RototoMedium",
                    }}
                  >
                    {element.distance} km
                  </Text>
                </View>
              </View>

              <TouchableOpacity
                style={{
                  width: width / 1.6,
                  marginTop: 10,
                  paddingTop: 5,
                  paddingBottom: 5,
                  backgroundColor: "white",
                  borderWidth: 1,
                  borderRadius: 5,
                  // borderColor: "red",
                  borderWidth: 2,
                  borderColor: "#3ac5c9",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 16,
                    fontFamily: "RobotoMedium",
                    color: "#3ac5c9",
                    fontWeight: "700",
                  }}
                >
                  Đặt sân ngay
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    });
  };

  rate = [
    "sân đẹp (500)",
    "mặt cỏ xịn (540)",
    "thoáng mát (300)",
    "cô chủ xinh (999+)",
    "nhiều đồ giải khát (100)",
    " dịch vụ tốt (999+)",
    "(more)",
  ];

  listRatings = () => {
    return this.rate.map((element) => {
      return (
        <Text
          key={element}
          style={{
            width: "auto",
            paddingTop: 5,
            paddingBottom: 5,
            backgroundColor: "#9cb4b4",
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 10,

            textAlign: "center",
            fontSize: 14,
            fontWeight: "600",
            marginLeft: 10,
          }}
        >
          {element}
        </Text>
      );
    });
  };

  render() {
    return (
      <ScrollView>
        <View style={{}}>
          <ImageBackground
            style={{
              width: width,
              height: height / 3,
              resizeMode: "stretch",
              borderRadius: 10,
            }}
            source={{ uri: this.data[0].img }}
          />

          <View
            style={{
              alignItems: "center",
              paddingTop: 10,
              paddingBottom: 10,
              position: "absolute",
              top: 170,
              left: 35,
              right: 0,
              bottom: 0,
              justifyContent: "center",
              backgroundColor: "#fff",
              height: 160,
              width: width / 1.2,
              borderRadius: 10,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons
                style={{
                  marginRight: 2,
                  position: "absolute",
                  left: 50,
                }}
                name="check-decagram"
                size={24}
                color="#27bdd4"
              />

              <Text
                style={{
                  textAlign: "center",
                  flex: 1,
                  width: width,
                  fontSize: 13,
                  color: "#09adc6",
                  fontFamily: "RototoMedium",
                  textTransform: "uppercase",
                }}
              >
                Đối tác của we sports
              </Text>
            </View>

            <Text
              style={{
                fontSize: 25,
                textAlign: "center",
                fontFamily: "RobotoBlack",
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              {this.data[0].name}
            </Text>
            <Text
              style={{
                width: width / 1.5,
                fontSize: 14,
                color: "black",
                fontFamily: "RototoMedium",
                textAlign: "center",
              }}
            >
              {this.data[0].distance}km {this.data[0].address}
            </Text>
          </View>
        </View>

        <View
          style={{ flexDirection: "row", marginTop: 100, paddingBottom: 20 }}
        >
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {this.listRatings()}
          </ScrollView>
        </View>

        <Text
          style={{
            fontSize: 14,
            color: "black",
            fontFamily: "RototoMedium",
            textAlign: "center",
            fontWeight: "700",
            marginBottom: 10,
          }}
        >
          DỊCH VỤ TẠI ĐỊA ĐIỂM
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            borderBottomColor: "#999b9b",
            borderBottomWidth: 5,
            paddingBottom: 20,
          }}
        >
          <View style={{}}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons
                style={{
                  marginRight: 10,
                }}
                name="car-side"
                size={24}
                //   color="#3ac5c9"
              />
              <Text>Đậu xe</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons
                style={{
                  marginRight: 10,
                }}
                name="spotlight"
                size={24}
                //   color="#3ac5c9"
              />
              <Text>Hệ thống đèn </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons
                style={{
                  marginRight: 10,
                }}
                name="tshirt-crew"
                size={24}
                //   color="#3ac5c9"
              />
              <Text>Cho thuê áo</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons
                style={{
                  marginRight: 10,
                }}
                name="paper-roll"
                size={24}
                //   color="#3ac5c9"
              />
              <Text>Nhà vệ sinh</Text>
            </View>
          </View>
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons
                style={{
                  marginRight: 10,
                }}
                name="soccer"
                size={24}
                //   color="#3ac5c9"
              />
              <Text>Bóng miễn phí</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons
                style={{
                  marginRight: 10,
                }}
                name="wifi"
                size={24}
                //   color="#3ac5c9"
              />
              <Text>Wifi miễn phí </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons
                style={{
                  marginRight: 10,
                }}
                name="hamburger"
                size={24}
                //   color="#3ac5c9"
              />
              <Text>Căn tin</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons
                style={{
                  marginRight: 10,
                }}
                name="shower-head"
                size={24}
                //   color="#3ac5c9"
              />
              <Text>Phòng tắm</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "column",
            paddingBottom: 20,
            borderWidth: 1,
            borderStyle: "dotted",
            borderColor: "transparent",

            marginTop: 10,
            justifyContent: "center",
            width: width,
            paddingLeft: 8,
          }}
        >
          <Text
            style={{
              fontSize: 22,
              textAlign: "center",
              fontFamily: "RobotoBlack",
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            {this.data[0].name}
          </Text>

          {this.listStadium()}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  stadiumInfo: {},
});
