import { Colors, EmbedBuilder} from "discord.js";
import { SteamUser } from "../models/Steam/steamUser";

export class SteamUserEmbed
{
    
    public build(user:SteamUser) : EmbedBuilder
    {
        const embed = new EmbedBuilder();

        try 
        {
            embed.setAuthor({
                iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/768px-Steam_icon_logo.svg.png',
                name:user.username,
                url: user.profileUrl
            })
            .setColor(Colors.Blue)
            .setImage(user.avatarUrl)
            .setFields([
                {
                    name: 'Country',
                    value: user.country,
                    inline:true
                },
                {
                    name: 'Created',
                    value: user.created.toLocaleDateString(),
                    inline:true
                },
                {
                    name: 'Games',
                    value: user.games.toString()
                },
                
            ]);
            if(user.lastLogoff.toString() !== 'Invalid Date')
            {
                embed.setFooter({
                    text: `Last logoff: ${user.lastLogoff}`
                });    
            }

            if(user.steamGameMini?.length > 0)
            {
                embed.addFields({
                    name: ' ',
                    value: 'Last played Games:',
                });
                
                for(const game of user.steamGameMini)
                {
                    const n = (game.playtime_2weeks / 60).toFixed(2)
                    const e = {
                        name: game.name,
                        value: 'Playtime: ' + n + 'h'
                    }
                    embed.addFields(e);
                }
            }
        } 
        catch (error) 
        {
            console.log(error);
        }
        return embed;
    }
}