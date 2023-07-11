using ClashApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http.Headers;
using System.Xml.Serialization;

namespace ClashApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlayerController : ControllerBase
    {
        private HttpClient _client;

        public PlayerController(HttpClient client)
        {
            _client = client;
        }

        [HttpGet("{tag}")]
        public async Task<Player> getPlayer(string tag = "#9GYR0UYV2")
        {
            string API_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImFhY2EyYTMzLTMwMWUtNDg1YS05ZWI0LWQ1ZTAyNWUzYzZkOCIsImlhdCI6MTY4ODI2Mzg0NSwic3ViIjoiZGV2ZWxvcGVyL2YwNDY0M2VlLTkyMTEtYTUyMi00ODkwLTUwYjZkNDc3M2I3MSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjQ1Ljc5LjIxOC43OSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.D-kutC64vNdxtSOBYcLj0FOk06iSvSEYTZGzjO34nPYL_cC82jGH3FUPrM4e4Jl-57mFu578ucw3-g4--EgSYQ";
            _client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", API_KEY);

            Player player = null;
            tag = tag.Substring(1, tag.Length-1);
            string url = $"https://cocproxy.royaleapi.dev/v1/players/%23{tag}";

            HttpResponseMessage response = await _client.GetAsync(url);

            if (response.IsSuccessStatusCode)
            {
                player = await response.Content.ReadAsAsync<Player>();
                return player!;
            }
            else
            {
                throw new Exception(response.ReasonPhrase);
            }
        }
    }
}

