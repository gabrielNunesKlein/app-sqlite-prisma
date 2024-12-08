import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { prismaClient } from '@/src/services/db';
import TaskList from './list';

export default function Tasks( { filter }: { filter: boolean}) {
    
    const tasks = prismaClient.task.useFindMany({
        where: {
            completed: filter
        }
    })

  return (
    <>
        <FlatList 
            data={tasks}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => <TaskList data={item} /> }
        />
    </>
  )
}

const styles = StyleSheet.create({
})
