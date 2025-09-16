import styles from './AgainButton.module.css';
import { resetGame } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsGameEnded } from '../../redux/selects';

export default function AgainButtonLayout() {
    const isGameEnded = useSelector(selectIsGameEnded);
    const dispatch = useDispatch();
    return (
        <button
            className={`${styles.AgainButton} ${isGameEnded ? `${styles.active}` : ""}`}
            onClick={() => dispatch(resetGame())}>
            Начать заново
        </button>
    );
}
