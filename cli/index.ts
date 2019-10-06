#!/usr/bin/env node
import get from "lodash.get";
import { print, printError } from "@mono/cli/console";
import { createYargsCli, INamedOption } from "@mono/cli/yargswrapper";
import { actuallyResolve } from "@mono/cli/util";
import yargs from "yargs";

const projectDirOption: INamedOption<yargs.PositionalOptions> = {
  name: "project-dir",
  option: {
    describe: "Mono project directory.",
    default: ".",
    coerce: actuallyResolve
  }
};

export enum ProjectType {
  ADIDAS = "adidas"
}

const projectNameOption: INamedOption<yargs.PositionalOptions> = {
  name: "project-name",
  option: {
    describe: "Mono project name",
    choices: Object.values(ProjectType)
  }
};

const projectNameMustExistOption = {
  ...projectNameOption,
  check: (argv: yargs.Arguments) => {
    console.log("object", argv);
    try {
      throw new Error("not not");
    } catch (e) {
      throw new Error("not a project");
    }
  }
};

const builtYargs = createYargsCli({
  commands: [
    {
      format: "help [command]",
      description: "Show help. If [command] is specified, the help is for the given command.",
      positionalOptions: [],
      options: [],
      processFn: async argv => {
        return false;
      }
    },
    {
      format: "run [project-name]",
      description: "Run the project's scripts on the configured data.",
      positionalOptions: [projectNameMustExistOption],
      options: [
        {
          name: "podman",
          option: {
            describe: "run podman container",
            default: false
          }
        }
      ],
      processFn: async argv => {
        console.log("do something", argv);
      }
    }
  ]
})
  .scriptName("mono")
  .strict()
  .wrap(null)
  .recommendCommands()
  .fail((msg: string, err: Error) => {
    const message = err ? err.message.split("\n")[0] : msg;
    printError(`Mono encountered an error: ${message}`);
    process.exit(1);
  }).argv;

if (!get(builtYargs, ["_", "0"])) {
  yargs.showHelp();
}
