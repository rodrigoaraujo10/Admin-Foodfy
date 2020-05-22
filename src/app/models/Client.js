const db = require('../../config/db')

module.exports = {
    all(callback) {
        db.query(`
            SELECT * FROM recipes`, function(err, results) {
                if(err) throw `Database Error! ${err}`

                callback(results.rows)
            })
    },

    find(id, callback) {
        db.query(`
            SELECT * FROM recipes
            WHERE id = $1`, [id], function(err, results) {
                if(err) throw `Database Error! ${err}`

                callback(results.rows[0])
                
            })

    },
    findBy(filter, callback) {
        db.query(`SELECT * FROM recipes
        WHERE recipes.title ILIKE '%${filter}%'`, function(err, results) {
            if(err) throw `Database Error! ${err}`

            callback(results.rows)
            
        })

    
    },

    allChefs(callback) {
        db.query(`SELECT chefs.*, count(recipes) AS total_recipes
        FROM chefs
        LEFT JOIN recipes ON (recipes.chef_id = chefs.id)
        GROUP BY chefs.id`, function(err, results) {
            if(err) throw `Database Error! ${err}`

            callback(results.rows)
        })
    }

    
}