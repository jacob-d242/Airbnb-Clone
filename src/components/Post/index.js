import React from 'react';
import { Text, View,Image } from 'react-native';
import styles from './styles';


const Post = (props) => {
    
    const post = props.post;

    return (
        <View>
            <Image
                style={styles.image}
                source={{ uri:post.image }}
            />        
            <Text style={styles.bedrooms}>
               {post.bed} bed {post.bedroom} bedroom
            </Text>
            <Text style={styles.description } numberOfLines={2}>
            {post.type} {post.title}
            </Text>
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>$ {post.oldPrice}</Text>
                <Text style={styles.newPrice}> $ {post.newPrice} </Text>
                    /Day
            </Text>

            <Text style={styles.totalPrice}>$ {post.totalPrice}</Text>
       </View>
    );
}

export default Post;
