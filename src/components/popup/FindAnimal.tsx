import { useState } from 'react';
import styles from './FindAnimal.module.scss';
import { Modal, Button } from 'react-bootstrap';

const Find = () => {

    const [show, setShow] = useState(true);
    return(
        <>
        <Modal
            size="lg"
            show={show}
            centered
            aria-labelledby="modal-title"
            className={styles.popup}
            >

            <Modal.Header
                className={`primary-light-bg text ${styles.top}`}
                aria-hidden="true"
                >각종 아이콘과 파란색
            </Modal.Header>

            <Modal.Body className={`bg-color ${styles.content}`}>
                <h2 id="modal-title"
                    className={`text-center ${styles.title}`}
                    ><mark className="secondary-light-bg text">유기동물 찾는 방법</mark>
                </h2>

                <ul>
                    <li className="d-flex">
                        <div className={styles.lIcon} aria-hidden="true"/>
                        <p className={styles.txtSize}>실종동물 등록 및 빠른 전단지 작성</p>
                        <Button aria-label="이동하기">
                            <div className={styles.rIcon} aria-hidden="true"/>
                        </Button>
                    </li>

                    <li className="d-flex">
                        <div className={styles.lIcon} aria-hidden="true"/>
                        <p className={styles.txtSize}>보호중인 유기동물리스트 확인</p>
                        <Button aria-label="이동하기">
                            <div className={styles.rIcon} aria-hidden="true"/>
                        </Button>
                    </li>

                    <li className="d-flex">
                        <div className={styles.lIcon} aria-hidden="true"/>
                        <p className={styles.txtSize}>실종지역 유기동물보호소 확인</p>
                        <Button aria-label="이동하기">
                            <div className={styles.rIcon} aria-hidden="true"/>
                        </Button>
                    </li>
                </ul>
            </Modal.Body>
        </Modal>
        </>
    )
}

export default Find;