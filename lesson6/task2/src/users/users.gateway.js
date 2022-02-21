const base = "https://api.github.com/users";

export const getUserData = (userName) =>
  fetch(`${base}/${userName}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(alert("Error"));
  });
