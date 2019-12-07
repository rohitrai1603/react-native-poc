import React from 'react';
import {Image,View} from 'react-native'
import PropTypes from 'prop-types';
import ScreenContainer from '../ScreenContainer';
import HomeActions from '../containers/home/HomeActions';
import { Icon } from "react-native-elements";
import { scale } from '../helpers/scale';
import style from '../helpers/style';
import { TouchableOpacity } from 'react-native-gesture-handler';
const HomeScreen= (props) => {

  return (
      <ScreenContainer>
        <HomeActions />
      </ScreenContainer>
  )

  }
HomeScreen.navigationOptions = ({ navigation }) =>{
  return {
  title: '프로필 상세',
  headerLeft: (
    <TouchableOpacity>
    <Image
        style ={{marginLeft:scale(10)}}
        width= {scale(17)}
        height= {scale(17)}
        source={require('./../assets/btn_close.png')}
      />
    </TouchableOpacity>
  ),
  headerRight: (
    <View style={style.headerRight}>
      <Image
          style ={{marginLeft:scale(10)}}
          width= {scale(17)}
          height= {scale(17)}
          source={require('./../assets/btn_share.png')}
        />
      <Image
          style ={{marginLeft:scale(10)}}
          width= {scale(17)}
          height= {scale(17)}
          source={require('./../assets/btn_report.png')}
        />
    </View>
  ),
  }
};

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default HomeScreen;
