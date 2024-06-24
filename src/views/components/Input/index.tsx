import React, { useCallback, useState } from "react";
import styles from './index.module.scss'

interface InputPlusProps {
    onAdd: (title: string) => void
}

export const Input: React.FC<InputPlusProps> = ({
    onAdd,
}) => {
    const [inputValues, setInputValue] = useState('');
    const addTask = useCallback(()=>{
        onAdd(inputValues);
        setInputValue('');
    },[inputValues])
    return (
        <div className={styles.inputPlus}>
            <input
                type="text"
                className={styles.inputPlusValue}
                value={inputValues}
                onChange={(evt) => {
                    setInputValue(evt.target.value);
                }}
                onKeyDown={(evt)=>{
                    if(evt.key==='Enter'){
                        addTask();
                    }
                }}
                placeholder="Type task here"
            />
            <button
                onClick={addTask}
                aria-label="Add"
                className={styles.inputPlusButton}
            />
        </div>
    )
}