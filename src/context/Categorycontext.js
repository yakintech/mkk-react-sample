import React, { createContext, useState } from 'react';

const categorycontext = createContext(null);


export const Categoryprovider = ({ children }) => {

    const [modalvisible, setmodalvisible] = useState(false);
    const [categories, setcategories] = useState([]);
    const [updatemodalvisible, setupdatemodalvisible] = useState(false);
    

    const values = {
        modalvisible,
        setmodalvisible,
        categories,
        setcategories,
        updatemodalvisible,
        setupdatemodalvisible
    };

    return <categorycontext.Provider value={values}>{children}</categorycontext.Provider>

}

export default categorycontext;