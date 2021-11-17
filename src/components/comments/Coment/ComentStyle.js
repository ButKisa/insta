/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';


export const style = StyleSheet.create({
    settingsText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
        marginLeft: 11,
    },
    settingsTextCenter: {
        alignItems: 'center',
        width: '100%',
        marginLeft: -35,
    },
    settingsTextExit: {
        color: '#8672BB',
        fontWeight: '700',
        fontSize: 16,
        marginLeft: 11,
    },
    settingsBlock: {
        height: '100%',
        width: '100%',
        backgroundColor: '#2B2146',
    },
    settingsHeader: {
        flexDirection:'row',
        alignItems: 'center',
        marginLeft: 19,
        marginTop: 20,
        marginBottom: 20,
    },
    block: {
        backgroundColor: '#2B2146',
    },
    person: {
        flexDirection: 'row',
        marginTop: 6,
        marginBottom: 6,
        alignItems: 'center',
        marginLeft: 16,
    },
    avatar: {
        height: 43,
        width: 43,
        borderRadius: 100,
    },
    textBlock: {
        marginLeft: 10,
        marginRight: 10,
    },
    textBlockName: {
        fontSize: 14,
        color: 'white',
        fontWeight: '700',
     },
    textBlockInfo: {
      fontSize: 12,
      color: '#8672BB',
      fontWeight: '500',
      marginRight: 15,
     },
    comments: {
        marginLeft:17,
        flexDirection: 'row',
        marginTop:17,
    },
    answer: {
        flexDirection: 'row',
        marginTop: 6,

    },
    textBlockComments: {
        fontSize: 14,
        color: 'white',
        fontWeight: '700',
        marginBottom: 17,
        marginLeft: 17,
     },
     textBlockComment: {
        fontSize: 12,
        color: '#C3B8E0',
        fontWeight: '500',
     },
     textBlockData: {
        fontSize: 10,
        color: '#8672BB',
        fontWeight: '500',
        marginRight: 15,
     },
     textBlockAnswer: {
        fontSize: 10,
        color: 'white',
        fontWeight: '500',
     },
     textBlockLike: {
        fontSize: 12,
        color: 'white',
        fontWeight: '500',
     },
    blockLike: {
        flexDirection: 'row',
        marginLeft: 245,
        position:'absolute',
        width: 30,
        marginTop: 17,
    },
    icon: {
        marginRight: 7,
    },
    ra: {
        width: 250,
    },
});
