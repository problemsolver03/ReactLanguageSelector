import React from 'react';
import usflag from './assets/united-states.svg';
import nedflag from './assets/netherlands.svg';
import LanguageContext from './contexts/LanguageContext';

class LanguageSelector extends React.Component{

  static contextType = LanguageContext;


  render() { 
     
        return (
            <>
              <p>Select a language</p>
          <div className="inline-flex">
            <button type="button" className="text-center mr-4" onClick={() => { this.context.onLanguageChange('english')}}>
              <img src={usflag} style={{ width: '50px' }} alt="flag" />
            </button>
            <button type="button" className="text-center" onClick={() => { this.context.onLanguageChange('dutch')}}>
              <img src={nedflag} style={{ width: '50px' }} alt="flag" />
            </button>
          </div>
            </>
        )
    }
}

export default LanguageSelector;