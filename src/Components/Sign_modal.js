import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Image, Avatar } from 'react-native-elements';
import { BaseColor, Images } from "../Config";
import { Text } from "./index";
import Modal from 'modal-react-native-web';
// const _HEIGHT = Dimensions.get("window").height;
// const _WIDTH = Dimensions.get("window").width;

const TextInput = (props) => {
    console.log(props);
    return <input type={props?.keyboardType == "numeric" ? "number" : props.secureTextEntry ? "password" : "text"} style={StyleSheet.flatten(props.style)} value={props.value} onChange={(e) => props.onChangeText(e.target.value)} />
}
export default class Sign_modal extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }

    render() {
        let data = {

        };
        const { visible_modals, styles, modalVisible, selectImageModal, signin, signup, setSignUpState,setSignInState, signIn, signUp} = this.props;
    return (
            <>
            <Modal
                    animationType="slide"
                    transparent={false}
                    visible={visible_modals.signup || visible_modals.signin}
                    ariaHideApp={false}
                >
                    <View style={styles.centeredView}>
                        <View style={[styles.modalView, { backgroundColor: BaseColor.primaryColor }]}>
                            <TouchableOpacity onPress={()=>modalVisible(false, false)} style={[styles.btn_close, { top: 0, right: 30 }]}><Text style={{ fontSize: 60, color: "#000", }}>×</Text></TouchableOpacity>
                            {visible_modals.signup &&
                                <>
                                    <View style={styles.modalTitle}>
                                        <Text title1 style={styles.modalText}>Sign up as a user</Text>
                                    </View>
                                    <TouchableOpacity onPress={selectImageModal} style={{ marginTop: 20, borderColor: BaseColor.grayColor, borderWidth: 2, borderRadius: 9999 }}>
                                        <Avatar
                                            source={{ uri: signup.uploading ? "" : signup.avatar }}
                                            rounded
                                            title={signup.uploading ? `${signup.upload_pro}% ↑↑` : "avatar"}
                                            titleStyle={{ fontSize: 20 }}
                                            size={'large'} />
                                    </TouchableOpacity>
                                    <View style={[styles.modalBody, styles.modalSignBody]}>
                                        <View style={styles.inputWrap}>
                                            <Text title3 style={{ lineHeight: 30 }}>First name</Text>
                                            <TextInput
                                                style={styles.inputElement}
                                                value={signup.firstname}
                                                onChangeText={(firstname) => setSignUpState({ firstname })}
                                            />
                                        </View>
                                        <View style={styles.inputWrap}>
                                            <Text title3 style={{ lineHeight: 30 }}>Last name</Text>
                                            <TextInput
                                                style={styles.inputElement}
                                                value={signup.lastname}
                                                onChangeText={(lastname) => setSignUpState({ lastname })}
                                            />
                                        </View>
                                        <View style={styles.inputWrap}>
                                            <Text title3 style={{ lineHeight: 30 }}>Email address</Text>
                                            <TextInput
                                                style={styles.inputElement}
                                                value={signup.email}
                                                onChangeText={(email) => setSignUpState({ email })}
                                            />
                                        </View>
                                        <View style={styles.inputWrap}>
                                            <Text title3 style={{ lineHeight: 30 }}>Age</Text>
                                            <TextInput
                                                style={styles.inputElement}
                                                value={signup.age}
                                                keyboardType={'numeric'}
                                                onChangeText={(age) => setSignUpState({ age })}
                                            />
                                        </View>
                                        {/* <View style={styles.inputWrap}>
                                            <Text title3 style={{ lineHeight: 30 }}>Select plan</Text>
                                            <TextInput
                                                style={styles.inputElement}
                                                value={signup.plan}
                                                onChangeText={(plan) => setSignUpState({ plan })}
                                            />
                                        </View> */}
                                        <View style={styles.inputWrap}>
                                            <Text title3 style={{ lineHeight: 30 }}>Password</Text>
                                            <TextInput
                                                style={styles.inputElement}
                                                secureTextEntry
                                                value={signup.password}
                                                onChangeText={(password) => setSignUpState({ password })}
                                            />
                                        </View>
                                        <View style={styles.inputWrap}>
                                            <Text title3 style={{ lineHeight: 30 }}>Mobile number</Text>
                                            <TextInput
                                                style={styles.inputElement}
                                                value={signup.phonenumber}
                                                onChangeText={(phonenumber) => setSignUpState({ phonenumber })}
                                            />
                                        </View>
                                        
                                        {/* <View style={styles.inputWrap}>
                                            <Text title3 style={{ lineHeight: 30 }}>Confirm password</Text>
                                            <TextInput
                                                style={styles.inputElement}
                                                value={signup.confirmpwd}
                                                secureTextEntry
                                                onChangeText={(confirmpwd) => setSignUpState({ confirmpwd })}
                                            />
                                        </View> */}
                                    </View>
                                    <TouchableOpacity onPress={signUp} style={[styles.btn_modal, styles.btn_sign]}>
                                        <Text title1 style={styles.modalText}>Sign Up</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => modalVisible(false, true)} style={{ marginTop: 10 }}>
                                        <Text title3>Sign In</Text>
                                    </TouchableOpacity>
                                </>
                            }
                            {visible_modals.signin &&
                                <>
                                    <View style={styles.modalTitle}>
                                        <Text title1 style={styles.modalText}>Sign In as a user</Text>
                                    </View>
                                    <View style={[styles.modalBody, styles.modalSignBody, { flexDirection: "column" }]}>
                                        <View style={styles.inputWrap}>
                                            <Text title3 style={{ lineHeight: 30 }}>Email</Text>
                                            <TextInput
                                                style={styles.inputElement}
                                                placeholder={"input your email"}
                                                value={signin.email}
                                                onChangeText={(email) => setSignInState({ email })}
                                            />
                                        </View>
                                        <View style={styles.inputWrap}>
                                            <Text title3 style={{ lineHeight: 30 }}>Password</Text>
                                            <TextInput
                                                style={styles.inputElement}
                                                secureTextEntry
                                                placeholder={"input your password"}
                                                value={signin.password}
                                                onChangeText={(password) => setSignInState({ password })}
                                            />
                                        </View>
                                    </View>
                                    <TouchableOpacity onPress={signIn} style={[styles.btn_modal, styles.btn_sign]}>
                                        <Text title1 style={styles.modalText}>Sign In</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => modalVisible(true, false)} style={{ marginTop: 10 }}>
                                        <Text title3>Sign Up</Text>
                                    </TouchableOpacity>
                                </>
                            }
                        </View>
                    </View>
                </Modal>
            </>
        );
    }
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        position: "relative"
    },
});
