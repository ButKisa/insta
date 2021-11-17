
import {DrawerContent} from './DrawerContent';
import {connect} from 'react-redux';
import React from 'react';
import {getInfoPerson} from '../../store/actions/getInfoPersonActions';

const mapStateToProps = state => ({
  person: state.person,
});

const mapDispatchToProps = dispatch => {
  return {
    getInfoPerson: payload => dispatch(getInfoPerson(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);
