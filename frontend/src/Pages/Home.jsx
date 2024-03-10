import Navbar from '../components/molecules/navbar/Navbar';
import Categories from '../components/molecules/cards/categories/Categories';
import Footer from '../components/molecules/footer/Footer';

const Home = () => {
  return (
    <>
    <Navbar/>
    <h1>Esta es la home</h1>
    <Categories/>
    <Footer/>
    </>
  )
}

export default Home