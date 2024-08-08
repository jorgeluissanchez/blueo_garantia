"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form
} from "@/components/ui/form"
import { Input } from "@/components/formInputs/input"
import { Select } from "@/components/formInputs/select"
import { useFormStore, initialState } from "@/components/store/useFormStore"

import { productInfoFormSchema, ProductInfoFormValues } from "@/lib/schema"
import { NavButtons } from "@/components/formInputs/navButtons"
import { set } from "date-fns"

const sedes_compra = [
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
const productos = [
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
const categorias_producto = [
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

export function ProductInfoForm() {
  const defaultValues = useFormStore(state => state.productInfo)
  const setProductInfo = useFormStore(state => state.setProductInfo)
  const nextStep = useFormStore(state => state.nextStep)
  const form = useForm<ProductInfoFormValues>({
    resolver: zodResolver(productInfoFormSchema),
    defaultValues,
  })
  const onSubmit = (data: any) => {
    console.log(data)
    setProductInfo(data)
    nextStep()
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Select slug="purchasingHeadquarters" label="Sede de Compra" descripcion="Ingrese la sede de compra del producto" placeholderInput="Ingresar sede de compra..." items={sedes_compra} placeholderCommand="Buscar sede de compra..." form={form} />
        <Input slug="invoiceNumber" label="Numero de Factura" descripcion="Ingrese el número de factura del producto" placeholder="Ingresar número de factura..." form={form} />
        <Select slug="productCategory" label="Categoría del Producto" descripcion="Ingrese la categoría del producto" placeholderInput="Ingresar categoría del producto..." items={categorias_producto} placeholderCommand="Buscar categoría del producto..." form={form} />
        <Select slug="product" label="Producto" descripcion="Ingrese el producto" placeholderInput="Ingresar producto..." items={productos} placeholderCommand="Buscar producto..." form={form} />
        <NavButtons />
      </form>
    </Form>
  )
}
