import { isNumberObject } from "util/types";
import { Steam_API } from "../controllers/steam_API";
import { SteamGameEmbed } from "../embeds/steamGameEmbed";
import { SteamUserEmbed } from "../embeds/steamUserEmbed";
import { ExtendedInteraction } from "../interfaces/ExtendedInteraction";

export class SteamLogic
{
    public async Steam(interaction:ExtendedInteraction)
    {
        const steam_API = new Steam_API();
        const url = interaction.options.data[0]?.value as string;

        if(interaction.options.data[0].name === 'url')
        {
            if(url.includes('https://store.steampowered.com/app/'))
            {
                const steamgame = await steam_API.GetSteamGame(url);
                const embed = new SteamGameEmbed().build(steamgame);
                interaction.followUp({embeds:[embed]});
            }
            else
            interaction.followUp('Please enter a real Steam Url');
        }
        else if(interaction.options.data[0].name === 'user')
        {
            const value = interaction.options.data[0].value as string;
            
            let id = "";
            
            const n = parseInt(value);

            if(value.includes('https://steamcommunity.com/'))
            {
                id = await steam_API.ConvertUsernameToID(url);

            }
            else if(!isNaN(n))
            {
                id = n.toString();
            }
            else
            {
                id = await steam_API.ConvertUsernameToID(`https://steamcommunity.com/id/${value}`);
            }

            if(id === "" || undefined)
            {
                interaction.followUp(`Cant find User: ${value}`);
                return;
            }

            const user = await steam_API.GetSteamUserProfile(id.toString());
            const embed = new SteamUserEmbed().build(user);
            interaction.followUp({embeds: [embed]});
        }
    }
}