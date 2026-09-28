#!/usr/bin/env node
const { Command } = require("commander");
const program = new Command();
program
  .name("opensimply-lifecycle-fixture")
  .description("Harmless CLI used to validate OpenSimply update and rollback behavior.")
  .option("--message <text>", "Text to print", "fixture-a")
  .parse();
process.stdout.write(`${program.opts().message}\n`);
