import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 30}} >
      <View>
        <TextInput />
        <Button title="ADD" />
      </View>
      <View>
        <Text>...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});
