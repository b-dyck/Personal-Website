import React from "react"
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import spotifyImg from "@/public/spotify.png";


export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#hash",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    }
] as const;

export const projects = [
    {
        title: "Six Degrees of Spotify",
        description: "A Spotify companion app which includes a game where  users to find a path between two artists on Spotify via their related artists.",
        tags: ["React", "Spotify API", "OAuth", "Node.js", "Express", "Heroku"],
        imageUrl: spotifyImg,
    },
    {
        title: "Six Degrees of Spotify",
        description: "A Spotify companion app which includes a game where  users to find a path between two artists on Spotify via their related artists.",
        tags: ["React", "Spotify API", "OAuth", "Node.js", "Express", "Heroku"],
        imageUrl: spotifyImg,
    }
] as const;