 import { Dimensions, StyleSheet } from 'react-native';

 const styles = StyleSheet.create({
     image: {
         width: '100%',
         height:500,
         resizeMode: 'cover',
         zIndex: 1,
         justifyContent: 'center',
     },
     tittle: {
         fontSize: 80,
         fontWeight: 'bold',
         color: 'white',
         width: '70%',
         marginLeft:25,
     },
     button :{
         backgroundColor: '#fff',
         width: 200,
         height: 40,
         marginLeft: 25,
         marginTop: 25,
         borderRadius: 10,
         justifyContent: 'center',
         alignItems: 'center',
     },
     buttonText :{
         fontSize: 16,
         fontWeight: 'bold'
     },
     searchButton: {
        backgroundColor: '#fff',
        width: Dimensions.get('screen').width -20,
         height: 46,
         borderRadius: 23,
        marginHorizontal:10,
        flexDirection: 'row',
        justifyContent: 'center',
         alignItems: 'center',
        top: 20,
        position: 'absolute',
        zIndex:100,
         
     },
     searchButtonText: {
        fontSize: 16,
         fontWeight: 'bold' 
     },
 });

 export default styles;