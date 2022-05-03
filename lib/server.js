const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorerInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorerInMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    const totalDeExplorers = ExplorerController.getExplorersAmonutByMission(mission);
    response.json({"Mision":mission ,"Total de explores:": totalDeExplorers});
});

app.get("/v1/explorers/usernames/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorers = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json({"Mision":mission ,"Explorers:": explorers});
});

app.get("/v1/fizzbuzz/:score", (request, response) => {
    const score = request.params.score;
    const scores = ExplorerController.getApplyValidationInNumber(score);
    response.json(scores);
});

app.listen(port, () => {
    console.log(`FizzBuzz API en localhost:${port} hellow word je`);
});