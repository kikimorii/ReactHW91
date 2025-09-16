import Information from './Information/InformationContainer';
import Field from './Field/FieldContainer';
import AgainButton from './AgainButton/AgainButtonContainer';

export default function GameLayout() {
    return (
        <div className="game">
            <Information />
            <Field />
            <AgainButton />
        </div>
    )
}
