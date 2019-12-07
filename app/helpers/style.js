import {scale,verticalScale} from './scale';
import { StyleSheet, Platform , Dimensions} from 'react-native';

export default StyleSheet.create({
    container: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flex:1,
      paddingTop:scale(50)
    },
    logo: {
      width:scale(250),
      height:scale(150),
      resizeMode:'contain',
    },
    forgotPassword: {
      flexDirection: 'column',
      justifyContent: 'flex-end',
      height:scale(30),
      alignItems: 'flex-end',
    },
    createAccount: {
      height:scale(30),
    },
    normalContainer: {
      height:scale(20),
    },
    normalText: {
      color:'#5B5A5A',
      fontSize:12,
      alignItems: 'center',
      textAlign:'center',
      width:scale(330),
    },
    createText: {
      color:'#FF7260',
      fontSize:12,
      alignItems: 'center',
      textAlign:'center',
      width:scale(330),
    },
    forgotText: {
      color:'#5B5A5A',
      fontSize:12,
      alignItems: 'flex-end',
      textAlign:'right',
      width:scale(330),
    },
    logoContiner: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
      fontSize:scale(25),
      color:'#5B5A5A',
      letterSpacing:6
    },
    textInput: {
      color:'#989899',
      flex:1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize:14,
    },
    button: {
      width:scale(300),
      borderColor: '#30363B',
      borderWidth: 1,
      height:scale(50),
      padding:scale(10),
      marginTop:scale(20),
      backgroundColor:'#30363B',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color:'white',
      fontSize:16
    },
    emailContainer: {
      width:scale(300),
      borderColor: '#CFD0D1',
      alignItems:'flex-start',
      borderWidth: 1,
      height:scale(40),
      borderRadius:4,
      backgroundColor:'#F5F6F7'
    },
    sepretor:{
        height:10
    },
    policyTextContainerV2: {
		flexDirection: 'row',
		// flexWrap: 'wrap',
		marginVertical: verticalScale(32),
		alignItems: 'center',
	},
    passwordContainer: {
      width:325,
      borderColor: '#CFD0D1',
      borderWidth: 1,
      height:50,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      borderBottomLeftRadius:4,
      borderBottomRightRadius:4,
      backgroundColor:'#F5F6F7'
      
    },
    paginationBoxStyle: {
      position: 'absolute',
      bottom: 0,
      padding: 0,
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      paddingVertical: 10
    },
    dotStyle: {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginHorizontal: 0,
      padding: 0,
      margin: 0,
      backgroundColor: 'rgba(128, 128, 128, 0.92)'
    },
    headerRight:{
      flexDirection: "row",
      justifyContent: "space-evenly", 
      marginRight:scale(10)
    },
    paragraph:{
      color:'gray',
      fontSize:scale(14),
      fontFamily: 'OpenSans-Regular',
      fontWeight: '600'
    },
    paraHeader:{
      color:'black',
      fontSize:scale(14),
      fontFamily: 'OpenSans-Regular',
      fontWeight: '600'
    },
    imageStrip:{
      position: 'absolute',top:scale(275),backgroundColor: 'rgba(0,0,0,0.5)',height:scale(20),width:'100%'
    },
    strptext:{
      textAlign:"center", color:'#FFFFFF',fontFamily: 'OpenSans-Regular',fontSize:scale(14)
    },
    nametext:{
      textAlign:"center", color:'#FFFFFF',fontFamily: 'OpenSans-Regular',fontSize:scale(16),fontWeight:'500'
    },
    width140:{
      width:scale(140)
    },
    width80:{
      width:scale(80)
    },
    fontsize14:{
      fontSize:scale(14),
      fontWeight:'600',
      fontFamily: 'OpenSans-Regular'
    },
    smallchip:{
      flexDirection: 'row', justifyContent:'center',alignItems:'center', marginRight: scale(15),marginTop: scale(10),width:scale(35),backgroundColor: '#F6F6F6' 
    },
    coffeeView:{
      position: 'absolute',
      bottom:scale(50),
      width:'100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    bubbleView:{
      position: 'absolute',
      bottom:scale(90),
      left:scale(30),
      width:'100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    footerView:{
      position: 'absolute',
      bottom:scale(0),
      width:'100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    item: {
      marginVertical: scale(7),
      flexDirection: 'row'
   },
   itemIn: {
       marginLeft: scale(20)
   },
   itemOut: {
      alignSelf: 'flex-end',
      marginRight: scale(20)
   },
   balloon: {
      maxWidth: scale(250),
      paddingHorizontal: scale(10),
      paddingTop: scale(2),
      paddingBottom: scale(2),
      borderRadius: scale(20),
   },
   balloon1: {
      paddingTop: scale(2),
      justifyContent: 'center',
      alignItems: 'center',
  },
   arrowContainer: {
       position: 'absolute',
       top: 0,
       left: 0,
       right: 0,
       bottom: 0,
       zIndex: -1,
       flex: 1
   },
   arrowLeftContainer: {
       justifyContent: 'flex-end',
       alignItems: 'flex-start'
   },
   arrowCenterContainer: {
    justifyContent: 'center',
    alignItems: 'center'
},

   arrowRightContainer: {
       justifyContent: 'flex-end',
       alignItems: 'flex-end',
   },

   arrowLeft: {
       left: scale(-5),
   },
   arrowCenter: {
    bottom: scale(20),
    right:scale(15)
    },

   arrowRight: {
       right:scale(-6),
   }
  });