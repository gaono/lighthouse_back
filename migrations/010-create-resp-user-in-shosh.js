exports.up = (pgm) => {
    pgm.createTable('resp_user_in_shosh', {
        user_id: {
            type: 'varchar(12)',
            notNull: true,
            references: 'users(id)',
            onDelete: 'CASCADE',
        },
        shosh_id: {
            type: 'integer',
            notNull: true,
            references: 'shosh(id)',
            onDelete: 'CASCADE',
        }
    }, {
        primaryKey: ['user_id', 'shosh_id'],
    });
}

exports.down = (pgm) => {
    pgm.dropTable('resp_user_in_shosh');
}