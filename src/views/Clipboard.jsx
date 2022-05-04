import React from "react";
import ClipCard from "@/components/Clipboard/ClipCard";

export default function Clipboard() {
    const { testFunction } = window.electron;
    return (
        <>
            <h1>{testFunction()}</h1>
            {["hewwo", "world", "lorem ipsum hewwo world"].map((text) => (
                <ClipCard text={text} key={text} />
            ))}
        </>
    );
}
