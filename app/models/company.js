    const mongoose = require('mongoose');

    const CompanySchema = new mongoose.Schema({
        nameCompany: String,
        objects: [{
            objectName: String,
            processes: [{
                processName: String,
                indicators: [{
                    indicatorName: String,
                    data: [
                        {
                            date: Date,
                            indicatorData: Number
                        }
                    ]
                }]
            }]
        }] 
    });
    module.exports = mongoose.model('Company', CompanySchema);
