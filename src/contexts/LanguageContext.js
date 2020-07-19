import React from 'react';

const Context = React.createContext('english');

export class LanguageStore extends React.Component { 
    state = {
        langauge:'english'
    }

    onLanguageChange = (langauge) => this.setState({ langauge });


    render() { 
        return (
            <Context.Provider value={{...this.state, onLanguageChange:this.onLanguageChange}}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default Context;