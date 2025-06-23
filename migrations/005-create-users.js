exports.up = (pgm) => {
    pgm.createTable('users', {
        id: {
            type: 'varchar(12)',
            primaryKey: true
        },
        pernr: {
            type: 'varchar(10)',
            notNull: true,
        },
        name: {
            type: 'varchar(255)',
            notNull: true,
        },
        userType: {
            type: 'varchar(50)',
            notNull: true,
        },
        imageUrl: {
            type: 'varchar(255)',
            notNull: false,
        }
    });
}

exports.down = (pgm) => {
    pgm.dropTable('users');
}