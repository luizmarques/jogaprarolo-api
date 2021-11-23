import mongoose from 'mongoose';
import connection from '../connection.js';

const { Schema } = mongoose;

const db = connection();

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: 3,
        },
        address: { 
            type: String,
            required: true,
            minleght: 10,
        },
        cpf: { 
            type: String,
            required: true,
            minleght: 14,
        },
        birthday: { 
            type: String,
            required: true,
            minleght: 10,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
            // select: false,
        },
        phone: {
            type: String,
            required: true,
            unique: true,
        },
        isPartner: {
            type: Boolean,
            required: true,
        },
        isAdministrator: {
            type: Boolean,
            required: true,
        },
        isGenericUser: {
            type: Boolean,
            required: true,
        },
        
    },
    {
        timestamps: true,
        toObject: { useProjection: true },
        toJSON: { useProjection: true },
    }
);

const UserModel = db.model('users', userSchema);

export default UserModel;
