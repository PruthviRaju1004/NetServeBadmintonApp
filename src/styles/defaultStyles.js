import { StyleSheet } from "react-native";

const defaultStyles = StyleSheet.create({
    mainBody: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        alignContent: 'center',
      },
      sectionStyle: {
        flexDirection: 'row',
        height: 40,
        marginTop: 6,
      },
      headerSectionStyle: {
        flexDirection: 'row',
        marginTop: 6,
      },
      labelStyle: {
        flexDirection: 'row',
        marginLeft: 16,
        marginTop: 16,
        fontFamily: 'Bitter-Bold',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 14,
        color: '#001A20'
      },
      headerStyle: {
        marginLeft: 10,
        marginBottom: 20
      },
      header: {
        fontFamily: 'Exo-Medium',
        fontStyle: 'normal',
        fontSize: 32,
        lineHeight: 48,
        letterSpacing: 0.01,
        color: '#001A20'
      },
      subHeader: {
        fontFamily: 'Bitter-Regular',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 20,
        color: '#001A20',
      },
      buttonStyle: {
        backgroundColor: '#00667E',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#00667E',
        height: 40,
        alignItems: 'center',
        borderRadius: 4,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 16,
        paddingRight: 16,
      },
      disabledBtnStyle: {
        backgroundColor: '#00667E',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#00667E',
        height: 40,
        alignItems: 'center',
        borderRadius: 4,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 16,
        paddingRight: 16,
        opacity: 0.5
      },
      signInStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 34,
        justifyContent: 'space-between'
      },
      buttonTextStyle: {
        fontFamily: 'Bitter-Regular',
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 16,
        textAlignVertical: 'center',
        color: '#FFFFFF',
      },
      inputStyle: {
        flex: 1,
        color: '#001A20',
        paddingLeft: 16,
        paddingRight: 16,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 24,
        borderColor: '#001A20',
      },
      errorInputStyle: {
        flex: 1,
        color: '#001A20',
        paddingLeft: 16,
        paddingRight: 16,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 24,
        borderColor: '#AE0000',
      },
      registerTextStyle: {
        fontFamily: 'Bitter-Regular',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 20,
        textDecorationLine: 'underline',
        color: '#00667E'
      },
      errorText: {
        position: 'absolute',
      },
      errorTextStyle: {
        position: 'absolute',
        marginLeft: 12,
        marginBottom: 16,
        color: '#AE0000',
        fontFamily: 'Bitter-Bold',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 12,
        lineHeight: 21
      },
})
export default defaultStyles;