import { asset } from '../lib/asset';

const LINE = 'assets/images/fnb-line.png';

const POLICY = ['개인정보취급방침', '이메일무단수집거부', '묻고답하기'];

const SNS = [
  { id: 1, url: 'assets/images/mf-icon01.png', alt: 'facebook', href: 'https://ko-kr.facebook.com/' },
  { id: 2, url: 'assets/images/mf-icon02.png', alt: 'blog', href: 'https://blog.naver.com/' },
  { id: 3, url: 'assets/images/mf-icon03.png', alt: 'instargram', href: 'https://www.instagram.com/' },
  { id: 4, url: 'assets/images/mf-icon04.png', alt: 'kakaopage', href: 'https://page.kakao.com/' },
];

const ADDRESS = [
  '회사 : 파이브스톤',
  '주소 : 경기도 고양시 덕양구 삼송로 193번길 28-3 하준빌딩 401호',
  '사업자등록번호 : 780-42-00047',
];

const CONTACT = ['TEL : 010-2709-0828', 'EMAIL : fivestone55@daum.net'];

function Footer() {
  return (
    <footer>
      <div className="footerwrap">
        <a href="#">
          <img src={asset('assets/images/logo-f.png')} alt="사이트하단로고" />
        </a>

        <div className="txt">
          <ul className="policy">
            {POLICY.map((title, i) => (
              <li key={i}>
                <a href="#">{title}</a>
                <img src={asset(LINE)} alt="구분선" />
              </li>
            ))}
          </ul>

          <ul className="sns">
            {SNS.map((sns) => (
              <li key={sns.id}>
                <a href={sns.href} target="_blank" style={{ padding: 8 }} rel="noreferrer">
                  <img src={asset(sns.url)} alt={sns.alt} />
                </a>
              </li>
            ))}
          </ul>

          <ul className="address">
            {ADDRESS.map((des, i) => (
              <li key={i}>
                {des} <img src={asset(LINE)} alt="구분선" />
              </li>
            ))}
          </ul>
          <ul className="address">
            {CONTACT.map((des, i) => (
              <li key={i}>
                {des}
                <img src={asset(LINE)} alt="구분선" />
              </li>
            ))}
          </ul>

          <p>COPYRIGHT © 2022 FIVESTONE. ALL RIGHT RESERVED</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
