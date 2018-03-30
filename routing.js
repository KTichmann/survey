import {Router} from "jk-router";

const router = () => {
  const homeButton = document.getElementById("homeButton")
  const removeDisabledFromLinks = () => {
    document.querySelectorAll("a").forEach((link) => {
      link.classList.remove("disabled")
    })
  }
  const disableButtonWhenNoAnswerSelected = () => {
    document.getElementById("input").disabled = "true";
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
        removeDisabledFromLinks()
        document.getElementById("tree-main").style.display = "block"
        document.getElementById("form-inputs").style.display = "none"
        homeButton.click()
        document.getElementById("input").textContent = "Next Question"
        this.render(`<h1>Question 1:</h1>`, {
          target: "content"
        })
      }
  });
  Router.route("/question2", {
      name: "question2",
      action() {
        removeDisabledFromLinks()
        homeButton.click()
        this.render(`<h1>Question 2:</h1>`, {
          target: "content"
        })
      }
  });
  Router.route("/question3", {
      name: "question3",
      action() {
        removeDisabledFromLinks()
        homeButton.click()
        this.render(`<h1>Question 3:</h1>`, {
          target: "content"
        })
      }
  });
  Router.route("/thankyou", {
      name: "thankyou",
      action() {
        document.getElementById("tree-main").style.display = "none"
        this.render(`<h1>Thanks!</h1>`, {
          target: "content"
        })
      }
  });
}

export default router;
