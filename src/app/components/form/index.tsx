import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, Keyboard } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { prismaClient } from '../../../services/db'

export default function FormTask() {
    const [task, setTask] = useState('')

    async function handleNewTask(){
        if(task == '') return

        await prismaClient.task.create({
            data: {
                name: task,
                completed: false
            }
        })

        setTask('')
        Keyboard.dismiss()
    }
  return (
    <View style={styles.container}>
        <TextInput style={styles.input} placeholder='Digite sua tarefa' onChangeText={setTask} value={task} />
        <Pressable style={styles.button} onPress={handleNewTask}>
            <Text style={styles.buttonText}>
                Cadastrar
            </Text>
            <Ionicons name='add' size={24} color={"#fff"} />
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        marginBottom: 8
    },
    input: {
        backgroundColor: "#f1f5f9",
        padding: 8,
        borderRadius: 4,
        marginBottom: 8,
        marginTop: 8
    },
    button: {
        backgroundColor: "#22c55e",
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 8,
        gap: 8
    },
    buttonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '500'
    }
})
