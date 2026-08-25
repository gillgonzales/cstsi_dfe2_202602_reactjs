import './App.css';
import { Profile } from './components/Profile';

const users = [
  {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
    wiki: 'https://pt.wikipedia.org/wiki/Hedy_Lamarr',
  },
  {
    name: 'Ada Lovelace',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Ada_lovelace.jpg',
    imageSize: 90,
    wiki: 'https://pt.wikipedia.org/wiki/Ada_Lovelace',
  },
  // {
  //   name: 'Isaac Newton',
  //   imageUrl: 'https://pt.wikipedia.org/wiki/Isaac_Newton#/media/Ficheiro:Portrait_of_Sir_Isaac_Newton,_1689_(brightened).jpg',
  //   imageSize: 90,
  //   wiki: 'https://pt.wikipedia.org/wiki/Isaac_Newton',
  // },
  {
    name: 'Galileu',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg',
    imageSize: 90,
    wiki: 'https://pt.wikipedia.org/wiki/Galileu_Galilei',
  },
  {
    name: 'Nikola Tesla',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/N.Tesla.JPG',
    imageSize: 90,
    wiki: 'https://pt.wikipedia.org/wiki/Nikola_Tesla',
  },
];

function App() {
  return (
    <> 
      <Profile key={users[0].name} user={users[0]} />
      <Profile key={users[1].name} user={users[1]} />
      <Profile key={users[2].name} user={users[2]} />
      <Profile key={users[3].name} user={users[3]} />
    </>
  );
}


export default App;
