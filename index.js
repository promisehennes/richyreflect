// Get all question titles
const questionTitles = document.querySelectorAll('.question-title');

// Add event listener to each question title
questionTitles.forEach((title) => {
  title.addEventListener('click', () => {
    const question = title.parentNode;
    question.classList.toggle('active');
  });
});
