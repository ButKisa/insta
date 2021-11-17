/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Line = () => {
  return (
    <View style={styles.lineBox}>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  lineBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    borderBottomColor: '#3B2D5F',
    borderBottomWidth: 1,
    width: '92%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
