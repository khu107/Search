import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Serach from './assets/components/Serach';
import Header from './assets/components/Header';
import List from './assets/components/List';

function App() {
  const [web, setWeb] = useState([]);
  const [webSearchText, setWebSearchText] = useState('');
  const [value, setValue] = useState('');

  const webSearch = async () => {
    let category = value || 'web';
    if (!category) {
      category = 'web';
    }
    const url = `https://dapi.kakao.com/v2/search/${category}`;

    try {
      const result = await axios.get(url, {
        headers: {
          Authorization: 'KakaoAK 604c9e38d928bb7eb370f4b736fe9192',
        },
        params: {
          query: webSearchText,
          size: 10,
        },
      });

      setWeb(result.data.documents);
    } catch (error) {
      console.log(error);
      setWeb([]); // Handle error condition by setting web state to an empty array
    }
  };

  useEffect(() => {
    if (webSearchText === '') {
      setWeb([]);
    } else {
      webSearch();
    }
  }, [webSearchText, value]);

  const onChangeWebSearchText = (e) => {
    setWebSearchText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      alert('yes');
    }
  };
  console.log(webSearchText);
  return (
    <>
      <select
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      >
        <option value="web">web</option>
        <option value="blog">blog</option>
        <option value="image">image</option>
      </select>
      <Header />
      <Serach
        webSearchText={webSearchText}
        onChangeWebSearchText={onChangeWebSearchText}
        handleKeyPress={handleKeyPress}
      />
      <List web={web} value={value} />
    </>
  );
}

export default App;
