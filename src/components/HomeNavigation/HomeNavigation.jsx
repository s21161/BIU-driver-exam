import "./HomeNavigation.css";

import { Link } from "react-router-dom";

import { routes } from "../../routes";

const homeNavigationItemsArray = [
  {
    slug: routes.EXAM,
    title: "Napisz Egzamin",
    description:
      "Napisz egzamin składający się z 15 losowych pytań i sprawdź, czy jesteś gotowy!",
  },
  {
    slug: routes.LEARN,
    title: "Ucz Się",
    description: "Odpowiadaj na pytania i ucz się do egzaminy!",
  },
  {
    slug: routes.EDIT,
    title: "Modyfikuj",
    description:
      "Zmieniaj i dodawaj pytania, które spotkasz podzczas nauki i egzaminu!",
  },
];

function HomeNavigationItem({ slug, title, description }) {
  return (
    <li className="home-navigation-item">
      <Link to={slug}>
        <article className="home-navigation-item__wrapper">
          <h3 className="home-navigation-item__wrapper--header">{title}</h3>
          <p className="home-navigation-item__wrapper--description">
            {description}
          </p>
        </article>
      </Link>
    </li>
  );
}

export default function HomeNavigation() {
  return (
    <section className="home-navigation">
      <h2 className="home-navigation__header">Wybierz jeden z trybów:</h2>
      <nav className="home-navigation__navigation">
        <ul className="home-navigation__navigation--list">
          {homeNavigationItemsArray.map(({ slug, title, description }) => (
            <HomeNavigationItem
              key={`${slug}-${title}`}
              slug={slug}
              title={title}
              description={description}
            />
          ))}
        </ul>
      </nav>
    </section>
  );
}
