# Feedback UI Design

![screen recording](https://media.giphy.com/media/E4Qp7QId3A205I4mMV/giphy.gif)

## project notes

1. HTML

- container(default)

  - text: How satisfied are you with our customer support performance?
  - button\*3: 🙁 Unhappy, 😐 Neutral, 😁 Satisfied
  - button: Send Review

- container(review sent)
  - ❤️  
    Thank you!  
    Feedback ${feedback}  
    We'll use your feedback to improve our customer support

2. CSS

3. JavaScript

- event bubbling
- click the emoji changes class to 'active'

---

Challenge from Brad Traversy & Florin Pop on Udemy '50 Projects in 50 Days'

---

## Takeaways from the instructor

1. HTML

- divs instead of buttons
- emojis from flaticon.com

2. CSS

3. JavaScript

- event bubbling is good when there are (too) many elements to add event listener.
- defaultContainer.innerHTML instead of removing the default div and create another div and add it to body
