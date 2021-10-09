import React from "react";
import s from "./Counter.module.css"

type ButtonPropsType = {
    changeValue: () => void
    title: string
    error: boolean
}

export function Button(props: ButtonPropsType) {
    const addValueOnClick = () => {
        props.changeValue()
    }
    return <button className={s.buttonComponent}
                   onClick={addValueOnClick}
                   disabled={props.error}>
        {props.title}
    </button>
}