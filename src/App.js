import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore} from './contexts/LanguageContext'
import LanguageSelector from './LanguageSelector'


class App extends React.Component{
  
 
  render() { 
  return (
    <div className="flex mb-4">
      <div className="w-1/3"></div>
      <div className="w-1/3 bg-gray-100 shadow">

        <div className="p-5">
          <LanguageStore>
          <LanguageSelector/>
             <div className="mt-3">
           
              <UserCreate />
           
            </div>
            </LanguageStore>
          </div>
      </div>
      <div className="w-1/3"></div>
  </div>
  );
  }
}

export default App;
