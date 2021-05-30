import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    Button
} from 'react-native';
import {globalStyles} from '../pages/global';

export default class ManageUsers extends React.Component {

    render() {
        return (
              <view>
                <TextInput style = {globalStyles.inputBorder}
                underlineColorAndroid = "transparent" placeholder='Email' />
                <TextInput style = {globalStyles.inputBorder}
                underlineColorAndroid = "transparent"placeholder='Role' />
                <Button 
                          onPress={this.props.onLoginPress}
                          title="Add User"
                      />
                </view>
            )
    }
}