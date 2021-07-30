import { Tema } from "./Tema"
import { Usuario } from "./Usuario"


export class Postagem{
    public id: number
    public titulo: string
    public texto: string
    public datatempo: Date
    public curtidas: number
    public tb_usuarios: Usuario
    public tema: Tema
}