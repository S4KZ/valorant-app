import { StyleSheet, Text, View, StatusBar  } from 'react-native';


import Route from './componentes/route/index'

export default function App() {
  return (
    <Route/>
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
