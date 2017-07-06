import { TabTypeEnum } from './Enums'
import { ITab } from '../interfaces/ITab'

const Tabs : Array<ITab> = [
    { id:'home',    label:'Home',       link:'/',         icon:'home',        security: { Type:TabTypeEnum.open, Scopes:undefined } },
    { id:'profile', label:'Profile',    link:'/profile',  icon:'face',        security: { Type:TabTypeEnum.needsAuthentication, Scopes:undefined } },
    { id:'ping',    label:'Ping',       link:'/ping',     icon:'fingerprint', security: { Type:TabTypeEnum.needsAuthentication, Scopes:undefined } },
    { id:'admin',   label:'Admin Area', link:'/admin',    icon:'code',        security: { Type:TabTypeEnum.needsAuthorization, Scopes:["admin"]} }
];

const Title = {
    label:  "idp.code",
    font:   "Roboto Mono"
}

export const APP_CONFIG = {
    Tabs : Tabs,
    Title : Title
};
