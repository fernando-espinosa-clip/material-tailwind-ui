'use client';

import { ButtonExamples } from '@/components/ButtonExamples';
import { IconButtonExamples } from '@/components/IconButtonExamples';
import { ToggleButtonExamples } from '@/components/ToggleButtonExamples';
import { TextFieldExample } from '@/components/TextFieldExample';
import { BadgeExamples } from '@/components/BadgeExamples';
import { TypographyExample } from '@/components/TypographyExample';
import { AvatarExample } from '@/components/AvatarExample';
import { ChipExamples } from '@/components/ChipExamples';
import { SwitchExamples } from '@/components/SwitchExamples';
import type React from 'react'; // Added import for React

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            MUI to Tailwind CSS Migration
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <ExampleSection
              title="Switch Examples"
              component={<SwitchExamples />}
            />
            <ExampleSection
              title="Chip Examples"
              component={<ChipExamples />}
            />
            <ExampleSection
              title="Avatar Examples"
              component={<AvatarExample />}
            />
            <ExampleSection
              title="Typography Examples"
              component={<TypographyExample />}
            />
            <ExampleSection
              title="Badge Examples"
              component={<BadgeExamples />}
            />
            <ExampleSection
              title="TextField Examples"
              component={<TextFieldExample />}
            />
            <ExampleSection
              title="Button Examples"
              component={<ButtonExamples />}
            />
            <ExampleSection
              title="IconButton Examples"
              component={<IconButtonExamples />}
            />
            <ExampleSection
              title="ToggleButton Examples"
              component={<ToggleButtonExamples />}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

function ExampleSection({
  title,
  component,
}: {
  title: string;
  component: React.ReactNode;
}) {
  return (
    <section className="bg-white shadow rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-lg font-medium leading-6 text-gray-900">{title}</h2>
      </div>
      <div className="border-t border-gray-200">
        <div className="px-4 py-5 sm:p-6">{component}</div>
      </div>
    </section>
  );
}
