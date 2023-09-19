import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({name: 'usuarios'})
export class User {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    nombre: string

    @Column()
    correo: string

    @Column()
    contra: string
}