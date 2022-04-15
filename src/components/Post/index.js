import React from 'react';
import { Text, View,Image } from 'react-native';
import styles from './styles';


const Post = () => {
    return (
        <View>
            <Image
                style={styles.image}
                source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/2.jpg' }}
            />        
            <Text style={styles.bedrooms}>
               1 bed 1 bedroom
            </Text>
            <Text style={styles.description } numberOfLines={2}>
            "NEW lux. apartment in the center of Santa Cruz",
            description: "NEW lux. apartment in the center of Santa Cruz Lorem Ipsum is simplyLorem Ipsum is simply dummy text",
            </Text>
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>$300</Text>
                <Text style={styles.newPrice}> $350 </Text>
                    /Day
            </Text>

            <Text style={styles.totalPrice}>$600</Text>
       </View>
    );
}

export default Post;
