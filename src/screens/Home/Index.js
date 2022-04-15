
import React from "react";
import styles from "./styles"

import Fontisto from 'react-native-vector-icons/Fontisto';

import { View, Text, ImageBackground, Pressable } from 'react-native';
const HomeScreen = (props) => {
    return (
        <View>


            
            <ImageBackground
                // @ts-ignore
                source={require('../../../assets/images/wallpaper.jpg') }
                style={styles.image}
               
            ><Pressable style={styles.searchButton} onPress={() => console.warn('Search')}>
            <Fontisto name='search' size={25} color={"#f15454"} />
                    <Text style={styles.searchButtonText}>
                        Where are you Going?
                        </Text>
                </Pressable>
                <Text style={styles.tittle}>
                    Go Near
                </Text>
                <Pressable style={styles.button} onPress={()=> console.warn('Press')}>
                    <Text style={styles.buttonText}>
                        Explore Nearby Places
                        </Text>
                </Pressable>
          </ImageBackground>
        </View>
    );
};
export default HomeScreen;