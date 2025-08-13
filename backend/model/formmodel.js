const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

// ---------- Static Methods (Model-level functions) ---------- //

// Add new form
FormSchema.statics.addForm = async function (formData) {
    const form = new this(formData);
    return await form.save();
};

// View all forms
FormSchema.statics.viewForms = async function () {
    return await this.find();
};

// View one form by ID
FormSchema.statics.viewFormById = async function (id) {
    return await this.findById(id);
};

// Edit form by ID
FormSchema.statics.editForm = async function (id, updatedData) {
    return await this.findByIdAndUpdate(id, updatedData, { new: true });
};

// Delete form by ID
FormSchema.statics.deleteForm = async function (id) {
    return await this.findByIdAndDelete(id);
};

// ------------------------------------------------------------ //

const Formmodel = mongoose.model('Form', FormSchema);
module.exports = Formmodel;
