# 💼 Job Card UI (React)

A simple and modern **Job Card UI** built using **React.js**.
This project was created to practice **props drilling**, dynamic rendering, and component-based design.

---

## 🚀 Features

* ⚛️ Built with React.js
* 🔁 Dynamic UI using `map()`
* 🧩 Reusable Card component
* 📦 Props drilling for data passing
* 🏢 Company logo and name
* 💼 Job role, type, and level
* 📍 Location and salary details
* 🎨 Clean and minimal design

---

## 🛠️ Tech Stack

* React.js
* JavaScript (ES6+)
* HTML5
* CSS3

---

## 📸 Preview

![Preview](./assets/preview.png)

---

## ⚙️ How It Works

Job data is stored in an array and rendered dynamically:

```js
jobs.map((job, index) => (
  <Card key={index} job={job} />
))
```

Each card receives data via props and displays job details like company, role, salary, and location.

---

## 🧠 Purpose

This project was built mainly to understand:

* Props drilling in React
* Passing data between components
* Rendering lists dynamically
* Structuring UI using reusable components

---

## 👨‍💻 Author

**Krishna**
CSE Engineering Student 🚀

---

⭐ If you like this project, give it a star!
