import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h2>Egzamin Na Prawo Jazdy</h2>
      <ul>
        <p>Autor: Artur Jankowski</p>
        <p>Copyright &copy; {year}</p>
      </ul>
    </footer>
  );
}
