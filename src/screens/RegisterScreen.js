import React, { useState, createRef, useEffect } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import defaultStyles from '../styles/defaultStyles';
const SignUp = ({navigation}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const passwordInputRef = createRef();
    return (
        <SafeAreaView style={defaultStyles.mainBody}>
            <KeyboardAvoidingView enabled>
                <View style={defaultStyles.headerStyle}>
                    <Text style={defaultStyles.header}>Register</Text>
                </View>
                <Text style={defaultStyles.labelStyle}>First Name</Text>
                <View style={defaultStyles.sectionStyle}>
                    <TextInput
                        style={defaultStyles.errorInputStyle}
                        onChangeText={(firstName) =>
                            setFirstName(firstName)
                        }
                        placeholder="First Name"
                        placeholderTextColor="#8b9cb5"
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="default"
                        returnKeyType="next"
                        underlineColorAndroid="#f000"
                        blurOnSubmit={false}
                    />
                </View>
                <Text style={defaultStyles.labelStyle}>Last Name</Text>
                <View style={defaultStyles.sectionStyle}>
                    <TextInput
                        style={defaultStyles.errorInputStyle}
                        onChangeText={(lastName) =>
                            setLastName(lastName)
                        }
                        placeholder="Last Name"
                        placeholderTextColor="#8b9cb5"
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="default"
                        returnKeyType="next"
                        underlineColorAndroid="#f000"
                        blurOnSubmit={false}
                    />
                </View>
                <Text style={defaultStyles.labelStyle}>Email</Text>
                <View style={defaultStyles.sectionStyle}>
                    <TextInput
                        style={defaultStyles.errorInputStyle}
                        onChangeText={(userEmail) =>
                            setUserEmail(userEmail)
                        }
                        placeholder="Enter Email"
                        placeholderTextColor="#8b9cb5"
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        returnKeyType="next"
                        onSubmitEditing={() =>
                            passwordInputRef.current &&
                            passwordInputRef.current.focus()
                        }
                        underlineColorAndroid="#f000"
                        blurOnSubmit={false}
                    />
                </View>
                <Text style={defaultStyles.labelStyle}>Password</Text>
                <View style={defaultStyles.sectionStyle}>
                    <TextInput
                        style={defaultStyles.errorInputStyle}
                        onChangeText={(userPassword) =>
                            setUserPassword(userPassword)
                        }
                        placeholder="Enter Password"
                        placeholderTextColor="#8b9cb5"
                        autoCorrect={false}
                        keyboardType="default"
                        ref={passwordInputRef}
                        onSubmitEditing={Keyboard.dismiss}
                        blurOnSubmit={false}
                        secureTextEntry={true}
                        underlineColorAndroid="#f000"
                        returnKeyType="next"
                    />
                </View>
                <View >
                    <TouchableOpacity
                        style={defaultStyles.buttonStyle}
                        onPress={() => { }}>
                        <Text style={defaultStyles.buttonTextStyle}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text
                        style={defaultStyles.registerTextStyle}
                        onPress={() => navigation.navigate('Login')}>
                        Already have an account? Sign In
                    </Text>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default SignUp;