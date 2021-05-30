import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
      containerFlexCenter: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily:'signika',
        padding: 15,
      },
      greyBG: {
        backgroundColor: '#F2F2F2'
      },
      containerFlexStart: {
        flex: 1,
        justifyContent:'flex-start',
        //alignItems:'flex-start',
        backgroundColor: '#ffffff',
        fontFamily:'signika',
        padding: 15,
        color:"#000000"
      },
      containerFlexStartNoPad: {
        flex: 1,
        justifyContent:'flex-start',
        //alignItems:'flex-start',
        backgroundColor: '#ffffff',
        fontFamily:'signika',
        color:"#000000"
      },
      containerFlexEnd: {
        flex: 1,
        justifyContent:'flex-end',
        backgroundColor: '#ffffff',
        fontFamily:'signika',
        padding: 15,
        color:"#000000"
      },
      FlexRow:{
        flexDirection: 'row',
        padding: 15,
        //flex: 1,
      },
      FlexRowCenter:{
        flexDirection: 'row',
        padding: 15,
        justifyContent:'center',
        flex: 1
      },
      FlexRowNoPad:{
        flexDirection: 'row',
        flex: 1
      },
      FlexRowBottomBorder:{
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: '#f5f5f5'
      },
      FlexRowBorder:{
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderColor: '#f5f5f5'
      },
      FlexRowBottomBorderStretch:{
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: '#f5f5f5',
        padding: 15
      },
      FlexRowWhite:{
        flexDirection: 'row',
        padding: 15,
        margin: 15,
        backgroundColor:'#FFFFFF'
      },
      FlexRowStart:{
        flexDirection: 'row',
        padding: 15,
        justifyContent:'flex-start',
        flex: 1
      },
      FlexRowStartNoPad:{
        flexDirection: 'row',
        padding: 5,
        justifyContent:'flex-start',
        flex: 1
      },
      FlexRowEnd:{
        flexDirection: 'row',
        padding: 15,
        justifyContent:'flex-end',
        //flex: 1
      },
      FlexRowStretch:{
        flexDirection: 'row',
        padding: 15,
        alignItems:'stretch',
        flex: 1,
      },
      Flex:{
        flex: 1
      },
      AlignStart:{
        justifyContent:'flex-start',
        flex: 1,
        flexDirection: 'row',
      },
      RightBorder:{
        borderRightWidth: 1
      },
      AlignEnd:{
        justifyContent:'flex-end',
        flex: 1,
        flexDirection: 'row',
      },
      AlignStretch:{
        alignItems: 'stretch',
      },
      title: {
        fontFamily: 'signika',
        fontSize: 40,
        fontWeight: 'bold'
      },
      title2: {
        fontFamily: 'signika',
        fontSize: 26,
        fontWeight: 'bold'
      },
      title2White: {
        fontFamily: 'signika',
        fontSize: 24,
        fontWeight: 'bold',
        color:'#FFFFFF'
      },
      title3: {
        fontFamily: 'signika',
        fontSize: 16,
        color:'#666666',
        fontWeight: 'bold'
      },
      title3Black: {
        fontFamily: 'signika',
        fontSize: 14.5,
        color:'#000000',
        fontWeight: 'bold'
      },
      title3White: {
        fontFamily: 'signika',
        fontSize: 14.5,
        color:'#FFFFFF',
        fontWeight: 'bold'
      },
      text: {
        fontFamily: 'signika',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
      },
      textGrey: {
        fontFamily: 'signika',
        fontSize: 18,
        color: '#333333',
      },
      textWhite: {
        fontFamily: 'signika',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
      },
      textsmall: {
        fontFamily: 'signika',
        fontSize: 14,
        color: '#333333',
      },
      textsmallWhite: {
        fontFamily: 'signika',
        fontSize: 14,
        color: '#FFFFFF',
      },
      textsmallP: {
        fontFamily: 'signika',
        fontSize: 14,
        color: '#000000',
        textAlign:'justify'
      },
      textsmallPWhite: {
        fontFamily: 'signika',
        fontSize: 14,
        color: '#FFFFFF',
        textAlign:'justify'
      },
      selectedText:{
        fontFamily: 'signika',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
      },
      input: {
          textAlign: "center",
          height: 40,
          width: 70,
          color: '#666666',
          backgroundColor: '#F2F2F2',
          fontFamily:'signika',
      },
      inputBorder: {
        textAlign: "center",
        height: 40,
        width: 200,
        borderWidth: 1,
        borderRadius: 5,
        fontFamily:'signika',
        backgroundColor: '#FFFFFF',
        margin: 10,
        padding: 10
      },
      inputBorder45: {
        textAlign: "center",
        height: 45,
        width: 200,
        borderWidth: 1,
        borderRadius: 5,
        fontFamily:'signika',
        backgroundColor: '#FFFFFF',
        margin: 10,
        padding: 10
      },
      inputTextArea: {
        padding: 10,
        textAlign: "center",
        height: 100,
        backgroundColor: '#F2F2F2',
        fontFamily:'signika',
        width: '100%'
      },
      inputTextAreaFullWidth: {
        padding: 10,
        textAlign: "center",
        height: 100,
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 5,
        fontFamily:'signika',
        backgroundColor: '#FFFFFF'
      },
      input15: {
        margin: 15,
        textAlign: "center",
        height: 40,
        width: 200,
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 5,
        fontFamily:'signika',
        backgroundColor: '#FFFFFF'
      },
      inputSelect: {
        textAlign: "center",
        height: 60,
        width: '100%',
        fontFamily:'signika',
        backgroundColor: '#FFFFFF',
      },
      inputSelectNoMarg: {
        textAlign: "center",
        height: 40,
        width: 200,
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 5,
        fontFamily:'signika',
        backgroundColor: '#FFFFFF',
        margin: 10,
        padding: 10
      },
      inputSelectNoMarg45: {
        textAlign: "center",
        height: 45,
        width: 200,
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 5,
        fontFamily:'signika',
        backgroundColor: '#FFFFFF',
        margin: 10,
        padding: 10
      },
      inputFullWidth: {
        marginBottom: 15,
        textAlign: "center",
        height: 40,
        width: '100%',
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 5,
        fontFamily:'signika',
        backgroundColor: '#FFFFFF'
      },
      inputFullWidthBlue: {
        //marginBottom: 15,
        textAlign: "center",
        height: 40,
        width: '100%',
        borderWidth: 0,
        borderRadius: 5,
        fontFamily:'signika',
        backgroundColor: '#88C4F4',
        color: '#FFFFFF',
      },
      inputFullWidthShadow: {
        marginBottom: 15,
        textAlign: "center",
        maxHeight: 40,
        color: '#666666',
        fontFamily:'signika',
        backgroundColor: '#F2F2F2',
        padding:10,
        width: '100%'
      },
      submitButton: {
          backgroundColor: '#2C7AEC',
          padding: 10,
          margin: 15,
          height: 40,
          width:200,
          textAlign: "center",
          borderRadius: 10,
      },
      submitButtonFullWidth: {
        backgroundColor: '#2C7AEC',
        padding: 10,
        margin: 15,
        height: 40,
        textAlign: "center",
        borderRadius: 10,
        flex: 1
      },
      submitButtonSmall: {
        backgroundColor: '#2C7AEC',
        padding: 10,
        margin: 15,
        height: 40,
        width:100,
        textAlign: "center",
        borderRadius: 10,
      },
      submitButtonNoMarg: {
        backgroundColor: '#2C7AEC',
        padding: 10,
        margin: 10,
        height: 40,
        //maxWidth: 100,
        textAlign: "center",
        borderRadius: 10,
        fontWeight: 'bold',
      },
      submitButtonSmallNoMarg: {
        backgroundColor: '#2C7AEC',
        padding: 10,
        //margin: 15,
        height: 40,
        width:100,
        textAlign: "center",
        borderRadius: 10,
      },
      submitButton1: {
        backgroundColor: '#2C7AEC',
        padding: 10,
        margin: 10,
        height: 40,
        maxWidth: 100,
        textAlign: "center",
        borderRadius: 10,
      },
      highlightButton: {
        backgroundColor: '#FEC91B',
        padding: 10,
        margin: 15,
        height: 40,
        width: 100,
        textAlign: "center",
        borderRadius: 10,
        color:"#000000"
      },
      highlightButtonFullWidth: {
        backgroundColor: '#FEC91B',
        padding: 10,
        margin: 15,
        height: 40,
        //width: 100,
        textAlign: "center",
        borderRadius: 10,
        flex: 1
      },
      deleteButton: {
        backgroundColor: '#F80300',
        padding: 10,
        margin: 15,
        height: 40,
        width: 100,
        textAlign: "center",
        borderRadius: 10,
        fontWeight: 'bold',
      },
      deleteButtonNoMarg: {
        backgroundColor: '#F80300',
        padding: 10,
        margin: 10,
        height: 40,
        //maxWidth: 100,
        textAlign: "center",
        borderRadius: 10,
        fontWeight: 'bold',
      },
      darkButton: {
        backgroundColor: '#131D32',
        color:'#FFFFFF',
        padding: 10,
        margin: 15,
        height: 40,
        //maxWidth: 100,
        textAlign: "center",
        borderRadius: 10,
        fontWeight: 'bold',
      },
      greyButton: {
        backgroundColor: '#F2F2F2',
        padding: 10,
        margin: 10,
        height: 40,
        //maxWidth: 100,
        textAlign: "center",
        borderRadius: 10,
        fontWeight: 'bold',
      },
      greyButtonNoMarg: {
        backgroundColor: '#F2F2F2',
        padding: 10,
        height: 40,
        //maxWidth: 100,
        textAlign: "center",
        borderRadius: 10,
        fontWeight: 'bold',
        marginHorizontal: 5
      },
      darkButtonNoMarg: {
        backgroundColor: '#131D32',
        padding: 10,
        //margin: 15,
        height: 40,
        width: 70,
        textAlign: "center",
        borderRadius: 10,
        fontWeight: 'bold',
        fontSize: 16
      },
      darkButtonFullWidth: {
        backgroundColor: '#131D32',
        padding: 10,
        margin: 15,
        height: 40,
        textAlign: "center",
        borderRadius: 10,
        fontWeight: 'bold',
      },
      submitButtonText:{
          color: '#FFFFFF',
          textAlign: "center",
          fontFamily:'signika',
          fontWeight: 'bold',
      },
      link: {
        color: '#0064AF',
        textAlign: "center",
        fontSize: 15,
      },
      textStart:{
        fontSize: 20,
        textAlign: 'left',
        fontWeight: 'bold',
        fontFamily:'signika',
      },
      textCenter:{
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily:'signika',
      },
      blueBack:{
        backgroundColor: 'rgba(80, 170, 252, 0.13)'
      },
      whiteBack:{
        backgroundColor:'#FFFFFF'
      },
      plainContainer:{
        width: 300,
        padding: 10,
        backgroundColor:'#FFFFFF',
        borderBottomWidth: 1
      },
      selectedPlainContainer:{
        width: 300,
        padding: 10,
        backgroundColor:'#0064AF'
      },
      m15:{
        margin: 15
      },
      inputLabel:{
        fontSize: 15,
        fontFamily:'signika'
      },
      tag:{
        height: 20,
        //maxWidth:100,
        fontSize: 10,
        fontFamily:'signika',
        fontWeight: 'bold',
        borderRadius: 20,
        paddingHorizontal: 10,
        marginHorizontal: 3,
        backgroundColor:'#FFFFFF'
      },
      card:{
        flexDirection: 'row',
        padding: 15,
        flex: 1,
        fontSize: 20,
        fontFamily:'signika',
        margin: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        shadowColor:'#333333',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
      },
      cardCenter:{
        flexDirection: 'row',
        alignItems:'center',
        padding: 15,
        flex: 1,
        fontSize: 20,
        fontFamily:'signika',
        margin: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        shadowColor:'#333333',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
      },
      cardColumn:{
        //padding: 15,
        flex: 1,
        fontSize: 20,
        fontFamily:'signika',
        margin: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        //shadowColor:'#333333',
        //shadowOpacity: 0.5,
        //shadowRadius: 5,
      //elevation: 5,
        minWidth: 300,
        minHeight: 400
      },
      cardColumnGreen:{
        //padding: 15,
        flex: 1,
        fontSize: 20,
        fontFamily:'signika',
        margin: 10,
        backgroundColor: '#76C6A7',
        borderRadius: 20,
        shadowColor:'#333333',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        minWidth: 300,
        minHeight: 400
      },
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
})