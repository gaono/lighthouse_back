exports.up = (pgm) => {
    pgm.createTable('version', {
        id: { 
            type: 'serial',
            primaryKey: true,
        },
        name: { 
            type: 'varchar(255)', 
            notNull: true 
        },
        date: { 
            type: 'timestamp',
            notNull: true
        },
    });
}

exports.down = (pgm) => {
    pgm.dropTable('version');
}