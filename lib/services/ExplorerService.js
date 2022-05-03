
class ExplorerService{
    static filterByMission(explorers, mission){
        const newExplorers = explorers.filter((explorer) => explorer.mission == mission);
        return newExplorers;
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const newExplorers = this.filterByMission(explorers, mission);
        return newExplorers.length;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const newExplorers = this.filterByMission(explorers, mission);
        const Usersname = newExplorers.map((explorer) =>  explorer.name);
        return Usersname;
    }   
}

module.exports = ExplorerService;