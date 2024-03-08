import Navbar from '../components/molecules/navbar/Navbar';
import CategoryCard from '../components/molecules/cards/CategoryCard/CategoryCard'
import Footer from '../components/molecules/footer/Footer';

const Home = () => {
  return (
    <>
    <Navbar/>
    <h1>Página Home</h1>
    <CategoryCard></CategoryCard>
    <CategoryCard></CategoryCard>
    <CategoryCard></CategoryCard>
    <CategoryCard></CategoryCard>
    <Footer/>
    </>
  )
}

export default Home