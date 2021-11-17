/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { DataHelper } from '../../../helpers/DataHelper';

export const style = StyleSheet.create({
    modalButton: {
        backgroundColor: 'rgba(0,0,0,0.5)',
      },
      modalButtonContainrer: {
        backgroundColor: '#2B2146',
        color: 'red',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        height: 543,
        width: DataHelper.getWidth(),
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingTop: 33,
      },
      modalInfo: {
        flexDirection: 'row',
        width: 305,
        alignItems: 'center',
        marginLeft: 3,
      },
      textBold: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ECEBED',
      },
      textThin: {
        fontSize: 14,
        fontWeight: '500',
        color: '#C3B8E0',
        marginLeft: 13,
      },
      modalInfoTop: {
        height: 175,
        justifyContent: 'space-between',
        marginBottom: 22,
        paddingLeft: 17,
      },
      modalInfoBottom: {
        height: 260,
        justifyContent: 'space-between',
        paddingLeft: 17,
        marginTop: 20,
      },
      closeModal: {
        marginLeft: 220,
        marginTop: -15,
      },
});
