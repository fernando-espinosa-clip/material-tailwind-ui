import * as React from 'react';
import { Button } from './Button';
import { ArrowRight, ArrowLeft, Plus, Trash, Send } from 'lucide-react';
import Link from './Link';

export const ButtonExamples: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-2">Variantes de Button</h2>
        <div className="flex flex-wrap gap-2">
          <Button variant="text" color="primary">
            Text
          </Button>
          <Button variant="contained" color="primary">
            Contained
          </Button>
          <Button variant="outlined" color="primary">
            Outlined
          </Button>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Colores de Button</h2>
        <div className="flex flex-wrap gap-2">
          <Button variant="contained" color="default">
            Default
          </Button>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="error">
            Error
          </Button>
          <Button variant="contained" color="warning">
            Warning
          </Button>
          <Button variant="contained" color="info">
            Info
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">
          Combinaciones de Variantes y Colores
        </h2>
        <div className="flex flex-wrap gap-2">
          <Button variant="text" color="primary">
            Text Primary
          </Button>
          <Button variant="text" color="secondary">
            Text Secondary
          </Button>
          <Button variant="contained" color="primary">
            Contained Primary
          </Button>
          <Button variant="contained" color="secondary">
            Contained Secondary
          </Button>
          <Button variant="outlined" color="primary">
            Outlined Primary
          </Button>
          <Button variant="outlined" color="secondary">
            Outlined Secondary
          </Button>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Variantes de Tamaño</h2>
        <div className="flex flex-wrap items-center gap-2">
          <Button size="small" variant="contained" color="primary">
            Small
          </Button>
          <Button size="medium" variant="contained" color="primary">
            Medium
          </Button>
          <Button size="large" variant="contained" color="primary">
            Large
          </Button>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Botones con Iconos</h2>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="contained"
            color="primary"
            leftIcon={<ArrowLeft className="w-4 h-4" />}
          >
            Anterior
          </Button>
          <Button
            variant="contained"
            color="primary"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Siguiente
          </Button>
          <Button
            variant="contained"
            color="success"
            leftIcon={<Plus className="w-4 h-4" />}
          >
            Agregar
          </Button>
          <Button
            variant="contained"
            color="error"
            leftIcon={<Trash className="w-4 h-4" />}
          >
            Eliminar
          </Button>
          <Button
            variant="contained"
            color="info"
            rightIcon={<Send className="w-4 h-4" />}
          >
            Enviar
          </Button>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Estado Deshabilitado</h2>
        <div className="flex flex-wrap gap-2">
          <Button variant="text" color="primary" disabled>
            Text Disabled
          </Button>
          <Button variant="contained" color="primary" disabled>
            Contained Disabled
          </Button>
          <Button variant="outlined" color="primary" disabled>
            Outlined Disabled
          </Button>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Botones como Enlaces</h2>
        <div className="flex flex-wrap gap-2">
          <Button
            component="a"
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            color="primary"
          >
            Enlace Externo
          </Button>
          <Button
            component={Link}
            href="/about"
            variant="outlined"
            color="primary"
          >
            Enlace Interno (Next.js Link)
          </Button>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">
          Botones de Ancho Completo
        </h2>
        <div className="space-y-2">
          <Button fullWidth variant="contained" color="primary">
            Botón de Ancho Completo
          </Button>
          <Button fullWidth variant="contained" color="secondary">
            Secundario de Ancho Completo
          </Button>
          <Button fullWidth variant="outlined" color="primary">
            Outline de Ancho Completo
          </Button>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">
          Nuevos Ejemplos de Colores
        </h2>
        <div className="flex flex-wrap gap-2">
          <Button variant="contained" color="warning">
            Warning Contained
          </Button>
          <Button variant="outlined" color="info">
            Info Outlined
          </Button>
          <Button variant="text" color="success">
            Success Text
          </Button>
          <Button variant="contained" color="error">
            Error Contained
          </Button>
        </div>
      </div>
    </div>
  );
};
