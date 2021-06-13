const submitBtn = document.getElementById('submit');
const defaultContainer = document.getElementById('defaultContainer');
const reviewContainer = document.getElementById('reviewContainer');

submitBtn.addEventListener('click', sendReview);
reviewContainer.addEventListener('click', changeReview, true);

function changeReview(e) {
  if ( e.target.className === 'emoji') {
    const reviews = document.querySelectorAll('.review');
    const review = e.target.parentElement;
    reviews.forEach(review => review.classList.remove('active'));
    review.classList.add('active');
  }
}

function sendReview() {
  const pickedReview = document.querySelector('.active').lastChild.innerText;

  defaultContainer.style.display = 'none';

  const div = document.createElement('div');
  div.className = 'feedback-container';

  div.innerHTML = `
    <p>❤️</p>
    <p>Thank you!</p>
    <p>Feedback: ${pickedReview}</p>
    <small>We'll use your feedback to improve our customer support</small>
  `
  document.body.appendChild(div);
}