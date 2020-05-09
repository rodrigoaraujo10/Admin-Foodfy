const { date } = require('../../lib/utils')
const db = require('../../config/db')


module.exports = {
    all(callback) {
        db.query(`
        SELECT chefs.*, count(recipes) AS total_recipes
        FROM chefs
        LEFT JOIN recipes ON (recipes.chef_id = chefs.id)
        GROUP BY chefs.id`, function(err, results) {
                if(err) throw `Database Error! ${err}`

                callback(results.rows)
            })
    },
    create(data, callback) {
        const query = `
            INSERT INTO recipes (
                chef_id,
                image,
                title,
                ingredients,
                preparation,
                information,
                created_at
                ) VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING id
        `
        const values = [
            data.chef,
            data.image,
            data.title,
            data.ingredients,
            data.preparation,
            data.information,
            date(Date.now()).iso
        ]


        db.query(query, values, function(err, results) {
            if(err) throw `Database Error! ${err}`

            callback(results.rows[0])
        })
    },

    find(id, callback) {

        db.query(`
            SELECT * FROM recipes
            WHERE id = $1`, [id], function (err, results) {
                if(err) throw `Database Error! ${err}`

                callback(results.rows[0])
            })
    },

    update(data, callback) {
        const query = `
            UPDATE recipes SET
                image=($1),
                title=($2),
                ingredients=($3),
                preparation=($4),
                information=($5),
                chef_id=($6)
            WHERE id = $7
        `

        const values = [
            data.image,
            data.title,
            data.ingredients,
            data.preparation,
            data.information,
            data.chef,
            data.id
        ]

        db.query(query, values, function(err, results) {
            if(err) throw `Database Error! ${err}`

            callback()
        })
    },

    delete(id, callback) {
        db.query(`
            DELETE FROM recipes WHERE id = $1`, [id], function(err, results) {
                if(err) throw `Database Error! ${err}`

                callback()
            })
    },

    createChef(data, callback) {
        const query = `
            INSERT INTO chefs (
                name,
                avatar_url,
                created_at
            ) VALUES ($1, $2, $3)
            RETURNING id
        `
        const values = [
            data.name,
            data.avatar_url,
            date(Date.now()).iso
        ]

        db.query(query, values, function(err, results) {
            if(err) throw `Database Error"${err}`

            callback(results.rows[0])
        })
    },

    findChef(id, callback) {
        db.query(`SELECT *
            FROM chefs
            WHERE id = $1`, [id], function(err, results) {
                if(err) throw `Database Error! ${err}`

                callback(results.rows[0])
            })
    },

    chefSelectOptions(callback) {
        db.query(`SELECT name, id FROM chefs`, function(err, results) {
            if(err) throw `Database Error! ${err}`

            callback(results.rows)
        })
    },

    // countRecipes(id, callback) {
    //     db.query(`
    //     SELECT chefs.*, count(recipes) AS total_recipes
    //     FROM chefs
    //     LEFT JOIN recipes ON (recipes.chef_id = chefs.id)
    //     GROUP BY chefs.id`,[id], function(err, results) {
    //             if(err) throw `Database Error! ${err}`

    //             callback(results.rows)
    //         })
    //     }
    
}