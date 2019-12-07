import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input } from 'react-native-elements';
import styles from './../../helpers/style'
import {  View, 
  Text, 
  Image, 
  TouchableOpacity } from 'react-native';
import { clearLoginErrorMessage, login } from '../../actions/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { scale, verticalScale } from '../../helpers/scale';

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  };

  componentWillReceiveProps(nextProps): void {
    const { errorMessage } = this.props;
    if (nextProps.errorMessage !== errorMessage && nextProps.errorMessage !== '') {
      Alert.alert(
        nextProps.errorMessage,
        '',
        [{ text: 'OK', onPress: () => this.props.clearLoginErrorMessage() }],
      );
    }
  }

  signInAsync = async () => {
    const { password, username } = this.state;
    await this.props.login(username, password);
  };

  render() {
    const { username, password } = this.state;

    return (
      <React.Fragment>
          <View>
          <View style={{height:scale(100)}}/>
            <View style={styles.logoContiner}>
              <Image style={styles.logo} 
                source={require('./../../assets/logo_splash2x.png')} />
            </View>
            <View style={{height:verticalScale(70)}}/>
            <View style={styles.container}>
                <Input
                  containerStyle={styles.emailContainer}
                  autoCapitalize="none"
                  placeholder="이메일주소"
                  leftIconContainerStyle ={{ paddingHorizontal:0,marginLeft:scale(0)}}
                  inputStyle={{fontStyle: 'normal', fontSize: scale(18), paddingHorizontal:scale(10)}}
                  leftIcon={
                    <Icon
                      name='email-outline'
                      size={scale(18)}
                      color='gray'
                    />}
                  onChangeText={usr => this.setState({ username: usr })}
                  value={username}
                />
                <View style={{height:scale(10)}}/>
                <Input
                  containerStyle={styles.emailContainer}
                  autoCapitalize="none"
                  placeholder="비밀번호"
                  leftIconContainerStyle ={{ paddingHorizontal:0,marginLeft:scale(0)}}
                  inputStyle={{fontStyle: 'normal',fontSize: scale(18), paddingHorizontal:scale(10)}}
                  leftIcon={
                    <Icon
                      name='lock-outline'
                      size={scale(18)}
                      color='gray'
                    />}
                  onChangeText={pass => this.setState({ password: pass })}
                  value={username}
                />
                <TouchableOpacity onPress={this.signInAsync}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>로그인하기</Text>
                  </View>
                </TouchableOpacity>
            </View>
            <View style={{marginHorizontal:scale(37),
                      marginVertical:scale(190),
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                  <View >
                      <Text style={{fontWeight: '500', fontSize: 15,lineHeight:18,color:'#666666'}}>ID/PW 찾기  </Text>
                  </View>
                  
                  <View style={{ flexDirection: 'row'}}>
                    <Text style={{fontWeight: '500', fontSize: 15,lineHeight:18,color:'#666666'}}>English</Text>
                    <Icon style={{marginTop: scale(-2)}} name='chevron-down'size={scale(18)}color='gray'/>
                  </View>
            </View>
        </View>
      </React.Fragment>
    );
  }
}

LoginForm.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  loggingIn: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    loggingIn: state.auth.loggingIn,
    errorMessage: state.auth.errorMessage,
  };
}

export default connect(mapStateToProps, {
  login,
  clearLoginErrorMessage,
})(LoginForm);

