import inquirer from "inquirer";
import chalk from "chalk";
import { yellow } from "colors";

inquirer
  .prompt([
    {
      type: "list",
      message: "Why are you here? ",
      name: "My answer",
      choices: [
        "I want to become a developer",
        "I like to see other people suffering",
        "Obviusly because of Pizzendres",
      ],
    },
    {
      type: "checkbox",
      name: "My choice",
      message: "Do you regret yout choice?",
      choices: ["Yes", "Of course", "Every minute of my existence"],
    },
  ])
  .then((answers) => {
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Ups, que has fet ja?");
    } else {
      console.log("Mare meeeeeeva, que fas?");
    }
  });
