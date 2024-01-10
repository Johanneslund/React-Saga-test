export const GET_ALL_NAMES = "GET_ALL_NAMES";
export const SET_ALL_NAMES = "SET_ALL_NAMES";
export const SET_NAME = "SET_NAME";

export const setAllNames = (names: string[]) => ({
    type: SET_ALL_NAMES,
    names,
});

export const setName = (name : string) => ({
    type: SET_NAME,
    name
})

const initialState = {
    names: null,
    name: "Johannes"
};


export const nameReducer = (state = initialState, action: any) => {
    const { names } = action;
    const {name} = action;
    console.log(action);

    switch (action.type) {
        case SET_ALL_NAMES:
            return { ...state, names };
            case SET_NAME:
            return { ...state, name };
        default:
            return state;
    }
};
