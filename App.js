/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import {
   SafeAreaView,
   StatusBar,
 } from 'react-native';
import HomeScreen from './src/screens/Home/Index.js';
import Post from './src/components/Post/index.js';
 
import feed from './assets/data/feed'
 
const post1 = feed[0];
  
 const App: () => Node = () => {
 
   return (
     <SafeAreaView >
       <StatusBar barStyle='dark-content'/>
          <SafeAreaView>
         {/*<HomeScreen />*/}
         <Post post={post1} />
          </SafeAreaView>
     </SafeAreaView>
   );
 };
 
 export default App;
 