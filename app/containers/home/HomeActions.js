import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View,Text} from 'react-native';
import { Svg ,Path } from 'react-native-svg';
import navigationService from '../../service/navigationService';
import { logout } from '../../actions/auth';
import styles from './../../helpers/style';
import Slideshow from './../../helpers/slider';
import { scale } from '../../helpers/scale';
import style from './../../helpers/style';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

class HomeActions extends Component {

  signOutAsync = async () => {
    await this.props.logout();
    navigationService.navigate('Auth');
  };

  render() {
    return (
      <React.Fragment>
        <ScrollView>
         <Slideshow 
            dataSource={[
              { url:'./../assets/photo.png' },
              { url:'./../assets/photo.png' },
              { url:'./../assets/photo.png' }
          ]}/>
          <View style={{position: 'absolute',top:scale(250),left:scale(20)}}>
            <Text style={style.nametext}>닉네임000, 28세</Text>
          </View>
        <View style={styles.imageStrip}>
          <Text style={styles.strptext}>0000님에게 좋아요를 보냈습니다.</Text>
        </View>
        <View style={{backgroundColor: '#F6F6F6',margin:scale(20),padding:(15)}}>
          <Text style={styles.paraHeader}>0000님의 메세지 :</Text>
          <Text style={styles.paragraph}> 
            안녕하세요 블라블라 서초구에에서 000법무사를 다니는 000입니다. 퇴근후에는 운동을 즐기는 평범한 직장인입니다. 000님과 이야기를 나눠보고싶어요!
          </Text>
        </View>
        <View style={{marginLeft:scale(20),marginRight:scale(20)}}>
          <View style={{ flexDirection: "row"}}>
            <Text style={[styles.width140,styles.fontsize14]}>서울시 서초구</Text>
            <Text style={styles.fontsize14}>서울대학교</Text>
            <Image style={{width:scale(15),height :scale(15)}} source={require('./../../assets/ic_qualify_sure.png')}/>
          </View>
          <View style={{ flexDirection: "row",paddingVertical:scale(10)}}>
            <Text style={[styles.width140,styles.fontsize14]}>슬림, 174cm</Text>
            <Text style={styles.fontsize14}>대학교연구원</Text>
            <Image style={{width:scale(15),height :scale(15)}} source={require('./../../assets/ic_qualify_sure.png')}/>
          </View>
          <View style={{ flexDirection: "row",paddingVertical:scale(10)}}>
            <Text style={[styles.width140,styles.fontsize14]}>기독교</Text>
            <Text style={styles.fontsize14}>비흡연</Text>
          </View>
          <View style={{ flexDirection: "row",paddingVertical:scale(10)}}>
            <Text style={[styles.width80,styles.fontsize14,{ color:'#BBBBBB'}]}>기독교</Text>
            <Text style={styles.fontsize14}>주 2~3회</Text>
          </View>
          <View style={{ flexDirection: "row",paddingVertical:scale(10)}}>
            <Text style={[styles.width80,styles.fontsize14,{ color:'#BBBBBB'}]}>관심사</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', width:scale(100)}}>
              {['운동','여행','정치','시사경제'].map((obj) => {
                  return (
                      <View style={styles.smallchip}>
                          <Text style={[styles.fontsize14,{textAlign:"center"}]}>{obj}</Text>
                      </View> 
                  );
              })}
            </View>
          </View>
          <View style={{ flexDirection: "row",paddingVertical:scale(10),marginBottom:scale(50)}}>
            <Text style={[styles.width80,styles.fontsize14,{ color:'#BBBBBB'}]}>자기소개</Text>
            <Text style={[styles.fontsize14,{width:scale(150)}]}>안녕하세요,
              자기소개글입니다.
              가나다라마바사. 서울대학교를 졸업
              공무원으로 일하고 있어요 :)
            </Text>
          </View>
        </View>
        </ScrollView>
        
          <View style={styles.coffeeView}>
          <TouchableOpacity onPress={() => this.signOutAsync()}>
            <Image style={{width:scale(65),height :scale(65)}} source={require('./../../assets/btn_send_coffee.png')}/>
            </TouchableOpacity>
          </View> 
       
        <View style={styles.bubbleView}>
         <View style={[styles.item, styles.itemIn]}>
            <View style={[styles.balloon, {backgroundColor: '#F83447'}]}>
              <Text style={{paddingTop: 5, color: 'white'}}>D-3</Text>
              <View
                  style={[
                    styles.arrowContainer,
                    styles.arrowLeftContainer,
                  ]}
                >

              <Svg style={styles.arrowLeft} width={scale(20)} height={scale(20)} viewBox="32.484 17.5 15.515 17.5"  >
              
                    <Path
                      d="M40.484,15.5c0,1.0,1,1.5-4,30.5C50.484,20,60.484,17.5,50.484,17.5z"
                        fill="transparent"
                        stroke="red"
                        x="0"
                        y="0"
                    />
                </Svg>
            </View>
            </View>
          </View>
        </View>
        <View style={[styles.footerView,{backgroundColor: '#FFF0C2'}]}>
        <View style={[styles.item, styles.itemIn]}>
        <View style={[styles.balloon1]}>
          <Text style={[styles.fontsize14,{color: '#D89533'}]}>골드커피로 한번 더 관심을 표현해 보세요 :)</Text>
          <View
          style={[
            styles.arrowContainer,
            styles.arrowCenterContainer,
          ]}
        >

           <Svg style={styles.arrowCenter} width={scale(15)} height={scale(30)} viewBox="32.484 17.5 15.515 17.5"  enable-background="new 32.485 17.5 15.515 17.5">
                <Path
                   d="M39.484,65.5c0,1,1,1.5-1,9.5C50.484,67,90.484,90.5,50.484,17.5z" 
                    fill="#FFF0C2"
                    x="0"
                    y="0"
                />
            </Svg>
        </View>
        </View>
      </View>
          
        </View>
        
      </React.Fragment>
    );
  }

}



HomeActions.propTypes = {};

function mapStateToProps() {
  return { };
}

export default connect(mapStateToProps, { logout })(HomeActions);
