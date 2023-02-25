import React, { useContext, useState } from "react";
// import {
//   Search,
//   Home,
//   Notifications,
//   MessageRounded,
//   Bookmark,
//   Person,
//   Settings,
// } from "@mui/icons-material";
import "./Sidebar.module.css";
import Link from "next/link";
import { searchCall } from "../apiCalls";
import { AuthContext } from "../state/AuthContext";

// import CloseFriend from "../closeFriend/CloseFriend";
// import { Users } from "../../dummyData";
// import { Link } from "react-router-dom";

//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
{
  /* <Router>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/profile/:username" element={<Profile />} />
  {/*:usernameには任意の文字が挿入可能 */
}
// </Routes>
// </Router>
//linkを使うには上記文言を元に定義する必要がある
//今回はapp.jsに定義をしている為、利用可能

export default function Sidebar() {
  const { user, search, isFetchingUser, errorUser, dispatch } =
    useContext(AuthContext); //AuthContext.providerのvalueで宣言している値を取得できる

  const handleSubmit = (e) => {
    e.preventDefault(); //リロードをしないようにするイベントハンドラー

    // console.log(email.current.value)
    // console.log(password.current.value)
    searchCall(
      //第一引数にはオブジェクトとして値を渡す
      {
        search: e.target.innerText,
      },
      //第二引数にはdispatch自体の関数を渡す
      dispatch
    );
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <button
          className="sidebarListItemText accordionBtn"
          type="button"
          aria-controls="contents"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          北海道地方
        </button>
        <div
          className="sidebarListItemIn lastchild accordion-body"
          id="contents"
          aria-hidden={!isOpen}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              北海道
            </button>
          </Link>
        </div>

        <button
          className="sidebarListItemText accordionBtn"
          type="button"
          aria-controls="contents"
          aria-expanded={isOpen2}
          onClick={() => setIsOpen2(!isOpen2)}
        >
          東北地方
        </button>
        <div
          className="sidebarListItemIn accordion-body2"
          id="contents"
          aria-hidden={!isOpen2}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              青森県
            </button>
          </Link>
        </div>
        <div
          className="sidebarListItemIn accordion-body2"
          id="contents"
          aria-hidden={!isOpen2}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              岩手県
            </button>
          </Link>
        </div>
        <div
          className="sidebarListItemIn accordion-body2"
          id="contents"
          aria-hidden={!isOpen2}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              宮城県
            </button>
          </Link>
        </div>
        <div
          className="sidebarListItemIn accordion-body2"
          id="contents"
          aria-hidden={!isOpen2}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              秋田県
            </button>
          </Link>
        </div>
        <div
          className="sidebarListItemIn accordion-body2"
          id="contents"
          aria-hidden={!isOpen2}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              山形県
            </button>
          </Link>
        </div>
        <div
          className="sidebarListItemIn accordion-body2 lastchild"
          id="contents"
          aria-hidden={!isOpen2}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              福島県
            </button>
          </Link>
        </div>

        <button
          className="sidebarListItemText accordionBtn"
          type="button"
          aria-controls="contents"
          aria-expanded={isOpen3}
          onClick={() => setIsOpen3(!isOpen3)}
        >
          関東地方
        </button>
        <div
          className="sidebarListItemIn accordion-body3"
          id="contents"
          aria-hidden={!isOpen3}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              茨城県
            </button>
          </Link>
        </div>
        <div
          className="sidebarListItemIn accordion-body3"
          id="contents"
          aria-hidden={!isOpen3}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              栃木県
            </button>
          </Link>
        </div>
        <div
          className="sidebarListItemIn accordion-body3"
          id="contents"
          aria-hidden={!isOpen3}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              群馬県
            </button>
          </Link>
        </div>
        <div
          className="sidebarListItemIn accordion-body3"
          id="contents"
          aria-hidden={!isOpen3}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              埼玉県
            </button>
          </Link>
        </div>
        <div
          className="sidebarListItemIn accordion-body3"
          id="contents"
          aria-hidden={!isOpen3}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              千葉県
            </button>
          </Link>
        </div>
        <div
          className="sidebarListItemIn accordion-body3"
          id="contents"
          aria-hidden={!isOpen3}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              東京都
            </button>
          </Link>
        </div>
        <div
          className="sidebarListItemIn accordion-body3 lastchild"
          id="contents"
          aria-hidden={!isOpen3}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              神奈川県
            </button>
          </Link>
        </div>

        <button
          className="sidebarListItemText accordionBtn"
          type="button"
          aria-controls="contents"
          aria-expanded={isOpen4}
          onClick={() => setIsOpen4(!isOpen4)}
        >
          中部地方
        </button>
        <div
          className="sidebarListItemIn accordion-body4"
          id="contents"
          aria-hidden={!isOpen4}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              新潟県
            </button>
          </Link>
        </div>
        <div
          className="sidebarListItemIn accordion-body4"
          id="contents"
          aria-hidden={!isOpen4}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              富山県
            </button>
          </Link>
        </div>
        <div
          className="sidebarListItemIn accordion-body4"
          id="contents"
          aria-hidden={!isOpen4}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              石川県
            </button>
          </Link>
        </div>
        <div
          className="sidebarListItemIn accordion-body4"
          id="contents"
          aria-hidden={!isOpen4}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              福井県
            </button>
          </Link>
        </div>
        <div
          className="sidebarListItemIn accordion-body4"
          id="contents"
          aria-hidden={!isOpen4}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              山梨県
            </button>
          </Link>
        </div>
        <div
          className="sidebarListItemIn accordion-body4"
          id="contents"
          aria-hidden={!isOpen4}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              長野県
            </button>
          </Link>
        </div>
        <div
          className="sidebarListItemIn accordion-body4"
          id="contents"
          aria-hidden={!isOpen4}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              岐阜県
            </button>
          </Link>
        </div>
        <div
          className="sidebarListItemIn accordion-body4"
          id="contents"
          aria-hidden={!isOpen4}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              静岡県
            </button>
          </Link>
        </div>
        <div
          className="sidebarListItemIn accordion-body4 lastchild"
          id="contents"
          aria-hidden={!isOpen4}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              愛知県
            </button>
          </Link>
        </div>

        <button
          className="sidebarListItemText accordionBtn"
          type="button"
          aria-controls="contents"
          aria-expanded={isOpen5}
          onClick={() => setIsOpen5(!isOpen5)}
        >
          近畿地方
        </button>
        <div
          className="sidebarListItemIn accordion-body5"
          id="contents"
          aria-hidden={!isOpen5}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              三重県
            </button>
          </Link>
        </div>
        <div
          className="sidebarListItemIn accordion-body5"
          id="contents"
          aria-hidden={!isOpen5}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              滋賀県
            </button>
          </Link>
        </div>
        <div
          className="sidebarListItemIn accordion-body5"
          id="contents"
          aria-hidden={!isOpen5}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              京都府
            </button>
          </Link>
        </div>
        <div
          className="sidebarListItemIn accordion-body5"
          id="contents"
          aria-hidden={!isOpen5}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              大阪府
            </button>
          </Link>
        </div>
        <div
          className="sidebarListItemIn accordion-body5"
          id="contents"
          aria-hidden={!isOpen5}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              兵庫県
            </button>
          </Link>
        </div>
        <div
          className="sidebarListItemIn accordion-body5"
          id="contents"
          aria-hidden={!isOpen5}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              奈良県
            </button>
          </Link>
        </div>
        <div
          className="sidebarListItemIn accordion-body5 lastchild"
          id="contents"
          aria-hidden={!isOpen5}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              和歌山県
            </button>
          </Link>
        </div>

        <button
          className="sidebarListItemText accordionBtn"
          type="button"
          aria-controls="contents"
          aria-expanded={isOpen6}
          onClick={() => setIsOpen6(!isOpen6)}
        >
          中国地方
        </button>
        <div
          className="sidebarListItemIn accordion-body6"
          id="contents"
          aria-hidden={!isOpen6}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              鳥取県
            </button>
          </Link>
        </div>
        <div
          className="sidebarListItemIn accordion-body6"
          id="contents"
          aria-hidden={!isOpen6}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              島根県
            </button>
          </Link>
        </div>
        <div
          className="sidebarListItemIn accordion-body6"
          id="contents"
          aria-hidden={!isOpen6}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              岡山県
            </button>
          </Link>
        </div>
        <div
          className="sidebarListItemIn accordion-body6"
          id="contents"
          aria-hidden={!isOpen6}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              広島県
            </button>
          </Link>
        </div>
        <div
          className="sidebarListItemIn accordion-body6 lastchild"
          id="contents"
          aria-hidden={!isOpen6}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              山口県
            </button>
          </Link>
        </div>

        <button
          className="sidebarListItemText accordionBtn"
          type="button"
          aria-controls="contents"
          aria-expanded={isOpen7}
          onClick={() => setIsOpen7(!isOpen7)}
        >
          四国地方
        </button>
        <div
          className="sidebarListItemIn accordion-body7"
          id="contents"
          aria-hidden={!isOpen7}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              徳島県
            </button>
          </Link>
        </div>
        <div
          className="sidebarListItemIn accordion-body7"
          id="contents"
          aria-hidden={!isOpen7}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              香川県
            </button>
          </Link>
        </div>
        <div
          className="sidebarListItemIn accordion-body7"
          id="contents"
          aria-hidden={!isOpen7}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              愛媛県
            </button>
          </Link>
        </div>
        <div
          className="sidebarListItemIn accordion-body7 lastchild"
          id="contents"
          aria-hidden={!isOpen7}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              高知県
            </button>
          </Link>
        </div>

        <button
          className="sidebarListItemText accordionBtn"
          type="button"
          aria-controls="contents"
          aria-expanded={isOpen8}
          onClick={() => setIsOpen8(!isOpen8)}
        >
          九州地方
        </button>
        <div
          className="sidebarListItemIn accordion-body8"
          id="contents"
          aria-hidden={!isOpen8}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              福岡県
            </button>
          </Link>
        </div>
        <div
          className="sidebarListItemIn accordion-body8"
          id="contents"
          aria-hidden={!isOpen8}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              佐賀県
            </button>
          </Link>
        </div>
        <div
          className="sidebarListItemIn accordion-body8"
          id="contents"
          aria-hidden={!isOpen8}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              長崎県
            </button>
          </Link>
        </div>
        <div
          className="sidebarListItemIn accordion-body8"
          id="contents"
          aria-hidden={!isOpen8}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              熊本県
            </button>
          </Link>
        </div>
        <div
          className="sidebarListItemIn accordion-body8"
          id="contents"
          aria-hidden={!isOpen8}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              大分県
            </button>
          </Link>
        </div>
        <div
          className="sidebarListItemIn accordion-body8"
          id="contents"
          aria-hidden={!isOpen8}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              宮崎県
            </button>
          </Link>
        </div>
        <div
          className="sidebarListItemIn accordion-body8"
          id="contents"
          aria-hidden={!isOpen8}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              鹿児島県
            </button>
          </Link>
        </div>
        <div
          className="sidebarListItemIn accordion-body8 lastchild"
          id="contents"
          aria-hidden={!isOpen8}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
          <button
              className="sidebarListItemText accordionBtn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >沖縄県</button>
          </Link>
        </div>

        <hr className="sidebarHr" />
        <ul className="sidebarFriendList"></ul>
      </div>
      <style jsx>{`
        .accordion-body {
          max-height: ${isOpen
            ? "1000px"
            : 0}; /* ウィンドウ幅が変わっても高さが1000pxを超えないことを想定 */
          transition: max-height 0.3s ease-out;
          overflow: hidden;
        }
        .accordion-body2 {
          max-height: ${isOpen2
            ? "1000px"
            : 0}; /* ウィンドウ幅が変わっても高さが1000pxを超えないことを想定 */
          transition: max-height 0.3s ease-out;
          overflow: hidden;
        }
        .accordion-body3 {
          max-height: ${isOpen3
            ? "1000px"
            : 0}; /* ウィンドウ幅が変わっても高さが1000pxを超えないことを想定 */
          transition: max-height 0.3s ease-out;
          overflow: hidden;
        }
        .accordion-body4 {
          max-height: ${isOpen4
            ? "1000px"
            : 0}; /* ウィンドウ幅が変わっても高さが1000pxを超えないことを想定 */
          transition: max-height 0.3s ease-out;
          overflow: hidden;
        }
        .accordion-body5 {
          max-height: ${isOpen5
            ? "1000px"
            : 0}; /* ウィンドウ幅が変わっても高さが1000pxを超えないことを想定 */
          transition: max-height 0.3s ease-out;
          overflow: hidden;
        }
        .accordion-body6 {
          max-height: ${isOpen6
            ? "1000px"
            : 0}; /* ウィンドウ幅が変わっても高さが1000pxを超えないことを想定 */
          transition: max-height 0.3s ease-out;
          overflow: hidden;
        }
        .accordion-body7 {
          max-height: ${isOpen7
            ? "1000px"
            : 0}; /* ウィンドウ幅が変わっても高さが1000pxを超えないことを想定 */
          transition: max-height 0.3s ease-out;
          overflow: hidden;
        }
        .accordion-body8 {
          max-height: ${isOpen8
            ? "1000px"
            : 0}; /* ウィンドウ幅が変わっても高さが1000pxを超えないことを想定 */
          transition: max-height 0.3s ease-out;
          overflow: hidden;
        }
        .accordionBtn {
          margin-top: 5px;
          margin-left: 5px;
        }
      `}</style>
    </div>
  );
}
