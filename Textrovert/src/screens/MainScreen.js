import React, { useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator } from 'react-native';
import axios from 'axios';

const MainScreen = () => {
  const [word, setWord] = useState('');
  const [meaning, setMeaning] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchMeaning = async () => {
    setLoading(true);
    try {
      const options = {
        method: 'GET',
        url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
        params: { term: word },
        headers: {
          'X-RapidAPI-Key': '54bf4b4fabmsh15c03545fa0bce7p14ce3ajsn6251c4d6146d',
          'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com',
        },
      };

      const response = await axios.request(options);
      setMeaning(response.data.list[0].definition);
    } catch (error) {
      console.error('Error fetching meaning:', error);
      setMeaning('Failed to fetch meaning. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
        placeholder="Enter word"
        value={word}
        onChangeText={setWord}
      />
      <Button title="Fetch Meaning" onPress={fetchMeaning} />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} />
      ) : (
        <Text style={{ marginTop: 20 }}>{meaning}</Text>
      )}
    </View>
  );
};

export default MainScreen;
