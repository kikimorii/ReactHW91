import { useSelector } from 'react-redux';
import { selectField } from '../../redux/selects';
import styles from './Field.module.css';

export default function FieldLayout({ clickSquereFunc }) {
    const field = useSelector(selectField);
    
    return (
        <ul className={styles.fieldContainer}>
            {field.map((squere, index) => {
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
