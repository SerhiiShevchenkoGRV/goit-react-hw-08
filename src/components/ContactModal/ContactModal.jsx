import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { closeModal } from "../../redux/modal/slice";
import { selectContactId, selectOpenModal } from "../../redux/modal/selectors";
import Modal from "react-modal";
import s from "./ContactModal.module.css";

Modal.setAppElement("#root");

export default function ContactModal() {
  const modalIsOpen = useSelector(selectOpenModal);
  const id = useSelector(selectContactId);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
    dispatch(closeModal());
  };
  const handleClose = () => dispatch(closeModal());

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [modalIsOpen]);

  return (
    <Modal
      className={s.modal}
      overlayClassName={s.modalOverlay}
      isOpen={modalIsOpen}
      onRequestClose={handleClose}
      contentLabel="Example Modal"
    >
      <div className={s.modalCont}>
        <p>Are you sure?</p>
        <div className={s.btnsCont}>
          <button className={s.yesBtn} onClick={handleDelete}>
            Yes
          </button>
          <button className={s.noBtn} onClick={handleClose}>
            No
          </button>
        </div>
      </div>
    </Modal>
  );
}
