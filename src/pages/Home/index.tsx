import restaurantMenu from 'data/menu.json';
import styles from './Home.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import ourHome from 'assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';

export function Home() {
  let recommendedDishes = [...restaurantMenu];
  recommendedDishes = recommendedDishes.sort(() => 0.5 - Math.random()).splice(0, 3);
  const navigate = useNavigate();

  function redirectToDetails(dish: typeof restaurantMenu[0]) {
    navigate(`/prato/${dish.id}`);
  }

  return (
    <section>
      <h3 className={stylesTheme.title}>Recomendações da cozinha:</h3>
      <div className={styles.recommendations}>
        {recommendedDishes.map((item) => (
          <div className={styles.recommended} key={item.id}>
            <div className={styles.recommend__image}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button className={styles.recommended__button} onClick={() => redirectToDetails(item)}>
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesTheme.title}>Nossa casa</h3>
      <div className={styles.ourHome}>
        <img src={ourHome} alt="Casa do aluroni" />
        <div className={styles.ourHome__address}>
          Rua vergueiro, 3185 <br /> <br /> Vila Marins - SP
        </div>
      </div>
    </section>
  );
}
