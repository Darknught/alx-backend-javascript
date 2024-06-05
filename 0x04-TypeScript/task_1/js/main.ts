// Define the Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any; // This allows any additional properties
}

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
    numberOfReports: number;
}

// Create a sample teacher object
const teacher1: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    location: "New York",
    contract: true // Additional property
};

const teacher2: Teacher = {
    firstName: "Jane",
    lastName: "Smith",
    fullTimeEmployee: false,
    location: "Los Angeles",
    yearsOfExperience: 10, // Optional property
    contract: false // Additional property
};

// Create a sample director object
const director1: Directors = {
    firstName: "Michael",
    lastName: "Scott",
    fullTimeEmployee: true,
    location: "Scranton",
    numberOfReports: 10,
    contract: true // Additional property
};

// Log the teacher and director objects to the console
console.log(teacher1);
console.log(teacher2);
console.log(director1);
