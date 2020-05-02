const fs = require('fs')

module.exports = {
    create(req, res) {
        return res.render('admin/createChef')
    },

    detailChef(req, res) {
        return res.render('admin/detailChef')
    }
}


