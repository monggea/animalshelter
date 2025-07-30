import styles from './Notice.module.css';
import { Badge } from "react-bootstrap";

const Notice =()=>{
    return(
        <>
        <ul className={`d-flex bg-color btn-custom ${styles.header}`}>
            <li className="col-1 d-flex align-items-center justify-content-center">No</li>
            <li className="col-7 d-flex align-items-center justify-content-center">제목</li>
            <li className="col-2 d-flex align-items-center justify-content-center">작성일</li>
            <li className="col-2 d-flex align-items-center justify-content-center">조회수</li>
        </ul>

        <ul className={`d-flex ${styles.content}`}>
            <li className="col-1 d-flex align-items-center justify-content-center btn-custom">7</li>

            <li className="col-7 d-flex align-items-center body-large gap-3">
                <span className={styles.title}>종합유기견보호센터의 새 모바일웹&어플이 출시되었습니다.</span>
                <Badge className={`secondary-bg tab ${styles.newTag}`}>NEW!</Badge>
            </li>

            <li className="col-2 d-flex align-items-center justify-content-center text-dark">2018-10-06</li>

            <li className="col-2 d-flex align-items-center justify-content-center text-dark gap-2">
                <div className={styles.icon}></div>
                19873
            </li>
        </ul>
        </>
    )
};

export default Notice;