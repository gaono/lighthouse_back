exports.up = (pgm) => {
    pgm.createTable('cr_to_shosh', {
        cr_id: {
            type: 'integer',
            notNull: true,
            references: 'cr(id)',
            onDelete: 'CASCADE',
        },
        shosh_id: {
            type: 'integer',
            notNull: true,
            references: 'shosh(id)',
            onDelete: 'CASCADE',
        },
        description: {
            type: 'text',
            notNull: false
        }
    }, {
        primaryKey: ['cr_id', 'shosh_id'],
    });
}

exports.down = (pgm) => {
    pgm.dropTable('cr_to_shosh');
}