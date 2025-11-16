
import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';

type ModuleCardProps = {
  name: string;
  icon: string;
};

export function ModuleCard({ name, icon }: ModuleCardProps) {
  return (
    <ThemedView style={styles.card}>
      <Text style={styles.icon}>{icon}</Text>
      <ThemedText style={styles.name}>{name}</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '45%',
    aspectRatio: 1,
    borderRadius: 20,
    margin: '2.5%',
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    ...Platform.select({
      android: {
        elevation: 3,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
    }),
  },
  icon: {
    fontSize: 40,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
