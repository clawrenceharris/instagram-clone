import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const Button = (props) => {
    const activeColor = props.color || Colors.primary
    const inactiveColor = props.color === Colors.primary || !props.color ? '#78C8F9' : '#00000010'
    const styles = {
        container: {
            width: '100%',
            padding: 10,
            height: 50,
            backgroundColor: !props.disabled ? activeColor : inactiveColor,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center'
        }

    }

    return (
        <TouchableWithoutFeedback
            onPress={!props.disabled ? props.onPress : () => { }}>

            <View style={{ ...styles.container, ...props.style }}>
                <Text style={{ color: Colors.white, fontWeight: '600', fontSize: 16 }}>{props.title}</Text>

            </View>
        </TouchableWithoutFeedback>
    )
}

export default Button