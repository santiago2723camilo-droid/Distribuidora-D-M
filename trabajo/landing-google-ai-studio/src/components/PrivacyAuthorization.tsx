import { useId, useRef } from 'react';
import type { RefObject } from 'react';

export const privacyPreview = import.meta.env.DEV && import.meta.env.MODE === 'privacy-draft';
export const privacyPolicyPath = '/politica-de-datos.html';
export const privacyPreviewFeedback = 'Prueba completada. No se abrió WhatsApp ni se envió información.';

export function usePrivacyAuthorization() {
  const inputRef = useRef<HTMLInputElement>(null);

  return {
    inputRef,
    validate: () => !privacyPreview || (inputRef.current?.reportValidity() ?? false),
    reset: () => {
      if (!inputRef.current) return;
      inputRef.current.checked = false;
      inputRef.current.setCustomValidity('');
    },
  };
}

interface PrivacyAuthorizationProps {
  inputRef: RefObject<HTMLInputElement | null>;
  purpose: string;
}

export function PrivacyAuthorization({ inputRef, purpose }: PrivacyAuthorizationProps) {
  const checkboxId = useId();
  const noticeId = useId();

  if (!privacyPreview) return null;

  return (
    <div className="rounded-xl border border-[#dae3f4] bg-[#eff4ff] p-3 text-sm text-[#444650]">
      <p id={noticeId}>
        D&M usará los datos que compartas para {purpose}. La solicitud se prepara para WhatsApp.
      </p>
      <a className="inline-flex min-h-11 items-center font-semibold text-[#001b4b] underline"
        href={privacyPolicyPath} target="_blank" rel="noopener noreferrer">
        Leer la Política de Tratamiento de Datos (borrador)
      </a>
      <label className="flex min-h-11 items-start gap-3 rounded-lg py-2 font-medium text-[#001b4b]" htmlFor={checkboxId}>
        <input
          ref={inputRef}
          id={checkboxId}
          type="checkbox"
          required
          aria-describedby={noticeId}
          onInvalid={(event) => event.currentTarget.setCustomValidity('Marca la casilla para autorizar el tratamiento de tus datos.')}
          onChange={(event) => event.currentTarget.setCustomValidity('')}
          className="mt-0.5 size-5 shrink-0 accent-[#001b4b]"
        />
        Autorizo a Distribuidora D&M a tratar mis datos para atender esta solicitud.
      </label>
    </div>
  );
}
