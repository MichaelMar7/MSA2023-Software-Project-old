namespace ClashApi.Models
{
    public class PlayerItemLevel
    {
        public string name {  get; set; }
        public int level { get; set; }
        public int maxLevel { get; set; }
        public Village village { get; set; }
        public bool superTroopIsActive { get; set; }
    }
}
