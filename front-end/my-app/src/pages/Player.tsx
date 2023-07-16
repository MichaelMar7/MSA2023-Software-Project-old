import axios from "axios";
import React, { useState } from 'react';
import '../App.css';

import {Button} from "../stories/Button/Button";
import {PlayerCard} from "../stories/PlayerCard/PlayerCard";
import { useGetPlayerQuery } from "../api/apiSlice" ;

export default function Player () {
    const [playerTag, setPlayerTag] = useState("");
    const [playerInfo, setPlayerInfo] = useState<undefined | any>(undefined);

    const BASE_URL = "https://localhost:7071/api"

    const { data, error, isLoading } = useGetPlayerQuery(playerTag)

    return (
        <div>
            <div>
                <label>Player Tag</label>
                <input type="text" id="player-tag" name="player-tag" onChange={(e) => setPlayerTag(e.target.value)} />
                <br/>
                <Button label="Search" size="small" primary={true} onClick={search2} />
            </div>

            {playerInfo === undefined ? (
                <p> Player not found </p>
            ) : (
                <div>
                    <PlayerCard 
                    tag={playerInfo.tag} 
                    name={playerInfo.name} 
                    townHallLevel={playerInfo.townHallLevel} 
                    townHallWeaponLevel={playerInfo.townHallWeaponLevel} 
                    expLevel={playerInfo.expLevel} 
                    trophies={playerInfo.trophies} 
                    bestTrophies={playerInfo.bestTrophies}
                    warStars={playerInfo.warStars}
                    attackWins={playerInfo.attackWins}
                    defenseWins={playerInfo.defenseWins}
                    builderHallLevel={playerInfo.builderHallLevel}
                    builderBaseTrophies={playerInfo.builderBaseTrophies}
                    bestBuilderBaseTrophies={playerInfo.bestBuilderBaseTrophies}
                    versusBattleWins={playerInfo.versusBattleWins}
                    role={playerInfo.role} />
                </div>
            )}
        </div>
    )

    
    function search() {
        //setPlayerInfo(data);
        axios
            .get(BASE_URL + "/Player/" + encodeURIComponent(playerTag))
            .then((res) => {
                setPlayerInfo(res.data);
            })
            .catch((err) => {
                console.log("Player not found");
                setPlayerInfo(undefined);
            });
    }

    function search2() {
        setPlayerInfo(data);
    }

    function thImage() {
        const BASE_URL_pre = "https://coc.guide/static/imgs/other/town-hall-";
        const BASE_URL_suf = ".png";
        return (BASE_URL_pre.concat(playerInfo.townHallLevel).concat(BASE_URL_suf));
    }
}