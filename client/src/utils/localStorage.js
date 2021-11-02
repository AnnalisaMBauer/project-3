export const getSavedHighscoreIds = () => {
    const savedHighscoreIds = localStorage.getItem('saved_highscores')
      ? JSON.parse(localStorage.getItem('saved_highscores'))
      : [];
  
    return savedHighscoreIds ;
  };
  