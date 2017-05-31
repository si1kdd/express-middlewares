const morgan = () => (req,res,next) => {
	next();
};

module.exports = morgan;
