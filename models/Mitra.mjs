import mongoose from 'mongoose'

const Mitra = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    address: {
        type: Object,
    },
    phone: {
        type: String,
    },
    websiteUrl: {
        type: String,
    },
})

export default mongoose.model('Mitra', Mitra);