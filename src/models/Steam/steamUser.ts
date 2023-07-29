import { SteamGameMini } from "./steamGameMini";

export class SteamUser
{
    public username:string = "";
    public profileUrl:string = "";
    public avatarUrl:string = "";
    public country:string = "";
    public games:string = "";
    public created:Date = new Date();
    public lastLogoff:Date = new Date();
    public steamGameMini:SteamGameMini[] = [];
}