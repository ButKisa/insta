/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';


export const style = StyleSheet.create({
    menuContainer: {
        height: 160,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,

      },
      menuContainerTop: {
        backgroundColor: '#2B2146',
        height: 100,
      },
      menuContainerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        width: '100%',
      },
      menuContainerButtonCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
      },
      menuContainerBottomButton: {
        marginTop: 10,
        backgroundColor: '#2B2146',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
      },
      textBold: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ECEBED',
      },
      menuButtonOne: {
        marginLeft: 15,
        alignItems: 'center',
      },
      textThin: {
        color: 'white',
        fontSize: 16,
        marginLeft: 12,
      },
      modalButton: {
        backgroundColor: 'rgba(0,0,0,0.5)',
      },
});
