import type { Meta, StoryObj } from '@storybook/react';

import { PlayerCard } from './PlayerCard';

export default {
    title: "Player Card",
    component: PlayerCard
} satisfies Meta<typeof PlayerCard>;

type Story = StoryObj<typeof PlayerCard>;

export const Default: Story = {args: {
    tag:"#123", 
    name:"PlayerOne", 
    townHallLevel:1, 
    townHallWeaponLevel:0, 
    expLevel:1,  
    trophies:30, 
    bestTrophies:30,
    warStars: 0,
    attackWins: 0,
    defenseWins: 0,
    builderHallLevel: 1,
    builderBaseTrophies: 0,
    bestBuilderBaseTrophies: 0,
    versusBattleWins: 0,
    role: "Admin",
}};

/*
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
*/
