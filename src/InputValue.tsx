import React, {ChangeEvent} from 'react'
import s from "./Counter.module.css";

type InputValueType = {
    value: number
    onChangeValue: (newValue: number) => void
    error: boolean
    title: string
}

export function InputValue(props: InputValueType) {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeValue(Number(e.currentTarget.value))
    }

    return <div className={s.inputValueContainer}>
        <span className={s.inputTitle}>
            {props.title} value:
        </span>
        <div className={s.inputItem}>
            <input type="number"
                   value={props.value}
                   onChange={onChangeHandler}
                   className={props.error ? s.errorInput : ''}
            />
        </div>
    </div>

}