import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { data } from './data';
import { useNavigate, useParams } from 'react-router-dom';

function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const item = data().find((item) => item.id === Number(id));
    if (item) {
      setDetail(item);
      setShowModal(true);
    } else {
      // Xử lý khi không tìm thấy phần tử với id tương ứng
      // Ví dụ: navigate đến trang lỗi hoặc hiển thị thông báo lỗi
    }
  }, [id]);

  const handleClose = () => {
    setShowModal(false);
    navigate("/menu");
  }

  return (
    <div>
      {detail ? (
        <div>
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal Title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>{detail.title}</h4>
              <p>ID: {detail.id}</p>
              <img className="item__img" src={detail.img} alt={detail.title} />
              <p>Price: {detail.price}$</p>
              <p>Description: {detail.desc}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Detail;
