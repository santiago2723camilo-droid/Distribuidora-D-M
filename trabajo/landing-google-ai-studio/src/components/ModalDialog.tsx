import { useLayoutEffect, useRef, type ReactNode } from 'react';

interface ModalDialogProps {
  isOpen: boolean;
  titleId: string;
  className: string;
  onClose: () => void;
  children: ReactNode;
}

export function ModalDialog({ isOpen, titleId, className, onClose, children }: ModalDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen || !dialog) return;

    dialog.showModal();
    return () => dialog.close();
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      className={`site-dialog fixed inset-0 m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] overflow-hidden rounded-2xl border border-[#dae3f4] bg-white text-[#131c28] shadow-2xl open:flex open:flex-col ${className}`}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
    >
      {children}
    </dialog>
  );
}
