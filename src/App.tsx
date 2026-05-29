import Header from './components/Header';
import VisualSwiper from './components/VisualSwiper';
import Main from './components/Main';
import Footer from './components/Footer';

// 원본 .wrap 조립 순서: Header → 비주얼 Swiper → Main(art1~5) → Footer
function App() {
  return (
    <div className="wrap">
      <Header />
      <VisualSwiper />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
