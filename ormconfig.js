module.exports={
    type:"postgres",
    host:"localhost",
    port:"5432",
    username:"postgres",
    password:"wilb12m02",
    database: process.env.NODE_ENV ==='test' ? 'rentx-test' : 'rentx-db',
    migrations:["./src/shared/infra/typeorm/migrations/*.ts"],
    entities:["./src/modules/**/infra/typeorm/entities/*.ts"],
    cli:{
        "migrationsDir":"./src/shared/infra/typeorm/migrations"
    }
}