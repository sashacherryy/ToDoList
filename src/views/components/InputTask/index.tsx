import React, { useCallback, useState } from "react";
import styles from './index.module.scss'

interface InputTaskProps {
    onAdd: (title: string) => void
}

export const InputTask: React.FC<InputTaskProps> = ({
    onAdd,
}) => {
    return (
        <div className={styles.inputTask}>
            123123
        </div>
    )
}