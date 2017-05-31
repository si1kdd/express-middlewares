const cors = () => (req,res,next) => {
	next();
};

module.exports = cors;
