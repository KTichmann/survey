import {Router} from "jk-router";

const router = () => {
  const removeActiveFromLinks = () => {
    document.querySelectorAll("ul").forEach(item => {
      item.classList.remove("active")
    })
  }
  const addQuestionNumberToInput = (questionNumber) => {
    document.getElementById("question").value = questionNumber
  }
  const removeDisabledFromLinks = () => {
    document.querySelectorAll(".final").forEach(node => {
      node.classList.remove("disabled")
    })
  }
  Router.route("/", {
      name: "home",
      action() {
        this.render(`<h1>Welcome to our Survey!</h1><br><p>This will only take 5 years to fill out, please begin by filling in your name.</p>`, {
          target: "content"
        })
      }
  });
  Router.route("/question1", {
      name: "question1",
      action() {
        removeActiveFromLinks();
        removeDisabledFromLinks();
        addQuestionNumberToInput(1);
        document.getElementById("tree-main").style.display = "block"
        document.getElementById("form-inputs").style.display = "none"
        document.getElementById("input").textContent = "Next Question"
        this.render(`<h1>Question 1:</h1><br><p>If you were looking for information about assessment, where do you think you would find it?</p>`, {
          target: "content"
        })
      }
  });
  Router.route("/question2", {
      name: "question2",
      action() {
        removeActiveFromLinks();
        removeDisabledFromLinks();
        addQuestionNumberToInput(2);
        this.render(`<h1>Question 2:</h1><br><p>If you were looking for information about mentoring, where do you think you would find it?</p>`, {
          target: "content"
        })
      }
  });
  Router.route("/question3", {
      name: "question3",
      action() {
        removeActiveFromLinks();
        removeDisabledFromLinks();
        addQuestionNumberToInput(3);
        this.render(`<h1>Question 3:</h1><br><p>If you were looking for a case study from Ghana, where do you think you would find it?</p>`, {
          target: "content"
        })
      }
  });
  Router.route("/thankyou", {
      name: "thankyou",
      action() {
        document.getElementById("tree-main").style.display = "none";
        document.getElementById("input").style.display = "none";
        this.render(`<h1>Thank You!</h1><br><p>Thanks for taking the time to complete our survey, your answers have been saved. You may now exit this tab. <br> For more information, please visit <a href="https://www.google.co.za/search?q=more+information&oq=more+information&aqs=chrome..69i57j0l5.1787j0j4&sourceid=chrome&ie=UTF-8">this site</a>.</p>`, {
          target: "content"
        })
      }
  });
}

export default router;
