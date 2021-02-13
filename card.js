#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const clear = require("clear");

clear();

const data = {
    name: chalk.bold.yellow("                  Maël Donnart"),
    studies: `${chalk.white("Software Engineer Student")}`,
    github: chalk.gray("https://github.com/") + chalk.green("maeldonn"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.green("maeldonnart"),
    web: chalk.gray("https://maeldonn.github.io"),
    npx: chalk.yellow("npx") + " " + chalk.white("maeldonn"),

    labelStudies: chalk.white.bold("    Studies:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:")
};

const card = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelStudies}  ${data.studies}`,
        ``,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelWeb}  ${data.web}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `Tip: Try ${chalk.greenBright.bold(
          "cmd/ctrl + click"
      )} on the links above`,
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "double",
        borderColor: "yellow"
    }
);

console.log(card);