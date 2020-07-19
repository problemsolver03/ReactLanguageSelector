import React from 'react';
import LanguageContext from './contexts/LanguageContext'

class Field extends React.Component { 

    static contextType = LanguageContext;
    render() { 
        
        const text = this.context.langauge === 'english' ? 'Name' : 'Naam'
        return (
            <>
                <label className="block text-gray-700 text-sm font-bold mb-2">{text}</label>
                <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </>    
        )
    }
}

export default Field;