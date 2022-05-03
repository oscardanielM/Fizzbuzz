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
        const trinck1 = ExplorerController.getApplyValidationInNumber(1).trick; // {name: "Explorer1", score: 1, trick: 1} 
        expect(trinck1).toBe(1);

        const trinck3 = ExplorerController.getApplyValidationInNumber(3).trick; // {name: "Explorer3", score: 3, trick: "FIZZ"}
        expect(trinck3).toBe("FIZZ");

        const trinck5 = ExplorerController.getApplyValidationInNumber(5).trick; // {name: "Explorer5", score: 5, trick: "BUZZ"}
        expect(trinck5).toBe("BUZZ");

        const trinck3y5 = ExplorerController.getApplyValidationInNumber(15).trick; // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}
        expect(trinck3y5).toBe("FIZZBUZZ");
    });
});