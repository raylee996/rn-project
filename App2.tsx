import React, {useState} from 'react';
import {TextInput, View} from 'react-native';

export default function App2() {
  const [value, setValue] = useState('');
  return (
    <View>
      <TextInput
        value={value}
        onChangeText={e => {
          setValue(e);
        }}
      />
    </View>
  );
}
