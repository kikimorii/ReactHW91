const initialState = {
    field: [
        "", "", "",
        "", "", "",
        "", "", ""
    ],
    currentPlayer: "X",
    isDraw: false,
    isGameEnded: false,
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "RESET_GAME": {
            return { ...initialState };
        }
        case "SET_IS_DRAW": {
            return {
                ...state,
                isDraw: true,
                isGameEnded: true,
            };
        }
        case "SET_IS_GAME_ENDED": {
            return {
                ...state,
                isGameEnded: true,
            };
        }
        case "SET_FIELD_CELL": {
            const newField = [...state.field];
            newField[payload.cellID] = state.currentPlayer;

            return {
                ...state,
                field: newField,
            };
        }
        case "SET_CURRENT_PLAYER": {
            return {
                ...state,
                currentPlayer: state.currentPlayer === 'X' ? '0' : "X",
            };
        }

        default:
            return state;
    }
}
