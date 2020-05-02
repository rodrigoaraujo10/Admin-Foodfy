module.exports = {
    date(timestamp) {
        const date = new Date(timestamp)

        const year = date.getFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)
        

        return {
            iso: `${year}-${month}-${day}`,
            day,
            month,
            year,
            birthDay: `${day}/${month}`,
            format: `${day}/${month}/${year}`
        }
    }
}