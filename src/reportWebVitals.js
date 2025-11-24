// Fonction utilitaire générée par CRA pour suivre les performances du rendu
const reportWebVitals = onPerfEntry => {
  // On vérifie que l'utilisateur fournit bien un callback
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Chargement dynamique des métriques Web Vitals uniquement si nécessaire
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Chaque fonction mesure un indicateur et renvoie la valeur via le callback
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// Export par défaut pour permettre son usage dans index.js
export default reportWebVitals;
