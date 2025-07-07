import { View, Text, StyleSheet, TextInputProps, Touchable } from 'react-native'
import React from 'react'
import { Pressable, TextInput } from 'react-native-gesture-handler'
import colors from '../../consts/colors'

interface props extends TextInputProps{
    placeholder?:string
}

const Input = ({value,onChangeText,placeholder = ''}:props) => {
    

    return (
      <View style={styles.container}>
            <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            style={styles.input}
            ></TextInput>
            {/* <Pressable style={styles.searchButton} onPress={() => console.log('34')}>
                
            </Pressable> */}
      </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        height:60,
        position:'relative',
        justifyContent:'center',
    },
    input:{
        backgroundColor:'#ffffff',
        borderRadius:20,
        borderWidth:1,
        borderColor:colors.borderGray,
        

        paddingHorizontal:16,
        flex:1,
    },
    searchButton:{
        backgroundColor:colors.textPrimary,
        width:32,
        height:32,
        position:'absolute',
        right:10,
        borderRadius:100,
    }
})
export default Input