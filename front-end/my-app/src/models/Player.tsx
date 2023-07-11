export interface Player {
    tag: string,
    name: string,
    townHallLevel: number,
    townHallWeaponLevel: number,
    expLevel: number,
    trophies: number,
    bestTrophies: number,
    warStars: number,
    attackWins: number,
    defenseWins: number,
    builderHallLevel: number,
    builderBaseTrophies: number,
    bestBuilderBaseTrophies: number,
    versusBattleWins: number,
    role: string,

    //clan: PlayerClan,
    //league: League,
    //builderBaseLeague: BulderBaseLeague,
    //legendStatistics: PlayerLegendStatics,
    //troops: PlayerItemLevel[]
    //heros: PlayerItemLevel[]
    //spells: PlayerItemLevel[]
}