﻿namespace ClashApi.Models
{
    public class PlayerClan
    {
        public string tag { get; set; }
        public string name { get; set; }
        public int clanLevel { get; set; }
        public List<string> badgeUrls { get; set; }
    }
}
