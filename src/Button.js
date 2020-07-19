import React from 'react';
import LanguageContext from './contexts/LanguageContext';

class Button extends React.Component{

    static contextType = LanguageContext;
    
    render() { 
      
        return (
            
            <LanguageContext.Consumer>
                {
                    
                    (value) => {
                        console.log(value)
                        return(
                            <button className="mt-3 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                             {value.langauge === 'english' ? 'Submit' : 'Voorleggen'}
                            </button>
                       )
                    }
                }                
            </LanguageContext.Consumer>
        )
    }
}

export default Button;