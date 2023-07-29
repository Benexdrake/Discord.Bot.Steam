import { ApplicationCommandOptionType } from "discord.js";
import { Command } from "../client/Command";
import { SteamLogic } from "../logic/steamLogic";

export default new Command(
{
    name: "steam",
    description: "ask steam for games or user profiles",
    options: [
        {
            name: 'url',
            description:'enter a steam game url',
            type: ApplicationCommandOptionType.String
        },
        {
            name: 'user',
            description: 'enter a steam user url',
            type: ApplicationCommandOptionType.String
        }],
        
    run: async ({ interaction }) => 
    {
        await new SteamLogic().Steam(interaction);
    }
});