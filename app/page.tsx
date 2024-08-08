"use client";
import { Separator } from "@/components/ui/separator";
import { ProductInfoForm } from "../components/multiStepForm/stepForms/product-info-form";
import { PersonalInfoForm } from "../components/multiStepForm/stepForms/personal-info-form";
import { FailInfoForm } from "../components/multiStepForm/stepForms/fail-info-form";
import { Toaster } from "sonner";

import { useState } from "react";
import { useFormStore } from "@/components/store/useFormStore";
import { Button } from "@/components/ui/button";

export default function SettingsAccountPage() {
  const complete = useFormStore((state) => state.complete);
  const step = useFormStore((state) => state.step);
  const resetForm = useFormStore((state) => state.resetForm);
  function renderFormByStep(step: number) {
    console.log(step);
    switch (step ) {
        case 1:
            return <PersonalInfoForm />;
        case 2:
            return <ProductInfoForm />;
        case 3:
            return <FailInfoForm />;
        default:
            return <PersonalInfoForm />;
    }
  }
  return (
    <main className="py-16 min-h-screen flex items-center justify-center">
      <div
        className={`${
          !complete ? "" : "hidden"
        }`}
      >
        <div className="w-[318px] mx-auto space-y-6 ">
          <div>
            <h3 className="text-lg font-medium">Gestión de Garantía</h3>
            <p className="text-sm text-muted-foreground">
              Utilize los datos utilizados en el momento de la compra para
              gestionar la garantía.
            </p>
          </div>
          <Separator />
          {renderFormByStep(step)}
        </div>
      </div>
      <div
        className={`${
          complete ? "flex" : "hidden"
        } px-12 space-y-6 justify-center items-center text-center`}
      >
        <div>
          <h3 className="text-2xl font-medium mb-4">Gracias por elegir <span className="font-bold text-blue-400">BLUEO</span></h3>
          <p className="text-sm text-muted-foreground">
            Estamos comprometidos con generar la mejor experiencia para nuestros
            cliente, por eso nos comprometemos a generar una respuesta en menos
            de 48 horas.
          </p>
          <Button onClick={resetForm} className="mt-8">
                Realizar otra gestión
            </Button>
        </div>
      </div>
      <Toaster />
    </main>
  );
}
