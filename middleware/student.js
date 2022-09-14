const validationData = (req, res, next) =>{
    console.log('Data Is ok');
    next()
}

module.exports = {validationData}