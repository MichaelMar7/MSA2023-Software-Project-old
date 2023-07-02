import axios from "axios";
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [playerTag, setPlayerTag] = useState("");
    const [playerInfo, setPlayerInfo] = useState<undefined | any>(undefined);

    const BASE_URL = "https://localhost:7071/api"

    return (
        <div>
            <h1> Clash of Clans Player Search </h1>

            <div>
                <label>Player Tag</label>
                <input type="text" id="player-tag" name="player-tag" onChange={(e) => setPlayerTag(e.target.value)} />
                <br/>
                <button onClick={search}>Search</button>
            </div>

            {playerInfo === undefined ? (
                <p> Player not found </p>
            ) : (
                <div>
                    <p> { playerInfo.name } </p>
                    <p> Town Hall: { playerInfo.townHallLevel } </p>
                    <img src={thImage()} alt="" />
                    <p> Trophies: { playerInfo.trophies } </p>
                    { playerInfo.league === null ? (
                        <p>No League</p>
                    ) : (
                        <div>
                            <p>{ playerInfo.league.name }</p>
                            <img src={ playerInfo.league.iconUrls.small } alt="" />
                        </div>
                    ) }
                    { playerInfo.clan === null ? (
                        <p>No Clan</p>
                    ) : (
                        <div>
                            <p>{ playerInfo.clan.name }</p>
                            <img src={ playerInfo.clan.badgeUrls.small } alt="" />
                        </div>
                    ) }
                </div>
            )}
        </div>
    );

    function search() {
        axios
            .get(BASE_URL + "/Player?tag=" + encodeURIComponent(playerTag))
            .then((res) => {
                setPlayerInfo(res.data);
            })
            .catch((err) => {
                console.log("Player not found");
                setPlayerInfo(undefined);
            });
    }

    function thImage() {
        const BASE_URL_pre = "https://coc.guide/static/imgs/other/town-hall-";
        const BASE_URL_suf = ".png";
        return (BASE_URL_pre.concat(playerInfo.townHallLevel).concat(BASE_URL_suf));
    }
}



export default App;
