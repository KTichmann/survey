import {Router} from "jk-router";

const router = () => {
  const removeActiveFromLinks = () => {
    document.querySelectorAll("ul").forEach(item => {
      item.classList.remove("active")
    })
  }
  Router.route("/", {
      name: "home",
      action() {
        this.render(`<h1>Welcome to our Survey!</h1><br><p>This will only take 5 years to fill out, please begin by filling in your name etc.</p>`, {
          target: "content"
        })
      }
  });
  Router.route("/question1", {
      name: "question1",
      action() {
        removeActiveFromLinks()
        document.getElementById("tree-main").style.display = "block"
        document.getElementById("form-inputs").style.display = "none"
        document.getElementById("input").textContent = "Next Question"
        this.render(`<h1>Question 1:</h1>`, {
          target: "content"
        })
      }
  });
  Router.route("/question2", {
      name: "question2",
      action() {
        removeActiveFromLinks()
        this.render(`<h1>Question 2:</h1>`, {
          target: "content"
        })
      }
  });
  Router.route("/question3", {
      name: "question3",
      action() {
        removeActiveFromLinks()
        this.render(`<h1>Question 3:</h1>`, {
          target: "content"
        })
      }
  });
  Router.route("/thankyou", {
      name: "thankyou",
      action() {
        document.getElementById("tree-main").style.display = "none"
        document.getElementById("input").style.display = "none"
        this.render(`<h1>Thanks!</h1>`, {
          target: "content"
        })
      }
  });
}

export default router;
