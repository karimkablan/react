import CheckBox from "./checkBox";
import React from 'react'

export default function Container() {
    return (
        <div>
            <CheckBox checked={false} text="I read the term of the app"/>
            <CheckBox checked={false} text="I accpet the term of the app"/>
            <CheckBox checked={true} text="i want to get the weekly news letter"/>
            <CheckBox checked={true} text="i want to get sales and offers"/>
        </div>
    )
}