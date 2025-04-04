import Header from "./components/Header";
import Banner from "./components/Banner";
import Body from "./components/Body";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header></Header>
      <Banner></Banner>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}
