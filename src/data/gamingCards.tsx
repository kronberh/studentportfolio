import { FaVideo } from "react-icons/fa";
import { TbBrandMinecraft } from "react-icons/tb";
import { SiRoblox } from "react-icons/si";
import { FaSteamSymbol } from "react-icons/fa";
import { GamingCard } from "../datatypes/GamingCard";

const gamingCards: GamingCard[] = [
    {
        title: "\"We give you items, you build your game\" (Genre: Sandbox)",
        description: "Where players are provided with all materials and instruments to fully inhance their creativity. In the video there is a redstone firework crafter and launcher inspired by autocraft machines.",
        videoPath: "/minecraft_firework_crafter.mp4",
        links: [
            { icon: <FaVideo />, href: "/minecraft_firework_crafter.mp4" },
            { icon: <TbBrandMinecraft />, href: "https://www.minecraft.net/en-us/store/minecraft-java-bedrock-edition-pc" }
        ]
    },
    {
        title: "\"Genre fusion\" (Genre: Puzzle x Tower Defence)",
        description: "A union of two beloved game genres where well-known mechanics are combined into a new way of gaming, making players cooperate to create brand new strategies. In the video there is a \"minesweeper\" map of a tower defence game, where the goal is to \"sweep\" the enemies path before they detonate mines.",
        videoPath: "/tower_heroes_minesweeper.mp4",
        links: [
            { icon: <FaVideo />, href: "/tower_heroes_minesweeper.mp4" },
            { icon: <SiRoblox />, href: "https://www.roblox.com/games/4646477729" }
        ]
    },
    {
        title: "\"To admire and to be careful\" (Genre: Platformer)",
        description: "Where a fascinating talent of creative artists is to be experienced from a pov of an athletic explorer. In the video there is a fragment of 16lord's \"The Towerverse\" level.",
        videoPath: "/geometry_dash_the_towerverse.mp4",
        links: [
            { icon: <FaVideo />, href: "/geometry_dash_the_towerverse.mp4" },
            { icon: <FaSteamSymbol />, href: "https://store.steampowered.com/app/322170/Geometry_Dash" }
        ]
    },
    {
        title: "\"Not just about speed\" (Genre: Rhythm)",
        description: "A simple, yet a catching concept of translating music into a gaming perfomance. It does have one thing in common with puzzle games: once you learn to recongize patterns, the rest is a matter of practice.",
        videoPath: "/robeats_last_attack_hard.mp4",
        links: [
            { icon: <FaVideo />, href: "/robeats_last_attack_hard.mp4" },
            { icon: <SiRoblox />, href: "https://www.roblox.com/games/698448212" }
        ]
    }
];

export { gamingCards }
