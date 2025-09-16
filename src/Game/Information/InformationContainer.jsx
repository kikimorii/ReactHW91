import InformationLayout from './InformationLayout';
import { useSelector } from 'react-redux';
import {
    selectIsDraw,
    selectIsGameEnded,
    selectCurrentPlayer
} from '../../redux/selects';

export default function Information() {
    const isDraw = useSelector(selectIsDraw);
    const isGameEnded = useSelector(selectIsGameEnded);
    const currentPlayer = useSelector(selectCurrentPlayer);
    
    if (isDraw) {
        return <InformationLayout content={'Ничья'} />
    } else if (isGameEnded) {
        return <InformationLayout content={`Победил: ${currentPlayer}`} />
    } else {
        return <InformationLayout content={`Ходит ${currentPlayer}`}/>
    }
}
