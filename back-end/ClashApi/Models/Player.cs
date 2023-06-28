namespace ClashApi.Models
{
    public class Player
    {
        public string tag { get; set; }
        public string name { get; set; }
        public int townHallLevel { get; set; }
        public int townHallWeaponLevel { get; set; }
        public int expLevel { get; set; }
        public int trophies { get; set; }
        public int bestTrophies { get; set; }
        public int warStars { get; set; }
        public int attackWins { get; set; }
        public int defenseWins { get; set; }
        public int builderHallLevel { get; set; }
        public int builderBaseTrophies { get; set; }
        public int versusTrophies { get; set; }
        public int bestBuilderBaseTrophies { get; set; }
        public int bestVersusTrophies { get; set; }
        public int versusBattleWins { get; set; }
        public Role role { get; set; }
        public WarPreference warPreference { get; set; }
        public int donations { get; set; }
        public int donationsReceived { get; set; }
        public int clanCapitalContributions { get; set; }
        public PlayerClan clan { get; set; }
        public League league { get; set; }
        public BulderBaseLeague builderBaseLeague { get; set; }
        public PlayerLegendStatics legendStatistics { get; set; }
        public List<PlayerAchievementProgress> achievements { get; set; }
        public PlayerHouse playerHouse { get; set; }
        public List<Label> labels { get; set; }
        public List<PlayerItemLevel> troops { get; set; }
        public List<PlayerItemLevel> heros { get; set; }
        public List<PlayerItemLevel> spells { get; set; }

    }
}
