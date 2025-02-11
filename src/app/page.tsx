import { ButtonExamples } from "@/components/ButtonExamples"
import { IconButtonExamples } from "@/components/IconButtonExamples"
import { ToggleButtonExamples } from "@/components/ToggleButtonExamples"
import { TextFieldExample } from "@/components/TextFieldExample"
import { BadgeExamples } from "@/components/BadgeExamples"

export default function Home() {

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Bienvenido a la Migración de MUI a Tailwind CSS</h1>
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4">Badge Examples</h2>
                    <BadgeExamples />
                </section>
                <section>
                    <h2 className="text-2xl font-bold mb-4">TextField Examples</h2>
                    <TextFieldExample />
                </section>
                <section>
                    <h2 className="text-2xl font-bold mb-4">Button Examples</h2>
                    <ButtonExamples />
                </section>
                <section>
                    <h2 className="text-2xl font-bold mb-4">IconButton Examples</h2>
                    <IconButtonExamples />
                </section>
                <section>
                    <h2 className="text-2xl font-bold mb-4">ToggleButton Examples</h2>
                    <ToggleButtonExamples />
                </section>
            </div>
        </div>
    )
}

