"use client"

import { useFormStore } from "../store/useFormStore"
import { Button } from "@/components/ui/button"

export function NavButtons() {
  const prevStep = useFormStore(state => state.prevStep)
  return (
        <div className="flex justify-between">
          <Button onClick={prevStep} type="button" variant="ghost" className="w-full mr-4 border">Anterior</Button>
          <Button type="submit" className="w-full">Siguiente</Button>
        </div>
  )
}