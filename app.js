import fs from "fs";

const readJSON = () => {
  try {
    const data = fs.readFileSync("task.json", "utf8");
    if (!data || data.trim() === "") {
      return [];
    }
    return JSON.parse(data); // Parse it so it's an object/array, not just text
  } catch (err) {
    console.log(err);
  }
};

readJSON();

// fs.writeFile("task.json", "hello", "utf8", (err) => {
//   if (err) {
//     console.error("Failed to write file:", err);
//     return;
//   }
//   console.log("File written successfully!");
// });
// const data = { name: "John", age: 30, city: "New York" };
// fs.writeFileSync("task.json", JSON.stringify(data, null, 4), "utf8");

const instruction = process.argv[2];
const status = process.argv[3];
// console.log(instruction);

const saveJSON = (data) => {
  fs.writeFileSync("task.json", JSON.stringify(data, null, 4), "utf8");
};

if (instruction == "add") {
  const taskData = process.argv[3];
  console.log(taskData);
  let tasks = readJSON();
  let myID = tasks.length == 0 ? 1 : tasks[tasks.length - 1].id + 1;
  let desc = "adding data into json";
  let status = "todo";
  let createdAt = new Date();
  let updatedAt = new Date();
  let tempValue = {
    id: myID,
    data: taskData,
    description: desc,
    status: status,
    createdAt: createdAt,
    updatedAt: updatedAt,
  };
  tasks.push(tempValue);
  saveJSON(tasks);
}

if (instruction == "delete") {
  const taskID = process.argv[3];
  let tasks = readJSON();
  console.log(tasks);
  let updatedData = tasks.filter((task) => task.id != taskID);
  saveJSON(updatedData);
}

if (instruction == "update") {
  const updateId = process.argv[3];
  const updatedValue = process.argv[4];
  let tasks = readJSON();
  let updatedTask = tasks.find((task) => task.id == updateId);
  console.log(updatedTask);
  if (updatedTask) {
    updatedTask.data = updatedValue;
    updatedTask.updatedAt = new Date();
    saveJSON(tasks);
  }
}

if (instruction == "list") {
  let tasks = readJSON();
  if (status == undefined) {
    let num = 1;
    tasks.forEach((task) => {
      console.log(`${num} Task Name: ${task.data}, Status: ${task.status}`);
      num++;
    });
  } else if (status == "todo") {
    let todoTasks = tasks.filter((task) => task.status == "todo");
    let num = 1;
    todoTasks.forEach((task) => {
      console.log(`${num} Task Name: ${task.data}, Status: ${task.status}`);
      num++;
    });
  } else if (status == "done") {
    let todoTasks = tasks.filter((task) => task.status == "done");
    let num = 1;
    todoTasks.forEach((task) => {
      console.log(`${num} Task Name: ${task.data}, Status: ${task.status}`);
      num++;
    });
  } else if (status == "in-progress") {
    let todoTasks = tasks.filter((task) => task.status == "in-progress");
    let num = 1;
    todoTasks.forEach((task) => {
      console.log(`${num} Task Name: ${task.data}, Status: ${task.status}`);
      num++;
    });
  }
}
