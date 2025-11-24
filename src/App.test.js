// Outils de test fournis par React Testing Library
import { render, screen } from '@testing-library/react';
import App from './App';

// Exemple de test généré par Create React App
test('renders learn react link', () => {
  // On rend le composant App dans un environnement de test
  render(<App />);
  // On récupère un élément contenant le texte "learn react" (insensible à la casse)
  const linkElement = screen.getByText(/learn react/i);
  // L'assertion vérifie que l'élément est bien présent dans le DOM
  expect(linkElement).toBeInTheDocument();
});
