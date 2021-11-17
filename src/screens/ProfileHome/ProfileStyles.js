import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  profileContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 102,
    width: 95,
    height: 95,
    marginBottom: 5,
  },
  profileColor: {
    backgroundColor: '#2B2146',
  },
  profileMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 15,
  },
  nameInfo: {
    alignItems: 'center',
  },
  infoBox: {
    alignItems: 'center',
  },
  textInfoTop: {
    fontSize: 14,
    fontWeight: '500',
    color: '#8672BB',
    marginTop: 29,
  },
  textInfoBottom: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
    marginTop: 8,
    marginBottom: 24,
  },
  dopInfo: {
    flexDirection: 'row',
    width: 327,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginBottom: 24,
  },
  textBoldDop: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ECEBED',
  },
  textInfoDop: {
    fontSize: 14,
    fontWeight: '500',
    color: '#8672BB',
  },
  infoPhoto: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 8,
    alignItems: 'center',
  },
  textPhoto: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#FFFFFF',
  },
  textPhotoNumber: {
    fontSize: 14,
    fontWeight: '500',
    color: '#8672BB',
    marginTop: 3,
  },
  textBold: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ECEBED',
    marginBottom: 5,
  },
  textThin: {
    fontSize: 14,
    fontWeight: '500',
    color: '#C3B8E0',
  },
  pointsTop: {
    marginTop: 3,
  },
});
