import { useRef } from "react"
import { createPortal } from "react-dom";

const Modal = ({ title, close, children }) => {
  const outClicked = useRef(null);
  return createPortal(
    <div
      className="modal-overlay"
      onClick={e => e.target == outClicked.current && close()}
      ref={outClicked}>
      <div className="modal-panel">
        <h1 className="text-secondary-500 text-xl font-bold">{title}</h1>
        <div>
          {children}
        </div>
      </div>
    </div>
    , document.body
  )
}

export default Modal
