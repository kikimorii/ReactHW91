import { store } from '../../redux/store';
import styles from './Field.module.css';

export default function FieldLayout({ clickSquereFunc }) {
    return (
        <ul className={styles.fieldContainer}>
            {store.getState().field.map((squere, index) => {
                return (
                    <li data-id={index} key={index}>
                        <button
                            className={styles.fieldButton}
                            onClick={clickSquereFunc}
                        >{squere}</button>
                    </li>
                )
            })}
        </ul>
    )
}
