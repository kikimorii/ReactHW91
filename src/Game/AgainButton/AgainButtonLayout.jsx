import styles from './AgainButton.module.css';
import { store } from "../../redux/store";
import { resetGame } from '../../redux/actions';

export default function AgainButtonLayout() {
    return (
        <button
            className={`${styles.AgainButton} ${store.getState().isGameEnded ? `${styles.active}` : ""}`}
            onClick={() => store.dispatch(resetGame())}>
            Начать заново
        </button>
    );
}
