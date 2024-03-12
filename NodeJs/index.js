import express from "express";

const app = express();

app.use(express.json());

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  var mascots = [
    { name: "Moby Dock", organization: "Docker", birth_year: 2013 },
  ];
  var tagline =
    "No programming concept is complete without a cute animal mascot.";

  res.render("index", {
    mascots: mascots,
    tagline: tagline,
  });
});

app.post("/message", (req, res) => {
  res.send("Request body is missing !");
});

app.listen(8000, () => {
  console.log(`Server listening on port 8000`);
});
