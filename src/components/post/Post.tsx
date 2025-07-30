import { Badge } from 'react-bootstrap';
import styles from './Post.module.scss';

const Post = () => {
    return(
        <section>
            <ul><li>
            <article className={`d-flex justify-content-between w-100 ${styles.wrapper}`} aria-labelledby="post-title">
                <div className={`post-wrapper d-flex flex-column justify-content-between ${styles.content}`}>
                    <div className="post-content d-flex flex-column gap-3">
                        <div className="d-flex gap-3 align-items-center">

                            <h3 id="post-title" className={`${styles.title}`}
                            >제목은 아주 길어질 수도 있습니다.</h3>

                            <Badge
                                aria-label="모집 종료"
                                className={`bg-color-badge tab ${styles.titleBadge}`}
                                >종료
                            </Badge>

                            <Badge
                                aria-label="새로운 게시글"
                                className={`secondary-bg tab ${styles.titleBadge}`}
                                >NEW!
                            </Badge>

                        </div>

                        <div className="d-md-flex gap-4 align-items-center">
                            <dl className="d-flex gap-2 align-items-baseline">
                            <dt className="caption">모집 기간</dt>
                            <dd className="body-small">상시 모집</dd>
                            </dl>

                            <dl className="d-flex gap-2 align-items-baseline">
                            <dt className="caption">봉사 기간</dt>
                            <dd className="body-small">0000-00-00 <br className="d-block d-md-none"/>~ 0000-00-00</dd>
                            </dl>

                            <dl className="d-flex gap-2 align-items-baseline">
                            <dt className="caption">나눔 종류</dt>
                            <dd className="body-small">OO</dd>
                            </dl>
                        </div>

                        <p className={`${styles.txt}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, sunt! Aperiam corporis voluptas repellat ea, numquam fugit aliquam blanditiis cum obcaecati autem ad, enim iste dolorem, eligendi praesentium laborum quis?</p>
                        
                        <ul className="tag d-flex gap-2">
                            <li className={`tab secondary-dark-line ${styles.hashtag}`}>#자율 해시태그</li>
                            <li className={`tab secondary-dark-line ${styles.hashtag}`}>#자율 해시태그</li>
                        </ul>
                    
                    </div>



                    <ul className="post-meta d-flex gap-5 align-items-center">

                        <li className="region tab d-flex gap-2 align-items-center">
                            <strong className={`blend-bg ${styles.region}`}>지역</strong>
                            <span className="blend d-none d-md-inline">상세</span>
                        </li>

                        <li className="nav-small text-dark">작성자</li>

                        <li>
                        <time
                            aria-label="작성일 0000년 00월 00일"
                            dateTime="0000-00-00"
                            className="nav-small text-light"
                            >0000-00-00
                        </time>
                        </li>

                        <li className="d-flex gap-2 align-items-center nav-small text-light">
                        <div
                            aria-label="댓글수"
                            className={styles.icon}></div>
                            0
                        </li>
                    </ul>
                </div>

                <img src="" alt="반려동물 사진" aria-hidden="true"/>
            </article>
            <hr/>
            </li></ul>
        </section>
    )
}

export default Post;