import React from 'react';
import {Button} from "./Button";
import s from "./Counter.module.css"

type CounterPropsType = {
    value: number
    addValue: () => void
    resetValue: () => void
    error: boolean
};

export function CounterSetting(props: CounterPropsType) {

    return (
        <div className={s.body}>
            <div className={!props.error ? s.error : s.result}>

            </div>
            <div className={s.clickBoard}>
                <div className={s.buttonComponent}>
                    <Button title={'inc'}
                            changeValue={props.addValue}
                            error={!props.error}
                    />
                </div>

            </div>
        </div>
    );

}
