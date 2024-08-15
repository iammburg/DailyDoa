import { useState } from "react";
import { Button } from "@material-tailwind/react";
export default function App() {
    return (
        <>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <Button className="bg-color-jungle">Button</Button>;
        </>
    );
}
