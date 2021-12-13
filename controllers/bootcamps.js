const Bootcamp = require('../models/Bootcamps');
const ErrorResponse = require('../utils/errorResponse');

//@ desc    get bootcamp
// route    GET api/v1/bootcamps
//access     public

exports.getBootcamps = async (req, res, next) => {
	try {
		const bootcamps = await Bootcamp.find();
		res.status(200).json({
			success: true,
			data: bootcamps,
		});
	} catch (error) {
		// res.status(400).json({
		// 	success: false,
		// });
		next(err);
	}
};
//@ desc    get bootcamp
// route    GET api/v1/bootcamps/:id
//access     public

exports.getBootcamp = async (req, res, next) => {
	try {
		const bootcamp = await Bootcamp.findById(req.params.id);

		if (!bootcamp) {
			return next(
				new ErrorResponse(`Bootcamp with id ${req.params.id} not found`, 404)
			);
		}

		res.status(200).json({
			success: true,
			data: bootcamp,
		});
	} catch (err) {
		// res.status(400).json({
		//     success:false
		// })
		next(err);
	}
};
//@ desc    get bootcamp
// route    GET api/v1/bootcamps
//access     private

exports.createBootcamp = async (req, res, next) => {
	try {
		const bootcamp = await Bootcamp.create(req.body);

		res.status(201).json({
			success: true,
			data: bootcamp,
		});
	} catch (err) {
		// res.status(400).json({
		// 	success: false,
		// });
		next(err);
	}
};
//@ desc    get bootcamp
// route    GET api/v1/bootcamps/:id
//access     private

exports.updateBootcamp = async (req, res, next) => {
	try {
		const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		if (!bootcamp) {
			return res.status(400).json({
				success: false,
			});
		}
		res.status(200).json({
			success: true,
			data: bootcamp,
		});
	} catch (err) {
		// res.status(200).json({
		// 	success: true,
		// 	data: bootcamp,
		// });		next(err);
		next(err);
	}
};
//@ desc    get bootcamp
// route    GET api/v1/bootcamps/:1
//access     private

exports.deleteBootcamp = async (req, res, next) => {
	try {
		const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
		if (!bootcamp) {
			return res.status(400).json({
				success: false,
			});
		}
		res.status(200).json({
			success: true,
			data: {},
		});
	} catch (err) {
		// res.status(400).json({
		// 	success: false,
		// 	data: {},
		// });
		next(err);
	}
};
