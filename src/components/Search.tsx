import React, { useState } from 'react';
import { Form, Button, Dropdown, InputGroup } from "react-bootstrap";

const Search = () => {

//     const [dropdownA, setDropdownA] = useState({region:"", detail:""});
//     const [tempDropdownA, setTempDropdownA] = useState({region:"", detail:""});
//     const [dropdownB, setDropdownB] = useState("");
//     const [tempDropdownB, setTempDropdownB] = useState("");

//     const [formA, setFormA] = useState("");
//     const [formB, setFormB] = useState("");

//     const applyDropdownA = () => {setDropdownA(tempDropdownA)};
//     const applyDropdownB = () => {setDropdownB(tempDropdownB)};

//     const handleSearch = () => {
//         alert(
//             `작동확인
//             \n드롭다운A: ${dropdownA}
//             \n드롭다운B: ${dropdownB}
//             \n입력창A: ${formA}
//             \n입력창B: ${formB}`
//         )
//     };

    return(
        <>
{/* //         <InputGroup>
//             <Dropdown>
//                 <Dropdown.Toggle>
//                 {dropdownA.region || dropdownA.detail ? `${dropdownA.region} / ${dropdownA.detail}` : "지역 선택"}
//                 </Dropdown.Toggle>

//                 <Dropdown.Menu>
//                     <Dropdown.Header>지역</Dropdown.Header>
//                     <Dropdown.Item onClick={() => (...prev, region: "전국")}>전국</Dropdown.Item>
//                     <Dropdown.Item onClick={() => (...prev, region: "서울특별시")}>서울특별시</Dropdown.Item>
//                     <Dropdown.Item onClick={() => (...prev, region: "부산광역시")}>부산광역시</Dropdown.Item>
//                     <Dropdown.Item onClick={() => (...prev, region: "대구광역시")}>대구광역시</Dropdown.Item>
//                     <Dropdown.Item onClick={() => (...prev, region: "인천광역시")}>인천광역시</Dropdown.Item>
//                     <Dropdown.Item onClick={() => (...prev, region: "광주광역시")}>광주광역시</Dropdown.Item>
//                     <Dropdown.Item onClick={() => (...prev, region: "세종특별자치시")}>세종특별자치시</Dropdown.Item>
//                     <Dropdown.Item onClick={() => (...prev, region: "대전광역시")}>대전광역시</Dropdown.Item>
//                     <Dropdown.Item onClick={() => (...prev, region: "울산광역시")}>울산광역시</Dropdown.Item>

//                     <Dropdown.Header>상세</Dropdown.Header>
//                     <Dropdown.Item onClick={() => setDropdownA("전체")}>전체</Dropdown.Item>
//                     <Dropdown.Item onClick={() => setDropdownA("각종 구/군")}>각종 구/군</Dropdown.Item>
//                 </Dropdown.Menu>
//             </Dropdown>

//             <Dropdown>
//                 <Dropdown.Toggle>{dropdownB || "동물 분류"}</Dropdown.Toggle>
//                 <Dropdown.Menu>
//                     <Dropdown.Item onClick={() => setDropdownB("전체")}>전체</Dropdown.Item>
//                     <Dropdown.Item onClick={() => setDropdownB("강아지")}>강아지</Dropdown.Item>
//                     <Dropdown.Item onClick={() => setDropdownB("고양이")}>고양이</Dropdown.Item>
//                     <Dropdown.Item onClick={() => setDropdownB("그 외 동물")}>그 외 동물</Dropdown.Item>
//                 </Dropdown.Menu>
//             </Dropdown>

//             <Form.Control
//              type="text"
//              placeholder="검색어를 입력해 주세요"
//              value={formA}
//              onChange={(e) => setFormA(e.target.value)}
//             ></Form.Control>

//             <Form.Control
//              type="text"
//              placeholder="제목, 단체명을 입력해 주세요"
//              value={formB}
//              onChange={(e) => setFormB(e.target.value)}
//             ></Form.Control>

//             <Button onClick={handleSearch}><div className="icon"></div>검색</Button>
//         </InputGroup> */}
        </>
    )
}

export default Search;