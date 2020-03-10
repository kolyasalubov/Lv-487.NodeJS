import { tasks } from './constructor.js';

function start() {
        const number = prompt(`Enter task number:
Available options: ${[...tasks.keys()]}`);

        if (!number) {
                return;
        }

        const task = tasks.get(number);
        if (task) {
                task.run();
        } else {
                alert('Task not found');
                start();
        }
}

start();
