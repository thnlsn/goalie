import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/** //? | WIN = CTRL | CTRL = COM |
 * CTRL+Z = //! Undo
 * SHIFT+ALT+W //! Copy Line Up
 * SHIFT+ALT+S //! Copy Line Down
 * CTRL+W //! Add Cursor to Highlighted Line Ends
 * ALT+D //! Expand Selection
 * ALT+A //! Shrink Selection
 * ALT+W //! Move Line Up
 * ALT+S //! Move Line Down
 * SHIFT+CTRL+WIN+S //! Save ALL Files
 * WIN+SHIFT+S //! Toggle Line Comment
 * WIN+SHIFT+A //! Toggle Block Comment
 * SHIFT+CTRL+BACK //! Delete Right 
 */