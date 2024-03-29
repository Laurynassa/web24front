fetch("http://172.16.50.58:5000/api/v1/new", {
  method: "POST",
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
    "X-RapidAPI-Key": c2a76557447445f79c4b2a3f1010d9da,
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
