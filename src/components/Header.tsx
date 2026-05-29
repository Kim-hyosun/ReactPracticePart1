import { useState } from 'react';
import { asset } from '../lib/asset';

// 원본 번들의 nav 메뉴 데이터 (회사소개/사업분야/제품안내/커뮤니티/고객지원)
const MENUS = [
  { id: 1, name: '회사소개', subs: ['회사개요', 'CEO인사말', '오시는길', ' '] },
  { id: 2, name: '사업분야', subs: ['사업분야01', '사업분야02', '사업분야03', '사업분야04'] },
  { id: 3, name: '제품안내', subs: ['제품안내01', '제품안내02', '제품안내03', '제품안내04'] },
  { id: 4, name: '커뮤니티', subs: ['공지사항', '홍보자료', '채용안내', ' '] },
  { id: 5, name: '고객지원', subs: ['1:1문의', '묻고답하기', 'FAQ', ' '] },
];

const ICONS = [
  { id: 1, url: 'assets/images/icon-home.png', alt: '홈버튼' },
  { id: 2, url: 'assets/images/icon-contact.png', alt: '오시는길버튼' },
];

function Header() {
  const [ishovering, setIshovering] = useState(false);

  return (
    <header>
      <h1 className="logo">logo</h1>

      <nav>
        <ul className="menu">
          {MENUS.map((menu) => (
            <li
              className="mainmenuLI"
              key={menu.id}
              onMouseOver={() => setIshovering(!ishovering)}
            >
              <a href="#" className="mainmenu">
                {menu.name}
              </a>
              {ishovering ? (
                <ul className="submenu">
                  {menu.subs.map((sub, i) => (
                    <li key={i}>
                      <a href="#" className="sub">
                        {sub}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>

      <ul className="icons">
        {ICONS.map((icon) => (
          <li key={icon.id}>
            <a href="#">
              <img src={asset(icon.url)} alt={icon.alt} />
            </a>
          </li>
        ))}
      </ul>

      {ishovering ? <div className="submenuBG" /> : null}
    </header>
  );
}

export default Header;
