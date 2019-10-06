const coloredOutput = (output: string, ansiColorCode: number) =>
  `\x1b[${ansiColorCode}m${output}\x1b[0m`;
const errorOutput = (output: string) => coloredOutput(output, 91);

const write = (stream: NodeJS.WriteStream, output: string, indentCount: number) =>
  stream.write(`${"  ".repeat(indentCount)}${output}\n`);
const writeStdOut = (output: string, indentCount: number = 0) =>
  write(process.stdout, output, indentCount);
const writeStdErr = (output: string, indentCount: number = 0) =>
  write(process.stderr, output, indentCount);

export function print(text: string) {
  writeStdOut(text);
}

export function printError(errorText: string, indentCount: number = 0) {
  writeStdErr(errorOutput(errorText), indentCount);
}
