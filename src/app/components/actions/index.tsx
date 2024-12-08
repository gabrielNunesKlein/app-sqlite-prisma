import React, { useState } from 'react'
import { Pressable, Text, View, StyleSheet } from 'react-native'

interface Props {
    filter: boolean;
    setFilter: (status: boolean) => void;
}

export default function Actions({ filter, setFilter }: Props) {
    const [status, setStatus] = useState(filter)
    function handleAction(item: boolean){
        setStatus(item)
        setFilter(item)
    }
  return (
    <View style={styles.buttons}>
        <Pressable 
        style={[styles.button, !status && { backgroundColor: '#22c55e'}]} 
        onPress={() => handleAction(false)}>
            <Text style={styles.buttonText}>
                ABERTAS
            </Text>
        </Pressable>

        <Pressable 
        style={[styles.button, status && { backgroundColor: '#22c55e'}]}
        onPress={() => handleAction(true)}>
            <Text style={styles.buttonText}>
                FINALIZADAS
            </Text>
        </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        gap: 8,
        marginTop: 14,
        marginBottom: 8
    },
    button: {
        padding: 4,
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 4
    },
    buttonText: {
        color: '#fff'
    }
})