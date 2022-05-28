import { Home } from 'pages/Home';
import { RestaurantMenu } from 'pages/RestaurantMenu';
import { Menu } from 'components/Menu';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultPage from 'components/DefaultPage';
import About from 'pages/About';
import Footer from 'components/Footer';
import { NotFound } from 'pages/NotFound';
import { Dish } from 'pages/Dish';

export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path="cardapio" element={<RestaurantMenu />} />
            <Route path="sobre" element={<About />} />
          </Route>
          <Route path="prato/:id" element={<Dish />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
