
import React from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { ThemedView } from '@/components/themed-view';
import { ModuleCard } from '@/components/ModuleCard';

const modules = [
  { name: 'Home Up', icon: '🏠' },
  { name: 'LockStar', icon: '🔒' },
  { name: 'QuickStar', icon: '✨' },
  { name: 'Routine+', icon: '🔄' },
  { name: 'ClockFace', icon: '⏰' },
  { name: 'MultiStar', icon: '⭐' },
  { name: 'NaviStar', icon: '🧭' },
  { name: 'Quick Shot', icon: '📸' },
  { name: 'NotiStar', icon: '🔔' },
  { name: 'RegiStar', icon: '📄' },
  { name: 'Battery Tracker', icon: '🔋' },
  { name: 'Battery Guardian', icon: '🛡️' },
  { name: 'Galaxy App Booster', icon: '🚀' },
  { name: 'Thermal Guardian', icon: '🌡️' },
  { name: 'Memory Guardian', icon: '🧠' },
  { name: 'Media File Guardian', icon: '🖼️' },
  { name: 'Good Guardians', icon: '👨‍👩‍👧‍👦' },
  { name: 'Good Guardians Agent', icon: '🕵️' },
  { name: 'Theme Park', icon: '🎢' },
  { name: 'Nice Catch', icon: '🎣' },
  { name: 'One Hand Operation +', icon: '🖐️' },
  { name: 'Edge Lighting+', icon: '💡' },
  { name: 'Display Assistant', icon: '🖥️' },
  { name: 'Edge Touch', icon: '👆' },
  { name: 'SoundAssistant', icon: '🎵' },
  { name: 'Wonderland', icon: '🐇' },
  { name: 'Key Cafe', icon: '☕' },
  { name: 'Camera Assistant', icon: '📷' },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={styles.container}>
        <FlatList
          data={modules}
          renderItem={({ item }) => <ModuleCard name={item.name} icon={item.icon} />}
          keyExtractor={(item) => item.name}
          numColumns={2}
        />
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
