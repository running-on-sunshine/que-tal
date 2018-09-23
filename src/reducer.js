import generateId from './generate-id';

let fetchWassups = {};

let addNewWassup = (oldState, action) => {
    let newWassups = oldState.wassups.concat(wassup =>
            wassup.id === action.id
        );
    return {
        ...oldState,
        id: generateId,
        wassups: newWassups
    }
};

let removeWassup = (oldState, action) => {
    let newWassups = oldState.wassups.filter(wassup => 
        wassup.id !== action.id
        );
    return {
        ...oldState,
        wassups: newWassups
    }
};

let reducers = {
    'FETCH_WASSUPS': fetchWassups,
    'ADD_NEW_WASSUP': addNewWassup,
    'REMOVE_WASSUP': removeWassup
};

let reducer = (oldState, action) => {
    // if (action.type === 'REMOVE_WASSUP') {
    //     let filteredWassups = oldState.wassups
    //         .filter(wassup => 
    //             wassup.id !== action.id
    //         );

    //     return {
    //         ...oldState,
    //         wassups: filteredWassups
    //     } 
    // } else {
    //     return oldState
    // }
    let doer = reducers[action.type];
    return doer ? doer(oldState, action) : oldState;
};

export default reducer;