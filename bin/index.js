const { Command } = require('commander');
const inquirer = require('inquirer');

;(async () => {
	await main();
})();


async function main() {
	const program = new Command();

	program.version('0.0.1');

  program
		.command('init-workspace')
		.description('create workspace')
		.action(() => {
			console.log('create workspace');
		});


  await program.parseAsync(process.argv);
}

