exports.up = (pgm) => {
    pgm.createTable('user_to_cr', {
        user_id: {
            type: 'varchar(12)',
            notNull: true,
            references: 'users(id)',
            onDelete: 'CASCADE',
        },
        cr_id: {
            type: 'integer',
            notNull: true,
            references: 'cr(id)',
            onDelete: 'CASCADE',
        },
        relationship_type: {
            type: 'varchar(50)',
            notNull: true,
        }
    }, {
        primaryKey: ['user_id', 'cr_id'],
    });
}

exports.down = (pgm) => {
    pgm.dropTable('user_to_cr');
}