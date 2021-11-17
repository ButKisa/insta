import {Search} from './Search';
import {connect} from 'react-redux';
import React from 'react';
import {searchFriends} from '../../store/actions/searchFriendsActions';

const mapStateToProps = state => ({
    friends: state.friends,
});

const mapDispatchToProps = dispatch => {
  return {
    searchFriends: payload => dispatch(searchFriends(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
