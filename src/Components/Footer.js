import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from 'react-native-elements';
import { BaseColor, Images } from "../Config";
import { Text } from "./index";
// const _HEIGHT = Dimensions.get("window").height;
// const _WIDTH = Dimensions.get("window").width;

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    // onGoPage(page) {
    //     alert(`next page: ${page}`);
    // }
    render() {
        const { navigate } = this.props;
        console.log(navigate);
        return (
            <View style={styles.footer_container}>
                <View style={styles.bottom}>
                    <View style={{ flex: 1 }}>
                        <Text title3 style={{ lineHeight: 60 }}>Sign up for our newsletter</Text>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                            {/* <View style={{ backgroundColor: BaseColor.whiteColor, borderRadius: 10, height: 60, flex: 1 }} />
                            <View style={{ backgroundColor: BaseColor.whiteColor, borderRadius: 10, width: 50, height: 60, marginLeft: 20 }} /> */}
                        </View>
                    </View>
                    <View style={{ flex: 2, flexDirection: "row", paddingLeft: 80 }}>
                        <View style={{ flex: 1 }}>
                            <Text title3 style={{ lineHeight: 60 }}>{"Company"}</Text>
                            <TouchableOpacity onPress={()=>navigate("about")}>
                                <Text subhead>{"About us"}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>navigate("terms")}>
                                <Text subhead>{"Terms"}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>navigate("policy")}>
                                <Text subhead>{"Policy"}</Text>
                            </TouchableOpacity>
                            <Text subhead>{"Pricing"}</Text>
                            <Text subhead>{"Contact us"}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text title3 style={{ lineHeight: 60 }}>{"Company"}</Text>
                            <Text subhead>{"About us"}</Text>
                            <Text subhead>{"Terms"}</Text>
                            <Text subhead>{"Policy"}</Text>
                            <Text subhead>{"Pricing"}</Text>
                            <Text subhead>{"Contact us"}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text title3 style={{ lineHeight: 60 }}>{"Company"}</Text>
                            <Text subhead>{"About us"}</Text>
                            <Text subhead>{"Terms"}</Text>
                            <Text subhead>{"Policy"}</Text>
                            <Text subhead>{"Pricing"}</Text>
                            <Text subhead>{"Contact us"}</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                            <View style={[styles.social]}>
                                <Image source={Images.linkedin} style={[styles.socialIcon]} />
                            </View>
                            <View style={[styles.social]}>
                                <Image source={Images.youtube} style={[styles.socialIcon]} />
                            </View>
                            <View style={[styles.social]}>
                                <Image source={Images.instagram} style={[styles.socialIcon]} />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[styles.footer, styles.center]}>
                    <Text headline>(C) 2021 Heart Inc</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    footer_container: {
        backgroundColor: BaseColor.homePinkColor,
    },
    bottom: {
        flexDirection: "row",
        paddingVertical: 60,
        marginHorizontal: 100,
        borderBottomColor: BaseColor.grayColor,
        // borderBottomWidth: 2,
    },
    social: {
        width: 30,
        height: 30,
        marginHorizontal: 10
    },
    socialIcon: {
        width: 30,
        height: 30,
        borderRadius: 5
    },
    footer: {
        paddingVertical: 30,
    },
    center: {
        justifyContent: "center",
        alignItems: "center",
    },
});
