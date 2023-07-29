import { EmbedBuilder, PermissionsBitField } from "discord.js";
import { ExtendedInteraction } from "../interfaces/ExtendedInteraction";
import {client} from '..'


export class HelpEmbed
{
    Build(interaction:ExtendedInteraction) : EmbedBuilder
    {
        const embed = new EmbedBuilder();
        
        if(interaction.options.data.length === 0)
        {
            embed.setTitle('/help')
            .setDescription('a List of all Commands')
            const commands = client.commands.map(x => {return {name: x.name, description: x.description, role: x.defaultMemberPermissions}})
            for(const command of commands)
            {
                if(command.role?.toString() === '8')
                {
                    if(interaction.memberPermissions?.has("Administrator"))
                        embed.addFields({name: '🛠 /'+command.name, value: `${command.description}`})
                }
                else
                {
                    embed.addFields({name: '/'+command.name, value: `${command.description}`})
                }
            }
        }
        else
        {
            const value = interaction.options.data[0].value;

            const commands = client.commands.map(x => { 
                return {name: x.name, description: x.description, options: x.options?.map(z => {
                    return { name: z.name, description: z.description }})}});

            const c = commands.find(x => x.name === value)

            embed.setTitle('/'+c?.name || "")
            if(c?.options !== undefined)
                for(const option of c.options)
                {
                    embed.addFields({name: option.name, value: option.description})
                }
        }

        return embed;
    }
}