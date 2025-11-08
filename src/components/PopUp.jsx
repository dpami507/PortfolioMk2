import './PopUp.css'
import { getImagePath } from '../utils/helpers'

function Popup({isOpen, onClose, img, link, title, description}) {
    if (!isOpen) return null;

    return (
    <>
        <div className='popupContainer'>
            <div>
                <div>
                    <button onClick={onClose} className='close'>
                        <span></span>
                        <span></span>
                    </button>
                    <h3>{title}</h3>
                </div>
                <p>{description}</p>
                <a href={link} target="_blank">See More</a>
            </div>
            <img src={getImagePath(img)} alt="" />
        </div>
    </>
    )
}

export default Popup
