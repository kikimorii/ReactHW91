import GameLayout from "./GameLayout";
import { useState } from "react";
import { store } from '../redux/store';

export default function Game() {
    const [storeChange, setStoreChange] = useState(false);
    const storeChangeListener = () => {
        setStoreChange(!storeChange);
    }
    const unSubscribe = store.subscribe(storeChangeListener);

    return (
        <>
            <GameLayout />
        </>
    );
}
