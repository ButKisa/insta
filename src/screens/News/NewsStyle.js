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
    marginTop: 20,
    marginBottom: 17,
    alignItems: 'center',
  },
  newsHeaderRight: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 60,
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
    marginBottom: 17,
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
   },
   postLikeLeft: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
});
