import { setCurrentPlayer, setFieldCell, setIsDraw, setIsGameEnded } from '../../redux/actions';
import { store } from '../../redux/store';
import FieldLayout from './FieldLayout';

export default function Field() {
    const WIN_PATTERNS = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
        [0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
    ];

    const checkToResult = (field) => {
        const isWin = WIN_PATTERNS.some((element) => {
            const [a, b, c] = element;
            return (field[a] && field[a] === field[b] && field[b] === field[c]);
        });

        if (!isWin) {
            store.dispatch(setCurrentPlayer());
            const isDraw = field.every((element) => element);
            if (isDraw) {
                store.dispatch(setIsDraw());
            }
        } else {
            store.dispatch(setIsGameEnded());
        }
    }

    const clickToSquere = (event) => {
        const clickedButton = event.target;
        const clickedButtonID = clickedButton.parentNode.dataset.id;
        if (!store.getState().field[clickedButtonID] && !store.getState().isGameEnded) {
            store.dispatch(setFieldCell(clickedButtonID));
            checkToResult(store.getState().field);
        }
    }


    return (
        <FieldLayout
            clickSquereFunc={clickToSquere}
        />
    )
}
