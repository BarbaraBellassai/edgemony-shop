import "./App.css";
import Header from '../src/components/Header'
import Hero from '../src/components/Hero'
import Items from '../src/components/Items'
import Footer from '../src/components/Footer'

const fakeProducts = require("./mocks/data/products.json");
const currentYear = new Date().getFullYear()

const data = {
  title: "Edgemony Shop",
  description: "A fake e-commerce with a lot of potential",
  logo:
    "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  products: fakeProducts,
  company: 'SZH Inc.'
};

function App() {
  return (
    <div className="App">
      <Header logo = {data.logo}/>
      <main>
        <Hero cover = {data.cover} title = {data.title} description = {data.description}/>
      </main>
      <div>
        <Items products = {data.products}/>
      </div>
      <div>
        <Footer company = {data.company} year = {currentYear}/>
      </div>     
    </div>
  );
}

export default App;
