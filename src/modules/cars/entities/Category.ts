import { Column, Entity, PrimaryColumn, CreateDateColumn } from "typeorm";

@Entity("categories")
class Category {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;
}

export { Category };
