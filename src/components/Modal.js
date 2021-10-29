import './Modal.css'

export default function Modal({children, handleModal}) {
    return (
        <div className="modal-backdrop">
            <div className="modal">
                {children}
                <button
                onClick={handleModal}>close</button>
            </div>
            
        </div>
    )
}
