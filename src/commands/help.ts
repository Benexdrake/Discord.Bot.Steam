import { ApplicationCommandOptionType, ForumChannel, GuildTextThreadManager, MessagePayload, ThreadChannel } from "discord.js";
import { Command } from "../client/Command";

import {client} from '..'
import { HelpEmbed } from "../embeds/helpEmbed";


export default new Command(
{
    name: "help",
    description: "help me",
    options: [{name: 'command', description: 'help for command', type: ApplicationCommandOptionType.String}],
        
    run: async ({ interaction }) => 
    {
        const embed = new HelpEmbed().Build(interaction);
        interaction.followUp({embeds:[embed]})
    }
});









