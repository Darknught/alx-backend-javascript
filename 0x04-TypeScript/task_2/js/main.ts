// Define the DirectorInterface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// Define the TeacherInterface
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Implement the Director class
class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

// Implement the Teacher class
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

// Create the createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

// Type guards to differentiate between Director and Teacher
function isDirector(employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

function isTeacher(employee: Director | Teacher): employee is Teacher {
    return (employee as Teacher).workTeacherTasks !== undefined;
}

// Example usage
const employee1 = createEmployee(300);
if (isTeacher(employee1)) {
    console.log(employee1.workFromHome()); // Output: Cannot work from home
    console.log(employee1.getCoffeeBreak()); // Output: Cannot have a break
    console.log(employee1.workTeacherTasks()); // Output: Getting to work
}

const employee2 = createEmployee(1000);
if (isDirector(employee2)) {
    console.log(employee2.workFromHome()); // Output: Working from home
    console.log(employee2.getCoffeeBreak()); // Output: Getting a coffee break
    console.log(employee2.workDirectorTasks()); // Output: Getting to director tasks
}
