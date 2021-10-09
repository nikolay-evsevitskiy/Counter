import React from "react";

type ButtonPropsType = {
    changeValue: () => void
    title: string
    error: boolean
}

export function Button(props: ButtonPropsType) {
    const addValueOnClick = () => {
        props.changeValue()
    }
    return <button className="buttonComponent"
                   onClick={addValueOnClick}
                   disabled={props.error}>
        {props.title}
    </button>
}