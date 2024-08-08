import { z } from "zod";
export const personalInfoFormSchema = z.object({
    document: z
        .string()
        .min(2, {
            message: "Por favor, ingrese un número de identificación.",
        }),
    name: z
        .string()
        .min(2, {
            message: "Por favor, ingrese un nombre.",
        }),
    phone: z
        .string()
        .min(2, {
            message: "Por favor, ingrese un número de teléfono.",
        })
});

export type PersonalInfoFormValues = z.infer<typeof personalInfoFormSchema>;

export const failInfoFormSchema = z.object({
    failType: z
        .string()
        .min(2, {
            message: "Por favor, seleccione un tipo de fallo.",
        }),
    failDescription: z
        .string()
        .min(2, {
            message: "Por favor, ingrese una descripción del fallo.",
        }),
});

export type FailInfoFormValues = z.infer<typeof failInfoFormSchema>;

export const productInfoFormSchema = z.object({
    purchasingHeadquarters: z
        .string()
        .min(2, {
            message: "Por favor, ingrese una sede de compra.",
        }),
    invoiceNumber: z
        .string(),
    productCategory: z
        .string()
        .min(2, {
            message: "Por favor, ingrese una categoría de producto.",
        }),
    product: z
        .string()
        .min(2, {
            message: "Por favor, ingrese un producto.",
        }),
});

export type ProductInfoFormValues = z.infer<typeof productInfoFormSchema>;