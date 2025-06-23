exports.up = (pgm) => {
    pgm.createTable('project', {
        id: {
            type: 'serial',
            primaryKey: true
        },
        name: {
            type: 'varchar(255)',
            notNull: true
        }
    });
}

exports.down = (pgm) => {
    pgm.dropTable('project');
}