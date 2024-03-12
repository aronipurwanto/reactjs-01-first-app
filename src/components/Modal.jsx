import classes from './Modal.module.css';
import {useNavigate} from "react-router";
// eslint-disable-next-line react/prop-types
function Modal({children}){

    const navigate =  useNavigate();

    function closeHandler(){
        navigate('..')
    }

    return (
    <>
        <div className={classes.backdrop} onClick={closeHandler}/>
        <dialog open className={classes.modal}>
            {children}
        </dialog>
    </>
    );
}

export default Modal;