const Reader = require("./../lib/utils/Reader");
const explorers = Reader.readJsonFile("./explorers.json");
const ExplorerService = require("./../lib/services/ExplorerService");
const FizzbuzzService = require("./../lib/services/FizzbuzzService");

describe("Test para clase User", () => {
    
    test("Prueba 1 reader", () => { 
        const explorersP = Reader.readJsonFile("./explorers.json");
        // console.log(explorersP)
        expect(explorersP).not.toBeUndefined();
    });

    test("Prueba 2 ExplorerService", () => { 
        //Aqui se coloca el codigo a testear
        const filterMission = ExplorerService.filterByMission(explorers, "node");
        // console.log(filterMission)
        expect(filterMission[0].mission).toBe("node");

        const numExplorerPorMision = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        // console.log(numExplorerPorMision)
        expect(numExplorerPorMision).toBe(10);

        const users = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        // console.log(users[6])
        expect(users[6]).toBe("Woopa12");
    });

    test("Prueba 3 ", () => {
        const explorer1 = {name: "Explorer1", score: 1};
        const trinck1 = FizzbuzzService.applyValidationInExplorer(explorer1).trick; // {name: "Explorer1", score: 1, trick: 1} 
        expect(trinck1).toBe(1);

        const explorer3 = {name: "Explorer3", score: 3};
        const trinck3 = FizzbuzzService.applyValidationInExplorer(explorer3).trick; // {name: "Explorer3", score: 3, trick: "FIZZ"}
        expect(trinck3).toBe("FIZZ");

        const explorer5 = {name: "Explorer5", score: 5};
        const trinck5 = FizzbuzzService.applyValidationInExplorer(explorer5).trick; // {name: "Explorer5", score: 5, trick: "BUZZ"}
        expect(trinck5).toBe("BUZZ");

        const explorer15 = {name: "Explorer15", score: 15};
        const trinck3y5 = FizzbuzzService.applyValidationInExplorer(explorer15).trick; // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}
        expect(trinck3y5).toBe("FIZZBUZZ");
    });
});