import Link from 'next/link';

const PageNotFound = () => (
  <>
    <h1>페이지를 찾을 수 없습니다.</h1>
    <Link href={'/'}>Home</Link>
  </>
);

export default PageNotFound;
