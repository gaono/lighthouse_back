exports.up = (pgm) => {
    pgm.createTable('cr', {
        id: {
            type: 'serial',
            primaryKey: true
        },
        name: {
            type: 'varchar(255)',
            notNull: true,
            unique: true
        },
        is_DDIC: {
            type: 'boolean',
            notNull: true,
        },
        environment: {
            type: 'varchar(255)',
            notNull: true,
        }, 
        is_customization: {
            type: 'boolean',
            notNull: true
        },
        is_released: {
            type: 'boolean',
            notNull: true 
        },
        is_documented: {
            type: 'boolean',
            notNull: true
        },
    })
}

exports.down = (pgm) => {
    pgm.dropTable('cr');
}