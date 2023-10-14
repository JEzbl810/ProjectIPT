const students = [
    // Replace with your student data, including image URLs
    { id: 1, name: "Adel, Marlo H.", age: 20, grade: "A", image: "john.jpg" },
    { id: 2, name: "Barcial, Cyril John G.", age: 21, grade: "B", image: "jane.jpg" },
    { id: 3, name: "Bilaran, Jan Kevin Nemesis A.", age: 20, grade: "A", image: "john.jpg" },
    { id: 4, name: "Cajandab, Alian E.", age: 21, grade: "B", image: "jane.jpg" },
    { id: 5, name: "Castillo, Shaena Rose B.", age: 20, grade: "A", image: "shaena.png" },
    { id: 6, name: "Cerbito, Christelyn E.", age: 21, grade: "B", image: "jane.jpg" },
    { id: 7, name: "Cerbito, Dianacel N.", age: 20, grade: "A", image: "john.jpg" },
    { id: 8, name: "Cramen, Ma. Ella Mae G.", age: 21, grade: "B", image: "jane.jpg" },
    { id: 9, name: "Domdom, Shumae B.", age: 20, grade: "A", image: "john.jpg" },
    { id: 10, name: "Fernandez, Abegail C.", age: 21, grade: "B", image: "jane.jpg" },
    { id: 11, name: "Floralde, Shiela I.", age: 20, grade: "A", image: "john.jpg" },
    { id: 12, name: "Larisma, Mark Angel N.", age: 21, grade: "B", image: "jane.jpg" },
    { id: 13, name: "Macaldo, Jhon D.", age: 20, grade: "A", image: "john.jpg" },
    { id: 14, name: "Magdaraog, Marife S.", age: 21, grade: "B", image: "jane.jpg" },
    { id: 15, name: "Montaño, Edizza T.", age: 20, grade: "A", image: "john.jpg" },
    { id: 16, name: "Navera, Kenneth John C.", age: 21, grade: "B", image: "jane.jpg" },
    { id: 17, name: "Perito, Kirk Chayagnne F.", age: 20, grade: "A", image: "john.jpg" },
    { id: 18, name: "Quitorio, Adielyn P.", age: 21, grade: "B", image: "jane.jpg" },
    { id: 19, name: "Rubenecia, Jana Amor O.", age: 20, grade: "A", image: "john.jpg" },
    { id: 20, name: "Salazar, Ma. Claire C.", age: 21, grade: "B", image: "jane.jpg" },
    { id: 21, name: "Serrona, Arthur John B.", age: 20, grade: "A", image: "john.jpg" },
    { id: 22, name: "Tan, Sierva V.", age: 21, grade: "B", image: "jane.jpg" },
    { id: 23, name: "Tapang, Caesar June M.", age: 20, grade: "A", image: "john.jpg" },
    { id: 24, name: "Tiu, Alfred Thelo N.", age: 21, grade: "B", image: "jane.jpg" },
    { id: 25, name: "Ultra, Johnsen C.", age: 21, grade: "B", image: "jane.jpg" },
    { id: 26, name: "Ventuso, Razel Ann", age: 21, grade: "B", image: "razel.png" },
    { id: 27, name: "Ymata, Franky D.", age: 21, grade: "B", image: "jane.jpg" },
    { id: 28, name: "Zabala, Jerald E.", age: 21, grade: "B", image: "jane.jpg" },
    // Add more students
];

const studentList = document.getElementById("student-list");
const studentInfo = document.getElementById("student-info");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

// Display student profiles
function displayStudents() {
    studentList.innerHTML = "";
    students.forEach((student) => {
        const listItem = document.createElement("li");
        listItem.textContent = student.name;
        listItem.addEventListener("click", () => displayStudentInfo(student));
        studentList.appendChild(listItem);
    });
}

// Display student information
function displayStudentInfo(student) {
    studentInfo.innerHTML = `
        <h2>${student.name}</h2>
        <img src="${student.image}" alt="${student.name}'s image" />
        <p>Age: ${student.age}</p>
        <p>Grade: ${student.grade}</p>
    `;
}

// Search for a student
function searchStudent() {
    const query = searchInput.value.toLowerCase();
    const result = students.find((student) => student.name.toLowerCase().includes(query));
    if (result) {
        displayStudentInfo(result);
    } else {
        studentInfo.innerHTML = "Student not found.";
    }
}

searchButton.addEventListener("click", searchStudent);

// Initial display of student profiles
displayStudents();
