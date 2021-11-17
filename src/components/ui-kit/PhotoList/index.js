import {PhotoList} from './PhotoList';
import {connect} from 'react-redux';
import React from 'react';
import {getPhotoUser} from '../../../store/actions/getPhotoUserActions';

const mapStateToProps = state => ({
  photo: state.photo,
});

const mapDispatchToProps = dispatch => {
  return {
    getPhotoUser: payload => dispatch(getPhotoUser(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoList);