import InformationLayout from './InformationLayout';
import { store } from '../../redux/store';

export default function Information() {
    if (store.getState().isDraw) {
        return <InformationLayout content={'Ничья'} />
    } else if (store.getState().isGameEnded) {
        return <InformationLayout content={`Победил: ${store.getState().currentPlayer}`} />
    } else {
        return <InformationLayout content={`Ходит ${store.getState().currentPlayer}`}/>
    }
}
