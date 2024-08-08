"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form
} from "@/components/ui/form"
import { Select } from "@/components/formInputs/select"
import { Textarea } from "@/components/formInputs/textarea"
import { failInfoFormSchema, FailInfoFormValues } from "@/lib/schema"
import { NavButtons } from "@/components/formInputs/navButtons"
import { useFormStore, initialState } from "@/components/store/useFormStore"

const tipos_fallo = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" },
] as any


export function FailInfoForm() {
  const defaultValues = useFormStore(state => state.failInfo)
  const setFailInfo = useFormStore(state => state.setFailInfo)
  const nextStep = useFormStore(state => state.nextStep)
  const form = useForm<FailInfoFormValues>({
    resolver: zodResolver(failInfoFormSchema),
    defaultValues,
  })
  const onSubmit = (data: any) => {
    setFailInfo(data)
    nextStep()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Select slug="failType" label="Tipo de Fallo" descripcion="Ingrese el tipo de fallo" placeholderInput="Ingresar tipo de fallo..." items={tipos_fallo} placeholderCommand="Buscar tipo de fallo..." form={form} />
        <Textarea slug="failDescription" label="Descripción del Fallo" descripcion="Ingrese la descripción del fallo" placeholder="Ingresar descripción..." form={form} />
        
        <NavButtons />
      </form>
    </Form>
  )
}
