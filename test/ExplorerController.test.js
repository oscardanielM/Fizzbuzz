const ExplorerController = require("../lib/controllers/ExplorerController");

describe("Test para clase ExplorerController", () => {
    test("Prueba 1", () => { 
        //Aqui se coloca el codigo a testear
        const filterMission = ExplorerController.getExplorersByMission("node");
        expect(filterMission[0].mission).toBe("node");

        const numExplorerPorMision = ExplorerController.getExplorersAmonutByMission("node");
        expect(numExplorerPorMision).toBe(10);

        const users = ExplorerController.getExplorersUsernamesByMission("node");
        expect(users[6]).toBe("Woopa12");
    });

    test("Prueba 2", () => { 
        //Aqui se coloca el codigo a testear
        const filterMission = ExplorerController.getExplorersByMission("node");
        expect(filterMission[0].mission).toBe("node");

        const numExplorerPorMision = ExplorerController.getExplorersAmonutByMission("node");
        expect(numExplorerPorMision).toBe(10);

        const users = ExplorerController.getExplorersUsernamesByMission("node");
        expect(users[6]).toBe("Woopa12");
    });
});