import * as React from "react"
import { IconButton } from "./IconButton"
import { Heart, Settings, Trash, Plus, Menu, Star, Bell, AlertCircle, Send, CheckCircle } from "lucide-react"

export const IconButtonExamples: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-2">IconButtons Básicos</h2>
        <div className="flex flex-wrap gap-4">
          <IconButton icon={<Heart />} aria-label="Favorito" />
          <IconButton icon={<Settings />} variant="solid" color="secondary" aria-label="Configuración" />
          <IconButton icon={<Trash />} variant="solid" color="error" aria-label="Eliminar" />
          <IconButton icon={<Plus />} variant="outline" aria-label="Agregar" />
          <IconButton icon={<Menu />} variant="default" color="primary" aria-label="Menú" />
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Tamaños de IconButton</h2>
        <div className="flex flex-wrap items-center gap-4">
          <IconButton icon={<Heart />} size="small" aria-label="Favorito pequeño" />
          <IconButton icon={<Heart />} size="medium" aria-label="Favorito mediano" />
          <IconButton icon={<Heart />} size="large" aria-label="Favorito grande" />
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">IconButtons con Colores</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <IconButton icon={<Star />} color="primary" aria-label="Estrella primaria" />
          <IconButton icon={<Bell />} color="secondary" aria-label="Campana secundaria" />
          <IconButton icon={<AlertCircle />} color="error" aria-label="Alerta de error" />
          <IconButton icon={<AlertCircle />} color="warning" aria-label="Alerta de advertencia" />
          <IconButton icon={<Send />} color="info" aria-label="Enviar información" />
          <IconButton icon={<CheckCircle />} color="success" aria-label="Éxito" />
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">IconButtons con Variantes y Colores</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <IconButton icon={<Star />} variant="default" color="primary" aria-label="Estrella primaria" />
          <IconButton icon={<Bell />} variant="outline" color="secondary" aria-label="Campana secundaria" />
          <IconButton icon={<AlertCircle />} variant="solid" color="error" aria-label="Alerta de error" />
          <IconButton icon={<AlertCircle />} variant="default" color="warning" aria-label="Alerta de advertencia" />
          <IconButton icon={<Send />} variant="outline" color="info" aria-label="Enviar información" />
          <IconButton icon={<CheckCircle />} variant="solid" color="success" aria-label="Éxito" />
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">IconButtons con Fondo Oscuro</h2>
        <div className="flex flex-wrap gap-4 items-center bg-gray-800 p-4 rounded">
          <IconButton icon={<Star />} variant="solid" color="primary" aria-label="Estrella primaria" />
          <IconButton icon={<Bell />} variant="solid" color="secondary" aria-label="Campana secundaria" />
          <IconButton icon={<AlertCircle />} variant="solid" color="error" aria-label="Alerta de error" />
          <IconButton icon={<AlertCircle />} variant="solid" color="warning" aria-label="Alerta de advertencia" />
          <IconButton icon={<Send />} variant="solid" color="info" aria-label="Enviar información" />
          <IconButton icon={<CheckCircle />} variant="solid" color="success" aria-label="Éxito" />
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">IconButtons con Fondo Claro</h2>
        <div className="flex flex-wrap gap-4 items-center bg-gray-100 p-4 rounded">
          <IconButton icon={<Star />} variant="default" color="primary" aria-label="Estrella primaria" />
          <IconButton icon={<Bell />} variant="outline" color="secondary" aria-label="Campana secundaria" />
          <IconButton icon={<AlertCircle />} variant="default" color="error" aria-label="Alerta de error" />
          <IconButton icon={<AlertCircle />} variant="outline" color="warning" aria-label="Alerta de advertencia" />
          <IconButton icon={<Send />} variant="default" color="info" aria-label="Enviar información" />
          <IconButton icon={<CheckCircle />} variant="outline" color="success" aria-label="Éxito" />
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">IconButtons Deshabilitados</h2>
        <div className="flex flex-wrap gap-4">
          <IconButton icon={<Heart />} disabled aria-label="Favorito deshabilitado" />
          <IconButton
            icon={<Settings />}
            variant="solid"
            color="secondary"
            disabled
            aria-label="Configuración deshabilitada"
          />
          <IconButton icon={<Trash />} variant="solid" color="error" disabled aria-label="Eliminar deshabilitado" />
        </div>
      </div>
    </div>
  )
}

