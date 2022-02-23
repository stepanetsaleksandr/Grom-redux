const baseUrl = "https://621365fef43692c9c6031799.mockapi.io/ap1/v1/tasks";

export const createTask = async (taskData) => {
  const respone = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(taskData),
  });
  if (!respone.ok) {
    throw new Error("HEXYSI");
  }
};

export const fetchTasksList = async () => {
  const res = await fetch(baseUrl);
  if (res.ok) {
    return res.json();
  }
};

export const updateTask = async (taskId, taskData) => {
  const respone = await fetch(`${baseUrl}/${+taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(taskData),
  });
  if (!respone.ok) {
    throw new Error("HEXYSI update");
  }
};

export const deleteTask = async (taskId) => {
  const respone = await fetch(`${baseUrl}/${taskId}`, {
    method: "DELETE",
  });
  if (!respone.ok) {
    throw new Error("HEXYSI update");
  }
};
