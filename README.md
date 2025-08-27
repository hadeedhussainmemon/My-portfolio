# Hadeed Hussain Portfolio

This is the official portfolio website of Hadeed Hussain (geek-hadeed), a Frontend Web Developer from Karachi, Pakistan. The site showcases projects, skills, qualifications, and contact information.

## Features

- **Responsive Design:** Works on desktop and mobile devices.
- **Projects Showcase:** Recent projects loaded dynamically with pagination.
- **Skills & Qualifications:** Accordion sections for skills and modal dialogs for qualification details.
- **Contact Section:** Contact info and a form for sending messages.
- **Dark/Light Theme:** Toggle between dark and light modes.
- **Smooth Navigation:** Scrollspy, scroll-up button, and animated transitions.

## Technologies Used

- HTML5
- CSS3 ([assets/styles.css](assets/styles.css), [assets/assignments.css](assets/assignments.css))
- JavaScript ([assets/main.js](assets/main.js), [assets/projectLoader.js](assets/projectLoader.js), [assets/projectData.js](assets/projectData.js))
- [Font Awesome](https://fontawesome.com/) for icons

## Project Structure

```
index.html
assets/
  styles.css
  assignments.css
  main.js
  projectData.js
  projectLoader.js
  imgs/
    Pro.png
    about.jpg
    projects/
      ...
```

## How Projects Work

Project data is defined in [`projectsData`](assets/projectData.js) and loaded dynamically into the Projects section using the [`ProjectLoader`](assets/projectLoader.js) class.

## Getting Started

1. **Clone or Download** this repository.
2. Open `index.html` in your browser.
3. All assets are local; no build step required.

## Customization

- **Add Projects:** Edit [`projectsData`](assets/projectData.js) to add or update projects.
- **Change Styles:** Modify [`styles.css`](assets/styles.css) and [`assignments.css`](assets/assignments.css).
- **Update Info:** Edit `index.html` for personal details, qualifications, and contact info.

## License

This portfolio is for personal use. Feel free to use the structure for your own portfolio.

---