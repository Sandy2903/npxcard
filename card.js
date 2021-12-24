#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: "list",
    name: "action",
    message: "What do you want to do?",
    choices: [
      {
        name: `Toss an ${chalk.bold("email")}?`,
        value: () => {
          open("mailto:sandy_mapessa@hotmail.com");
          console.log(
            "\nLooking forward to hearing your message and replying to you!\n"
          );
        },
      },
      {
        name: "Exit",
        value: () => {
          console.log("Goodbye, have a nice day!\n");
        },
      },
    ],
  },
];

const data = {
  name: chalk.bold.green("                     Sandra Mapessa"),
  handle: chalk.white("@sandy1230"),
  fact: chalk.hex("#B10000")("I love Open-Source!"),
  twitter: chalk.hex("#00A1D9")("https://twitter.com/Sandy1230"),
  github: chalk.hex("#787878")("https://github.com/sandy1230"),
  npx: chalk.hex("#A1AB00")("npx sandy"),

  labelFact: chalk.hex("#FF6262").bold("          Fun Fact:"),
  labelTwitter: chalk.hex("#629DFF").bold("        Twitter:"),
  labelGitHub: chalk.hex("#9E9E9E").bold("         GitHub:"),
  labelCard: chalk.hex("#FFF976").bold("                  Card:"),
};

const me = boxen(
  [
    `${data.name}`,
    ``,
    `${data.labelFact}  ${data.fact}`,
    ``,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelGitHub}  ${data.github}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.bold("Hi there! I'm Sandra, I'm a passionate Web and Graphics ")}`,
    `${chalk.bold("developer and web designer from Belgium, and have a ")}`,
    `${chalk.bold("hobby for creating beautiful, cool, and responsive ")}`,
    `${chalk.bold("web apps. Toss me an email if you want to collab!")}`,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "single",
    borderColor: "blue",
  }
);

console.log(me);
const tip = [
  `Tip: ${chalk.cyanBright.bold(
    "cmd/ctrl + click"
  )} on the links above to open them in your broswer.`,
  "",
].join("\n");
console.log(tip);

prompt(questions).then((answer) => answer.action());
