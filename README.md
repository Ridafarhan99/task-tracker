# Task Tracker CLI

A simple command-line task management tool built with Node.js that stores tasks in a local JSON file.

> Project based on [roadmap.sh/projects/task-tracker](https://roadmap.sh/projects/task-tracker)

---

## Features

- Add new tasks with auto-incremented IDs
- Delete tasks by ID
- Update task data by ID
- Persistent storage via a local `task.json` file
- Timestamps for creation and last update

---

## Prerequisites

- [Node.js](https://nodejs.org/) v14 or higher

---

## Setup

```bash
# Clone or download the project
git clone <your-repo-url>
cd task-tracker

# No npm install needed — uses built-in Node.js `fs` module
```

---

## Usage

Run commands using `node index.js <instruction> [arguments]`.

### Add a Task

```bash
node index.js add "Buy groceries"
```

Creates a new task with a unique ID, default `null` status, and timestamps.

### Delete a Task

```bash
node index.js delete 1
```

Removes the task with the given ID from `task.json`.

### Update a Task

```bash
node index.js update 1 "Buy groceries and cook dinner"
```

Updates the `data` field and refreshes `updatedAt` for the task with the given ID.

---

## Task Structure

Each task stored in `task.json` follows this shape:

```json
{
  "id": 1,
  "data": "Buy groceries",
  "description": "adding data into json",
  "status": null,
  "createdAt": "2025-01-01T00:00:00.000Z",
  "updatedAt": "2025-01-01T00:00:00.000Z"
}
```

| Field         | Type   | Description                          |
| ------------- | ------ | ------------------------------------ |
| `id`          | number | Auto-incremented unique identifier   |
| `data`        | string | The task content                     |
| `description` | string | Internal note (hardcoded for now)    |
| `status`      | null   | Placeholder for future status values |
| `createdAt`   | Date   | Timestamp when task was created      |
| `updatedAt`   | Date   | Timestamp of last update             |

---

## File Structure

```
task-tracker/
├── index.js       # Main CLI script
└── task.json      # Auto-generated task storage file
```
