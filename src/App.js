

import ProfilPhoto from './Component/profil/ProfilPhoto.js';
import FullName from './Component/profil/FullName.js';
import Adress from './Component/profil/Adress.js';
import { Component } from 'react';


class App extends Component {
  
  
  
  render (){
    return(
    <div className="App">
<Adress />
    <ProfilPhoto />
    <FullName />
    </div>
    );

  
  }
  }




export default App;
