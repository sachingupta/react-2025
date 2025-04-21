/**
 * Overlay: The overlay is meant to cover the whole screen. 
 * A combination of position: fixed and inset: 0 will render the element to cover the entire screen. Set a semi-transparent color for the background, e.g. rgba(0, 0, 0, 0.7).
Modal dialog: The modal dialog can be placed within the overlay element.
 Centering the modal dialog on the screen is thus done by the overlay, which sets the contents to be centered within itself. There are multiple ways to achieve centering and the simplest modern way is to use display: flex; align-items: center; justify-content: center styles.
Modal title: Modal dialogs represent a new context separate from the main 
page content. Using <h1> establishes the modal's content as its own 
document outline, which clearly indicates the primary heading of this
 new context to screen readers.

 In React, rendering outside the DOM hierarchy of the parent component 
 can be achieved using React Portals. Other common use cases of
  portals include tooltips, dropdown menus, popovers.
 */

import { useState } from "react";
import { createPortal } from "react-dom";
import './ModalDialog.css';

export function ModalLauncer() {
    const [open, setOpen] = useState(false);
    return (
        <div>
          <button onClick={() => setOpen(true)}>
            Show modal
          </button>
          <ModalDialog
            open={open}
            title="Modal Title"
            onClose={() => {
              setOpen(false);
            }}>
            One morning, when Gregor Samsa woke from troubled
            dreams, he found himself transformed in his bed into
            a horrible vermin. He lay on his armour-like back,
            and if he lifted his head a little he could see his
            brown belly, slightly domed and divided by arches
            into stiff sections.
          </ModalDialog>
        </div>
      );
}

export function ModalDialog({ children, open = false, title, onClose}: Readonly<{
    children: React.ReactNode;
    open?: boolean;
    title: string;
    onClose: () => void;
  }>) {
    if (!open) {
        return null;
    }

    return createPortal(
      <div className="modal-overlay">
        <div className="modal">
          <h1 className="modal-title">{title}</h1>
          <div>{children}</div>
          <button onClick={onClose}>Close</button>
        </div>
      </div>,
      document.body,
    );
}