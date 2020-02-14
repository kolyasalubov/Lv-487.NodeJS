const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductSchema = new Schema({
    model: {
        type: String,
        required: true,
    },
    brand: {
        type: String, // type: Schema.Types.ObjectId,
        required: true,
    },
    //     gender: {
    //         type: String,
    //         enum: ['woman', 'man', 'unisex'],
    //         required: true,
    //     },
    //     forKid: {
    //         type: Boolean,
    //         required: true,
    //     },
    //     sizes: [
    //         {
    //             value: {
    //                 type: String,
    //                 required: true,
    //                 unique: true,
    //             },
    //             colors: [
    //                 {
    //                     name: {
    //                         type: String,
    //                         required: true,
    //                     },
    //                     images: {
    //                         type: [String],
    //                         required: true,
    //                     },
    //                     amount: {
    //                         type: Number,
    //                         required: true,
    //                     },
    //                 },
    //             ],
    //         },
    //     ],
    //     price: {
    //         type: Number,
    //         required: true,
    //     },
    //     desription: {
    //         type: String,
    //     },
    //     reviews: [
    //         {
    //             user: {
    //                 type: Schema.Types.ObjectId,
    //                 ref: 'users',
    //             },
    //             rating: {
    //                 type: Number,
    //                 required: true,
    //                 min: 1,
    //                 max: 5,
    //             },
    //             text: {
    //                 type: String,
    //                 maxlength: 150,
    //             },
    //         },
    //     ],
});

const ProductModel = mongoose.model('product', ProductSchema);
module.exports = ProductModel;
