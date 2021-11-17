/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  blockNews: {
    height: '100%',
    backgroundColor: '#2B2146',
  },
  newsHeader: {
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 17,
    alignItems: 'center',
  },
  newsHeaderRight: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 60,
  },
  lentaScroll: {
    marginLeft: 20,
    marginRight: 20,
    height: '100%',
  },
  avatar: {
    borderRadius: 102,
    width: 32,
    height: 32,
    marginRight: 8,
  },
  postHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
    marginRight: 16,
  },
  textName: {
      fontSize: 14,
      color: 'white',
      fontWeight: '700',
   },
   textTime: {
    fontSize: 12,
    color: '#8672BB',
    fontWeight: '500',
   },
   postLike: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 20,
   },
   postLikeLeft: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
   },
   postLikeLeftItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 23,
   },
   postLikeIndent: {
      marginRight: 11,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
   },
   postInfo: {
       marginBottom: 20,
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius: 16,
   },
   textLike: {
    fontSize: 14,
    color: 'white',
    fontWeight: '600',
    marginLeft: 11,

  },
  post: {
    marginBottom: 24,
  },
  iconLike: {

  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margin:3,
    color: 'black',
  },
  dot: {
    margin:3,
    color: 'white',
  },
  postLikeLeftItemFlag: {
    marginTop: 10,
  },
  postphoto: {
    borderRadius: 16,
    height: 180,
  },
});
