import React, { useState } from 'react';
import { TextInput, TextInputBase, View } from 'react-native';

export default function App2() {
  const [value, setValue] = useState('');
  return (
    <View>
      <TextInput value={value} />
    </View>
  );
}
