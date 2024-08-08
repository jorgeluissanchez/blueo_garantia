"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form
} from "@/components/ui/form"
import { Input } from "@/components/formInputs/input"

import { personalInfoFormSchema, PersonalInfoFormValues } from "@/lib/schema"
import { NavButtons } from "@/components/formInputs/navButtons"
import { useFormStore } from "@/components/store/useFormStore"



export function PersonalInfoForm() {
  const setPersonInfo = useFormStore(state => state.setPersonalInfo)
  const defaultValues = useFormStore(state => state.personalInfo)
  const nextStep = useFormStore(state => state.nextStep)
  const form = useForm<PersonalInfoFormValues>({
    resolver: zodResolver(personalInfoFormSchema),
    defaultValues,
  })

  const onSubmit = (data: any) => {
    console.log(data)
    setPersonInfo(data)
    nextStep()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Input slug="document" label="Identificación" descripcion="Ingrese el número de identificación del cliente" placeholder="Ingresar identificación..." form={form} />
        <Input slug="name" label="Nombre" descripcion="Ingrese el nombre del cliente" placeholder="Ingresar nombre..." form={form} />
        <Input slug="phone" label="Teléfono" descripcion="Ingrese el número de teléfono del cliente" placeholder="Ingresar teléfono..." form={form} />
        
        <NavButtons  />
      </form>
    </Form>
  )
}