import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// 원본 프로젝트가 styled-reset을 의존성으로 두고 리셋을 주입하던 것을 그대로 재현
const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  li {
    list-style: none;
  }
`;

export default GlobalStyle;
