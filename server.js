import express from "express";

const app = express();

app.use(express.json());

const PORT = 4000;

const users = [
  {
    id: 0,
    name: "Danielle",
    email: "danielle@inceptionu.com",
    password: "password123",
  },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  console.log(newUser);
  users.push(newUser);
  res.send("Successfully added " + newUser.name);
});

app.get("/users/:id", (req, res) => {});

app.post("/users/:id", (req, res) => {});

app.delete("/users/:id", (req, res) => {});

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});

// app.get("/", (req, res) => {
//   res.status(200).send("Hello World!!!!");
// });

// app.get("/goodbye", (req, res) => {
//   res.send("Express Rulez!!");
// });

// app.get("/object", (req, res) => {
//   res.json({ hello: "world" });
// });
// app.get("/spicy", (request, response) => {
//   // "currentDate": "Friday, October 14, 2022 10:42AM"

//   response.json({
//     currentDate: new Date().toLocaleDateString("en-us", {
//       month: "long",
//       day: "2-digit",
//       year: "numeric",
//       weekday: "long",
//       hour: "numeric",
//       minute: "2-digit",
//     }),
//   });
// });

// app.get("/forest", (request, response) => {
//   let daylight = request.query.daylight;
//   let numberOfDragons = request.query.numberOfDragons;

//   console.log("daylight is", daylight);
//   console.log("numberOfDragons is(", numberOfDragons, ")");
//   if (numberOfDragons === undefined) {
//     return response.send("Please enter numberOfDragons");
//   }
//   if (daylight == "true") {
//     response.send(
//       "You are in a deep, decently lit wood..." +
//         "with " +
//         (+numberOfDragons > 500 ? "A lot of" : numberOfDragons) +
//         " dragons"
//     );
//   } else {
//     response.send(
//       "You are in a deep, dark wood..." +
//         "with " +
//         (+numberOfDragons > 500 ? "A lot of" : numberOfDragons) +
//         " dragons"
//     );
//   }
// });
