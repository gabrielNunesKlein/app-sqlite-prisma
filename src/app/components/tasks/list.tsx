import { Task } from '@prisma/client/react-native';
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { prismaClient } from '@/src/services/db';

interface Props {
    data: Task
}

export default function TaskList({ data }: Props) {

    async function handleDelete(){
        await prismaClient.task.delete({
            where: {
                id: data.id
            }
        })
    }

    async function handleChangeStatus(){
        await prismaClient.task.update({
            where: {
                id: data.id
            },
            data: {
                completed: true
            }
        })
    }

  return (
    <View style={styles.container}>
        <Text style={styles.text}>{data.name}</Text>
        <View style={styles.buttons}>
            <Pressable style={styles.buttonDelete} onPress={handleDelete}>
                <Ionicons name='trash-outline' size={16} color={"#fff"} />
            </Pressable>

            { !data.completed && (
                <Pressable style={styles.buttonCompleted} onPress={handleChangeStatus}>
                    <Ionicons name='checkmark-outline' size={16} color={"#fff"} />
                </Pressable>
            )}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#64748b",
        marginBottom: 30,
        padding: 14,
        borderRadius: 4
    },
    text: {
        fontWeight: '500',
        color: '#fff'
    },
    buttons: {
        position: 'absolute',
        bottom: -18,
        flexDirection: 'row',
        right: 0,
        zIndex: 99,
        gap: 8
    },

    buttonDelete: {
        backgroundColor: '#ef4444',
        padding: 6,
        borderRadius: 99
    },
    buttonCompleted: {
        backgroundColor: '#22c55e',
        padding: 6,
        borderRadius: 99
    }
})
