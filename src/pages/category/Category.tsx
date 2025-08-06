import { Button, Pagination, Container, Row, Col } from "react-bootstrap";
import Post from "../../components/post/Post";
import Search from "../../components/search/Search";
import styles from "./Category.module.css";

const Category = () => {
    return(
        <>
        <div className={`d-flex flex-column justify-content-center ${styles.banner}`}>
            <h1>자원봉사 모집</h1>
            <h4>구조된 아이들에게 돌봄의 손길을 전해주세요.<br/>함께하는 시간이 큰 변화를 만듭니다.</h4>

        </div>

        <Container fluid className="content-grid">
            <Row className="align-items-center top-105 mb-2">
            <Col md={4}><Search/></Col>
            <Col col="auto" className="d-flex justify-content-end"><Button>공고 등록하기<span className={styles.writtenIcon}></span></Button></Col>
            </Row>

            <Row className="border">
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </Row>

            <Row className="border">
                <Pagination className="d-flex justify-content-center">
                    <Pagination.First/>
                    <Pagination.Prev/>
                    <Pagination.Ellipsis />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Item active>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Next/>
                    <Pagination.Last/>
                </Pagination>
            </Row>
        </Container>
        </>
    )
};

export default Category;