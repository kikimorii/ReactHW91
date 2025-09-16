import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setCurrentPlayer, setFieldCell, setIsDraw, setIsGameEnded } from '../../redux/actions';
import {
    selectField,
    selectIsGameEnded,
} from '../../redux/selects';
import FieldLayout from './FieldLayout';

export default function Field() {
    const WIN_PATTERNS = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
        [0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
    ];
    const dispatch = useDispatch();
    const field = useSelector(selectField);
    const isGameEnded = useSelector(selectIsGameEnded);

    const checkToResult = (field) => {
        const isWin = WIN_PATTERNS.some((element) => {
            const [a, b, c] = element;
            return (field[a] && field[a] === field[b] && field[b] === field[c]);
        });

        if (!isWin) {
            dispatch(setCurrentPlayer());
            const isDraw = field.every((element) => element);
            if (isDraw) {
                dispatch(setIsDraw());
            }
        } else {
            dispatch(setIsGameEnded());
        }
    }

    const clickToSquere = (event) => {
        const clickedButton = event.target;
        const clickedButtonID = clickedButton.parentNode.dataset.id;
        if (!field[clickedButtonID] && !isGameEnded) {
            dispatch(setFieldCell(clickedButtonID));
        }
    }

    useEffect(() => {
        checkToResult(field);
    }, [field]);

    return (
        <FieldLayout
            clickSquereFunc={clickToSquere}
        />
    )
}
