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
import defaultStyles from '../styles/defaultStyles';
// import { loginUser } from "../redux/user/actions";
// import { connect } from 'react-redux';
function UserLogin({ navigation }) {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const passwordInputRef = createRef();
//   const handleLogin = async () => {
//     const result = await loginUser(userEmail, userPassword);
//     if (result.status === 200) {
//       navigation.navigate('FuneralViewScreen')
//     }
//     else {
//       // console.log("user", user)
//     }
//   }
  useEffect(() => {
    // checkDetailsValid();
  }, [userPassword, userEmail]);
  return (
    <View style={defaultStyles.mainBody}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          marginLeft: Platform.isPad ? 80 : 24,
          marginRight: Platform.isPad ? 80 : 24
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={defaultStyles.headerSectionStyle}>
              <View style={defaultStyles.headerStyle}>
                <Text style={defaultStyles.header}>Netserve Badminton</Text>
                <Text style={defaultStyles.subHeader}>Funeral Live Admin Panel</Text>
              </View>
            </View>
            <Text style={defaultStyles.labelStyle}>Email</Text>
            <View style={defaultStyles.sectionStyle}>
              <TextInput
                style={defaultStyles.inputStyle}
                onChangeText={(UserEmail) =>
                  setUserEmail(UserEmail)
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
            {/* <View style={defaultStyles.errorStyle}><Text style={defaultStyles.errorTextStyle}>{errorStates.email}</Text></View> */}
            <Text style={defaultStyles.labelStyle}>Password</Text>
            <View style={defaultStyles.sectionStyle}>
              <TextInput
                style={defaultStyles.inputStyle}
                onChangeText={(UserPassword) =>
                  setUserPassword(UserPassword)
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
            {/* <View style={defaultStyles.errorStyle}><Text style={defaultStyles.errorTextStyle}>{errorStates.password}</Text></View> */}
            {/* {user.error &&
              <View style={defaultStyles.errorStyle}>
                <Text style={defaultStyles.errorTextStyle}>
                  Email or password is incorrect. Please try again.
                </Text>
              </View>} */}
            <View style={defaultStyles.signInStyle}>
              <Text
                style={defaultStyles.registerTextStyle}
                onPress={() => navigation.navigate('ForgotPasswordScreen')}>
                Forgot Password
              </Text>
              <View>
                <TouchableOpacity
                  style={defaultStyles.buttonStyle}
                  onPress={() => {}}>
                  <Text style={defaultStyles.buttonTextStyle}>Sign in</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text
                style={defaultStyles.registerTextStyle}
                onPress={() => navigation.navigate('Register')}>
                Don't have an account? Sign Up
              </Text>
          </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  )
}
// const mapStateToProps = state => ({
// });

// const mapDispatchToProps = {
  
// };
// export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
export default UserLogin;
