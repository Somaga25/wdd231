const courseUnit =
    document.querySelector("#course-unit");

const courseGrade =
    document.querySelector("#course-grade");

const addCourseBtn =
    document.querySelector("#add-course");

const calculateCgpaBtn =
    document.querySelector("#calculate-cgpa");

const courseList =
    document.querySelector("#course-list");

const cgpaResult =
    document.querySelector("#cgpa-result");

const currentCgpa =
    document.querySelector("#current-cgpa");

const expectedGpa =
    document.querySelector("#expected-gpa");

const predictBtn =
    document.querySelector("#predict-gpa");

const predictionResult =
    document.querySelector("#prediction-result");

const studyTask =
    document.querySelector("#study-task");

const addStudyTaskBtn =
    document.querySelector("#add-study-task");

const studyList =
    document.querySelector("#study-list");

const assignmentName =
    document.querySelector("#assignment-name");

const assignmentDate =
    document.querySelector("#assignment-date");

const addAssignmentBtn =
    document.querySelector("#add-assignment");

const assignmentList =
    document.querySelector("#assignment-list");

/* ==========================
   CGPA CALCULATOR
========================== */

let courses =
    JSON.parse(
        localStorage.getItem("courses")
    ) || [];

displayCourses();

addCourseBtn.addEventListener("click", () => {

    const unit =
        Number(courseUnit.value);

    const grade =
        Number(courseGrade.value);

    if (!unit || !grade) {
        return;
    }

    courses.push({
        unit,
        grade
    });

    localStorage.setItem(
        "courses",
        JSON.stringify(courses)
    );

    displayCourses();

    courseUnit.value = "";
    courseGrade.value = "";

});

function displayCourses() {

    courseList.innerHTML = "";

    courses.forEach((course, index) => {

        const item =
            document.createElement("p");

        item.innerHTML = `
            Unit: ${course.unit}
            |
            Grade Point: ${course.grade}

            <button
                class="delete-btn">
                Delete
            </button>
        `;

        const deleteButton =
            item.querySelector(".delete-btn");

        deleteButton.addEventListener(
            "click",
            () => {

                courses.splice(index, 1);

                localStorage.setItem(
                    "courses",
                    JSON.stringify(courses)
                );

                displayCourses();

            }
        );

        courseList.appendChild(item);

    });

}

calculateCgpaBtn.addEventListener("click", () => {

    if (courses.length === 0) {
        return;
    }

    const totalQualityPoints =
        courses.reduce(
            (sum, course) =>
                sum +
                (course.unit * course.grade),
            0
        );

    const totalUnits =
        courses.reduce(
            (sum, course) =>
                sum + course.unit,
            0
        );

    const cgpa =
        totalQualityPoints /
        totalUnits;

    cgpaResult.textContent =
        `Current CGPA: ${cgpa.toFixed(2)}`;

});

/* ==========================
   GPA PREDICTOR
========================== */

predictBtn.addEventListener("click", () => {

    const current =
        Number(currentCgpa.value);

    const expected =
        Number(expectedGpa.value);

    if (!current || !expected) {
        return;
    }

    const prediction =
        (
            (current * 0.7) +
            (expected * 0.3)
        ).toFixed(2);

    predictionResult.textContent =
        `Predicted Future CGPA: ${prediction}`;

});

/* ==========================
   STUDY PLANNER
========================== */

let studyTasks =
    JSON.parse(
        localStorage.getItem("studyTasks")
    ) || [];

displayStudyTasks();

addStudyTaskBtn.addEventListener(
    "click",
    () => {

        const task =
            studyTask.value.trim();

        if (!task) {
            return;
        }

        studyTasks.push(task);

        localStorage.setItem(
            "studyTasks",
            JSON.stringify(studyTasks)
        );

        displayStudyTasks();

        studyTask.value = "";

    }
);

function displayStudyTasks() {

    studyList.innerHTML = "";

    studyTasks.forEach(
        (task, index) => {

            const li =
                document.createElement("li");

            li.innerHTML = `
                ${task}

                <button
                    class="delete-btn">
                    Delete
                </button>
            `;

            const deleteButton =
                li.querySelector(
                    ".delete-btn"
                );

            deleteButton.addEventListener(
                "click",
                () => {

                    studyTasks.splice(
                        index,
                        1
                    );

                    localStorage.setItem(
                        "studyTasks",
                        JSON.stringify(
                            studyTasks
                        )
                    );

                    displayStudyTasks();

                }
            );

            studyList.appendChild(li);

        }
    );

}

/* ==========================
   ASSIGNMENT TRACKER
========================== */

let assignments =
    JSON.parse(
        localStorage.getItem("assignments")
    ) || [];

displayAssignments();

addAssignmentBtn.addEventListener(
    "click",
    () => {

        const name =
            assignmentName.value.trim();

        const dueDate =
            assignmentDate.value;

        if (!name || !dueDate) {
            return;
        }

        assignments.push({
            name,
            dueDate
        });

        localStorage.setItem(
            "assignments",
            JSON.stringify(assignments)
        );

        displayAssignments();

        assignmentName.value = "";
        assignmentDate.value = "";

    }
);

function displayAssignments() {

    assignmentList.innerHTML = "";

    assignments.forEach(
        (assignment, index) => {

            const li =
                document.createElement("li");

            li.innerHTML = `
                <strong>
                    ${assignment.name}
                </strong>

                -
                ${assignment.dueDate}

                <button
                    class="delete-btn">
                    Delete
                </button>
            `;

            const deleteButton =
                li.querySelector(
                    ".delete-btn"
                );

            deleteButton.addEventListener(
                "click",
                () => {

                    assignments.splice(
                        index,
                        1
                    );

                    localStorage.setItem(
                        "assignments",
                        JSON.stringify(
                            assignments
                        )
                    );

                    displayAssignments();

                }
            );

            assignmentList.appendChild(li);

        }
    );

}