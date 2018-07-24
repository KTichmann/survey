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
        this.render(`<h1>Welcome to our Survey!</h1><br><p> This is a simple UX test to find out whether our menu's architecture is easy to navigate and find the information that customers are looking for. It should only take a few minutes, and there are no wrong answers! Thanks so much for your help.
        </p><p>Please begin by filling in your name.</p>`, {
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
        this.render(`<h1>Question 1:</h1><p>If you were looking for information about assessment, where do you think you would find it?<br>(Click the menu buttons to reveal sub-menu items)</p>`, {
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
        this.render(`<h1>Question 2:</h1><br><p>Where would you find out how to train teachers in the methodology?</p>`, {
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
        this.render(`<h1>Question 3:</h1><br><p>You know what the approach is but want to find out whether it actually works. Where can you see evidence that the approach is effective?</p>`, {
          target: "content"
        })
      }
  });
  Router.route("/question4", {
      name: "question4",
      action() {
        removeActiveFromLinks();
        removeDisabledFromLinks();
        addQuestionNumberToInput(4);
        this.render(`<h1>Question 4:</h1><br><p>You are convinced by the toolkit's method but feel that you need more support to design your own TaRL programme. Where could you go to find out what support our organization can offer?</p>`, {
          target: "content"
        })
      }
  });
    Router.route("/question5", {
      name: "question5",
      action() {
        removeActiveFromLinks();
        removeDisabledFromLinks();
        addQuestionNumberToInput(5);
        this.render(`<h1>Question 5:</h1><br><p>You want to know who should teach these classes. Where would you go to find out who our instructors are?</p>`, {
          target: "content"
        })
      }
  });
      Router.route("/question6", {
      name: "question5",
      action() {
        removeActiveFromLinks();
        removeDisabledFromLinks();
        addQuestionNumberToInput(6);
        this.render(`<h1>Question 6:</h1><br><p>You want to know if this program has been implemented before. Where can you go to find examples?</p>`, {
          target: "content"
        })
      }
  });
      Router.route("/question7", {
      name: "question6",
      action() {
        removeActiveFromLinks();
        removeDisabledFromLinks();
        addQuestionNumberToInput(7);
        this.render(`<h1>Question 7:</h1><br><p>You want to know which grades this approach caters for. Where do you think you could find this information?</p>`, {
          target: "content"
        })
      }
  });
      Router.route("/question8", {
      name: "question8",
      action() {
        removeActiveFromLinks();
        removeDisabledFromLinks();
        addQuestionNumberToInput(8);
        this.render(`<h1>Question 8:</h1><br><p>  You would like to see the curriculum. Where would you go find out about this?</p>`, {
          target: "content"
        })
      }
  });

  Router.route("/thankyou", {
      name: "thankyou",
      action() {
        document.getElementById("tree-main").style.display = "none";
        document.getElementById("input").style.display = "none";
        this.render(`<h1>Thank You!</h1> <br><p>Thanks for taking the time to complete our survey, your answers have been saved. You can view your responses in <a href="">this google sheet</a>.</p>`, {
          target: "content"
        })
      }
  });
}

export default router;
