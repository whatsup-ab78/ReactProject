const Formmodel = require('../model/formmodel');

// Save (Create)
const savedata = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ message: 'Name is required' });
        }

        const form = new Formmodel({ name });
        await form.save();

        res.status(201).json({ message: 'Form saved successfully', data: form });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// View all
const viewdata = async (req, res) => {
    try {
        const forms = await Formmodel.find();
        res.status(200).json(forms);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// View single
const viewdatabyid = async (req, res) => {
    try {
        const form = await Formmodel.findById(req.params.id);
        if (!form) return res.status(404).json({ message: 'Form not found' });
        res.status(200).json(form);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Edit (Update)
const editdata = async (req, res) => {
    try {
        const { name } = req.body;
        const updated = await Formmodel.findByIdAndUpdate(
            req.params.id,
            { name },
            { new: true }
        );
        if (!updated) return res.status(404).json({ message: 'Form not found' });

        res.status(200).json({ message: 'Form updated successfully', data: updated });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete
const deletedata = async (req, res) => {
    try {
        const deleted = await Formmodel.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Form not found' });

        res.status(200).json({ message: 'Form deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { savedata, viewdata, viewdatabyid, editdata, deletedata };
