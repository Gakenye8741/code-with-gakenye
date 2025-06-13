function filterSkills(category) {
    const cards = document.querySelectorAll('.skill-card');
  
    cards.forEach(card => {
      if (category === 'all' || card.classList.contains(category)) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  }