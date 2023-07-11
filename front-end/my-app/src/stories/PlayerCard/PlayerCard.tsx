import React from "react";
//import { Close, Done, Share } from "@mui/icons-material";
import { Card, CardActions, CardContent, CardHeader, IconButton, styled } from "@mui/material";

export interface PlayerCardProps {
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

const StyledCard = styled(Card)(({ theme }) => ({
    maxWidth: '500px'
}));

export const PlayerCard = ({ 
    tag, 
    name, 
    townHallLevel, 
    townHallWeaponLevel, 
    expLevel, 
    trophies, 
    bestTrophies, 
    warStars, 
    attackWins, 
    defenseWins, 
    builderHallLevel, 
    builderBaseTrophies, 
    bestBuilderBaseTrophies, 
    versusBattleWins, 
    role
}: PlayerCardProps) => {
    function thImage() {
        const BASE_URL_pre = "https://coc.guide/static/imgs/other/town-hall-";
        const BASE_URL_suf = ".png";
        return (BASE_URL_pre.concat(townHallLevel.toString()).concat(BASE_URL_suf));
    }

    function bhImage() {
        const BASE_URL_pre = "https://coc.guide/static/imgs/other/town-hall2-";
        const BASE_URL_suf = ".png";
        return (BASE_URL_pre.concat(builderHallLevel.toString()).concat(BASE_URL_suf));
    }

    return ( <StyledCard>
        <CardHeader title={name} subheader={tag} />
        <CardContent>
            <p> Experience: {expLevel} </p>
            <p> Town Hall: {townHallLevel} </p> 
            <img src={thImage()} alt={townHallLevel.toString()} width="100" />
            <p> TH Weapon Level: {townHallWeaponLevel} </p> 
            <br/>
            <p> Trophies: {trophies}, &nbsp; Best Trophies: {bestTrophies} </p>
            <p> Attack Wins: {attackWins}, &nbsp; Defence Wins: {defenseWins} </p>
            <p> War Stars: {warStars} </p>
            <br/>
            <p> Builder Hall: {builderHallLevel} </p> 
            <img src={bhImage()} alt={builderHallLevel.toString()} width="100" />
            <p> Builder Base Trophies: {builderBaseTrophies}, &nbsp; Best Builder Base Trophies: {bestBuilderBaseTrophies} </p>
            <p> Builder Base Batle Wins: {versusBattleWins} </p>
        </CardContent>
    </StyledCard> );
}


