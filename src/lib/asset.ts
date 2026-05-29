// 배포 base(/ReactPracticePart1/)를 접두어로 붙여 public 에셋 경로를 만든다.
// 원본 번들의 `"/ReactPracticePart1" + URL` 패턴을 Vite base 기반으로 대체.
export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
