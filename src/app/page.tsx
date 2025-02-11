import { useState } from "react"
import { ButtonExamples } from "@/components/ButtonExamples"
import { IconButtonExamples } from "@/components/IconButtonExamples"
import { ToggleButtonExamples } from "@/components/ToggleButtonExamples"
import { TextFieldExample } from "@/components/TextFieldExample"

export default function Home() {
    const [name, setName] = useState("")

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Bienvenido a la Migración de MUI a Tailwind CSS</h1>
            <TextFieldExample />
            <ButtonExamples />
            <IconButtonExamples />
            <ToggleButtonExamples />
        </div>
    )
}

