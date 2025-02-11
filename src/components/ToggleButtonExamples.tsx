import type React from 'react';
import { useState } from 'react';
import {
  ToggleButton,
  ToggleButtonGroup,
} from '@/components/ToggleButtonGroup';
import {
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Bold,
  Italic,
  Underline,
} from 'lucide-react';

export const ToggleButtonExamples: React.FC = () => {
  const [alignment, setAlignment] = useState<string>('left');
  const [formats, setFormats] = useState<string[]>([]);

  const handleAlignment = (newAlignment: string | string[]) => {
    setAlignment(newAlignment as string);
  };

  const handleFormats = (newFormats: string | string[]) => {
    setFormats(newFormats as string[]);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-2">
          Toggle Button Group con Efecto Ripple (Colores)
        </h2>
        <div className="space-y-4">
          <ToggleButtonGroup
            value={alignment}
            onChange={handleAlignment}
            exclusive
            color="default"
            aria-label="text alignment"
          >
            <ToggleButton value="left" aria-label="align left">
              <AlignLeft className="h-4 w-4" />
            </ToggleButton>
            <ToggleButton value="center" aria-label="align center">
              <AlignCenter className="h-4 w-4" />
            </ToggleButton>
            <ToggleButton value="right" aria-label="align right">
              <AlignRight className="h-4 w-4" />
            </ToggleButton>
            <ToggleButton value="justify" aria-label="align justify" disabled>
              <AlignJustify className="h-4 w-4" />
            </ToggleButton>
          </ToggleButtonGroup>

          <ToggleButtonGroup
            value={alignment}
            onChange={handleAlignment}
            exclusive
            color="primary"
            aria-label="text alignment"
          >
            <ToggleButton value="left" aria-label="align left">
              <AlignLeft className="h-4 w-4" />
            </ToggleButton>
            <ToggleButton value="center" aria-label="align center">
              <AlignCenter className="h-4 w-4" />
            </ToggleButton>
            <ToggleButton value="right" aria-label="align right">
              <AlignRight className="h-4 w-4" />
            </ToggleButton>
            <ToggleButton value="justify" aria-label="align justify" disabled>
              <AlignJustify className="h-4 w-4" />
            </ToggleButton>
          </ToggleButtonGroup>

          <ToggleButtonGroup
            value={alignment}
            onChange={handleAlignment}
            exclusive
            color="secondary"
            aria-label="text alignment"
          >
            <ToggleButton value="left" aria-label="align left">
              <AlignLeft className="h-4 w-4" />
            </ToggleButton>
            <ToggleButton value="center" aria-label="align center">
              <AlignCenter className="h-4 w-4" />
            </ToggleButton>
            <ToggleButton value="right" aria-label="align right">
              <AlignRight className="h-4 w-4" />
            </ToggleButton>
            <ToggleButton value="justify" aria-label="align justify" disabled>
              <AlignJustify className="h-4 w-4" />
            </ToggleButton>
          </ToggleButtonGroup>

          <ToggleButtonGroup
            value={alignment}
            onChange={handleAlignment}
            exclusive
            color="error"
            aria-label="text alignment"
          >
            <ToggleButton value="left" aria-label="align left">
              <AlignLeft className="h-4 w-4" />
            </ToggleButton>
            <ToggleButton value="center" aria-label="align center">
              <AlignCenter className="h-4 w-4" />
            </ToggleButton>
            <ToggleButton value="right" aria-label="align right">
              <AlignRight className="h-4 w-4" />
            </ToggleButton>
            <ToggleButton value="justify" aria-label="align justify" disabled>
              <AlignJustify className="h-4 w-4" />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">
          Toggle Button Group con Efecto Ripple (Texto)
        </h2>
        <div className="space-y-4">
          <ToggleButtonGroup
            value={formats}
            onChange={handleFormats}
            color="primary"
            aria-label="text formatting"
          >
            <ToggleButton value="bold" aria-label="bold">
              <Bold className="h-4 w-4 mr-2" />
              Bold
            </ToggleButton>
            <ToggleButton value="italic" aria-label="italic">
              <Italic className="h-4 w-4 mr-2" />
              Italic
            </ToggleButton>
            <ToggleButton value="underline" aria-label="underline">
              <Underline className="h-4 w-4 mr-2" />
              Underline
            </ToggleButton>
          </ToggleButtonGroup>

          <ToggleButtonGroup
            value={formats}
            onChange={handleFormats}
            color="secondary"
            aria-label="text formatting"
          >
            <ToggleButton value="bold" aria-label="bold">
              <Bold className="h-4 w-4 mr-2" />
              Bold
            </ToggleButton>
            <ToggleButton value="italic" aria-label="italic">
              <Italic className="h-4 w-4 mr-2" />
              Italic
            </ToggleButton>
            <ToggleButton value="underline" aria-label="underline">
              <Underline className="h-4 w-4 mr-2" />
              Underline
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">
          Vertical Toggle Button Group con Efecto Ripple
        </h2>
        <div className="flex gap-4">
          <ToggleButtonGroup
            orientation="vertical"
            value={alignment}
            onChange={handleAlignment}
            exclusive
            color="primary"
            aria-label="text alignment"
          >
            <ToggleButton value="left" aria-label="align left">
              <AlignLeft className="h-4 w-4" />
            </ToggleButton>
            <ToggleButton value="center" aria-label="align center">
              <AlignCenter className="h-4 w-4" />
            </ToggleButton>
            <ToggleButton value="right" aria-label="align right">
              <AlignRight className="h-4 w-4" />
            </ToggleButton>
          </ToggleButtonGroup>

          <ToggleButtonGroup
            orientation="vertical"
            value={alignment}
            onChange={handleAlignment}
            exclusive
            color="secondary"
            aria-label="text alignment"
          >
            <ToggleButton value="left" aria-label="align left">
              <AlignLeft className="h-4 w-4" />
            </ToggleButton>
            <ToggleButton value="center" aria-label="align center">
              <AlignCenter className="h-4 w-4" />
            </ToggleButton>
            <ToggleButton value="right" aria-label="align right">
              <AlignRight className="h-4 w-4" />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">
          Toggle Button Group con Texto e Iconos Centrados
        </h2>
        <div className="space-y-4">
          <ToggleButtonGroup
            value={formats}
            onChange={handleFormats}
            color="primary"
            aria-label="text formatting"
          >
            <ToggleButton value="bold" aria-label="bold">
              <Bold className="h-4 w-4" />
              <span>Bold</span>
            </ToggleButton>
            <ToggleButton value="italic" aria-label="italic">
              <Italic className="h-4 w-4" />
              <span>Italic</span>
            </ToggleButton>
            <ToggleButton value="underline" aria-label="underline">
              <Underline className="h-4 w-4" />
              <span>Underline</span>
            </ToggleButton>
          </ToggleButtonGroup>

          <ToggleButtonGroup
            value={alignment}
            onChange={handleAlignment}
            exclusive
            color="secondary"
            aria-label="text alignment"
          >
            <ToggleButton value="left" aria-label="align left">
              <AlignLeft className="h-4 w-4" />
              <span>Left</span>
            </ToggleButton>
            <ToggleButton value="center" aria-label="align center">
              <AlignCenter className="h-4 w-4" />
              <span>Center</span>
            </ToggleButton>
            <ToggleButton value="right" aria-label="align right">
              <AlignRight className="h-4 w-4" />
              <span>Right</span>
            </ToggleButton>
          </ToggleButtonGroup>

          <ToggleButtonGroup
            value={alignment}
            onChange={handleAlignment}
            exclusive
            color="error"
            size="sm"
            aria-label="text alignment small"
          >
            <ToggleButton value="left" aria-label="align left">
              <AlignLeft className="h-3 w-3" />
              <span>Left</span>
            </ToggleButton>
            <ToggleButton value="center" aria-label="align center">
              <AlignCenter className="h-3 w-3" />
              <span>Center</span>
            </ToggleButton>
            <ToggleButton value="right" aria-label="align right">
              <AlignRight className="h-3 w-3" />
              <span>Right</span>
            </ToggleButton>
          </ToggleButtonGroup>

          <ToggleButtonGroup
            value={alignment}
            onChange={handleAlignment}
            exclusive
            color="success"
            size="lg"
            aria-label="text alignment large"
          >
            <ToggleButton value="left" aria-label="align left">
              <AlignLeft className="h-5 w-5" />
              <span>Left</span>
            </ToggleButton>
            <ToggleButton value="center" aria-label="align center">
              <AlignCenter className="h-5 w-5" />
              <span>Center</span>
            </ToggleButton>
            <ToggleButton value="right" aria-label="align right">
              <AlignRight className="h-5 w-5" />
              <span>Right</span>
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
    </div>
  );
};
