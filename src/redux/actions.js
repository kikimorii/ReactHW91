export const setIsDraw = () => ({ type: "SET_IS_DRAW" });

export const setIsGameEnded = () => ({ type: "SET_IS_GAME_ENDED" });

export const setFieldCell = (cellID) => ({
    type: "SET_FIELD_CELL",
    payload: { cellID },
});

export const setCurrentPlayer = () => ({ type: "SET_CURRENT_PLAYER" });

export const resetGame = () => ({ type: "RESET_GAME" });
