import { asset } from '../lib/asset';

// 공통 ghostbtn (원본의 cn 컴포넌트)
const GhostButton = ({ label = 'VIEW DETAIL' }: { label?: string }) => (
  <a href="#" className="ghostbtn">
    {label}
  </a>
);

const ART1 = [
  {
    id: 1,
    url: 'assets/images/m-ms01.jpg',
    title: '회사개요',
    des: '고객과 함께 꾸준히 성장한 당사의 회사개요 및 비전, 연혁 등의 내용을 간략히 소개합니다.',
  },
  {
    id: 2,
    url: 'assets/images/m-ms02.jpg',
    title: '사업분야',
    des: '당사의 사업내역 및 앞으로 계획하고 진행할 다양한 사업계획을 자세하게 정리하였습니다.',
  },
  {
    id: 3,
    url: 'assets/images/m-ms03.jpg',
    title: '채용안내',
    des: '고객감동을 실현하는 당사와 함께 성장할 창의적인 인재를 모집하는 공간입니다.',
  },
];

const ART2 = [
  {
    id: 1,
    url: 'assets/images/m-au01.jpg',
    title: 'GOURD',
    subtitle: '파이브스톤은 끊임없는 열정과 최선으로 가치를 창조합니다.',
    des: '파이브스톤은 다양한 환경에 적응하며 경쟁하기 위해 모든 기술과 디자인 역량을 집중하고 고객과의 친밀한 소통과 협력을 통해 최고의 품질을 제공하고 있습니다. 오랫동안 쌓은 전문지식과 노하우를 바탕으로 고객과 함께 하겠습니다.',
  },
  {
    id: 2,
    url: 'assets/images/m-au02.jpg',
    title: 'BARLEY',
    subtitle: '정직과 신뢰, 디자인으로 고객과 함께 합니다.',
    des: '파이브스톤은 디자인을 통한 비지니스 네트워크를 구축하여 고객의 필요와 요구를 파악하고 기존 사업과 연계하여 시너지를 창출하며 고객 감동을 실현해 나갈 것입니다.',
  },
];

const ART4 = [1, 2, 3, 4].map((id) => ({
  id,
  url: `assets/images/m-mb0${id}.jpg`,
  des: '고객의 필요와 사업환경에 따라 맞춤형 디자인으로 보다 큰 감동을 드립니다.',
}));

const ART5 = [
  {
    id: 1,
    url: 'assets/images/m-us01.png',
    alt: 'notice icon',
    title: 'NOTICE',
    des: '고객과 함께 꾸준히 성장한 당사의 회사개요 및 비전, 연혁 등의 내용을 소개합니다.',
  },
  {
    id: 2,
    url: 'assets/images/m-us02.png',
    alt: 'QnA icon',
    title: 'Q&A',
    des: '문의 및 궁금한 사항을 남겨주시면 친절하고 빠르게 정성껏 답변드리겠습니다.',
  },
  {
    id: 3,
    url: 'assets/images/m-us03.png',
    alt: 'Media icon',
    title: 'MEDIA',
    des: '각종 미디어에 소개된 영상 및 당사의 홍보자료를 보실 수 있는 공간입니다.',
  },
];

function Main() {
  return (
    <main>
      {/* art1 — Main Service */}
      <article className="art1">
        <h2>Main Service</h2>
        <p>정직과 신뢰, 디자인으로 함께 하는 파이브스톤</p>
        <div className="contentBox">
          {ART1.map((item) => (
            <div className="ms" key={item.id}>
              <div className="imgwrap">
                <img src={asset(item.url)} alt={item.title} />
              </div>
              <div className="txt">
                <h3>{item.title}</h3>
                <h5>{item.des}</h5>
                <GhostButton />
              </div>
            </div>
          ))}
        </div>
      </article>

      {/* art2 — 좌우 교차 소개 (×2) */}
      {ART2.map((item) => (
        <article className="art2" key={item.id}>
          <div
            className="imgbox"
            style={{ background: `url(${asset(item.url)}) no-repeat 50%/cover` }}
          />
          <div className="txt">
            <h2>{item.title}</h2>
            <p>
              <strong>{item.subtitle}</strong>
            </p>
            <p>{item.des}</p>
            <GhostButton />
          </div>
        </article>
      ))}

      {/* art3 — parallax CTA */}
      <article className="art3">
        <div className="layer">
          <h2>정직과 신뢰, 디자인</h2>
          <p>파이브스톤은 오랫동안 쌓은 전문지식과 노하우를 바탕으로 고객과 함께 하겠습니다.</p>
          <GhostButton />
        </div>
      </article>

      {/* art4 — KEY BUSINESS */}
      <article className="art4">
        <h2>KEY BUSINESS</h2>
        <p>정직과 신뢰, 디자인으로 함께 하는 파이브스톤</p>
        <ul className="contentBox">
          {ART4.map((item) => (
            <li key={item.id}>
              <div className="wrap">
                <img src={asset(item.url)} alt={`keybusiness사진${item.id}`} />
              </div>
              <div className="txt">
                <h3>사업분야0{item.id}</h3>
                <h5>{item.des}</h5>
              </div>
            </li>
          ))}
        </ul>
      </article>

      {/* art5 — 그린 밴드 3뷰 */}
      <article className="art5">
        <div className="contentBox">
          {ART5.map((item) => (
            <div className="view" key={item.id}>
              <a href="#">
                <img src={asset(item.url)} alt={item.alt} />
              </a>
              <div className="txt">
                <h3>{item.title}</h3>
                <h5>{item.des}</h5>
                <a href="#" className="ghostbtn">
                  VIEW
                </a>
              </div>
            </div>
          ))}
        </div>
      </article>
    </main>
  );
}

export default Main;
