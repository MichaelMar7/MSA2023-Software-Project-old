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

        [HttpGet]
        public async Task<Player> getPlayer(string tag)
        {
            string API_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjExZGU5YWFjLTVjMGQtNDY1YS1hYWUxLTEzYTY4NTA0YzNmMCIsImlhdCI6MTY4ODA5ODk2Miwic3ViIjoiZGV2ZWxvcGVyL2YwNDY0M2VlLTkyMTEtYTUyMi00ODkwLTUwYjZkNDc3M2I3MSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjIwMi4zNi4yNDQuMiIsIjIwMi4zNi4yNDQuMTAiXSwidHlwZSI6ImNsaWVudCJ9XX0.NfYqydpLqKpYp-RHOkxPEK8hMjYDG_hWDJCOXY9RARuiSvabpIkM22qpFsN_bTsWU1AkhUE4a3fFkWBfhjmSOQ";
            _client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", API_KEY);

            Player player = null;
            tag = tag.Substring(1, tag.Length-1);
            string url = $"https://api.clashofclans.com/v1/players/%23{tag}";

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

