const { response } = require('express');
const Restaurents = require('../Models/restaurents');

//1  
exports.getRestaurents = (req, res) => {
    Restaurents.find().then(
        response => {
            res.status(200).json({ message: "Restaurants Fetched Succesfully", restaurents: response })
        }
    ).catch(
        err => {
            res.status(500).json({ message: "Error", error: err })
        }
    )


};

//2

exports.getRestaurentByCity = (req, res) => {
    const restaurendCity = req.params.cityName;
    //eg:(http://localhost:2029/locatio/Msp,%20Delhi)
    Restaurents.find({ "city": restaurendCity }).then(
        response => res.status(200).json({ message: "Locations Fetched Succesfully", restaurent: response })
    ).catch(err => {
        res.status(500).json({ message: "Error", error: err })
    });


}
//3

exports.filterRestaurents = (req, res) => {
    let { mealtype, cuisine, location, lcost, hcost, page, sort } = req.body;

    page = page ? page : 1;
    sort = sort ? sort : 1;



    let filterPayload = {};
    const itemsPerPage = 3;

    let startIndex = itemsPerPage * page - itemsPerPage;
    let endIndex = itemsPerPage * page;

   /* 1*/ if (mealtype) {
        filterPayload = {
            mealtype_id: mealtype
        }
    }
    /*2 */ if (mealtype && cuisine) {
        filterPayload = {
            mealtype_id: mealtype,
            cuisine_id: { $in: cuisine }
        }
    }
    /* 3*/ if (mealtype && hcost && lcost) {
        filterPayload = {
            mealtype_id: mealtype,
            min_price: { $lte: hcost, $gte: lcost }

        }
    }
    /* 4*/ if (mealtype && cuisine && lcost && hcost) {
        filterPayload = {
            mealtype_id: mealtype,
            cuisine_id: { $in: cuisine },
            min_price: { $lte: hcost, $gte: lcost }

        }
    }
  /* 5*/ if (mealtype && location) {
        filterPayload = {
            mealtype_id: mealtype,
            location_id: location
        }
    }
    /* 6*/ if (mealtype && location && cuisine) {
        filterPayload = {
            mealtype_id: mealtype,
            location_id: location,
            cuisine_id: { $in: cuisine }
        }
    }
   /* 7*/  if (mealtype && location && lcost && hcost) {
        filterPayload = {
            mealtype_id: mealtype,
            location_id: location,
            min_price: { $lte: hcost, $gte: lcost }
        }
    }
   /*8 */ if (mealtype && location && cuisine && lcost && hcost) {
        filterPayload = {
            mealtype_id: mealtype,
            location_id: location,
            cuisine_id: { $in: cuisine },
            min_price: { $lte: hcost, $gte: lcost }
        }
    }


    Restaurents.find(filterPayload).sort({ min_price: sort })
        .then(response => {
            //pagination logic
            const filteredResponse = response.slice(startIndex, endIndex);
            res.status(200).json({ message: "Restaurents Fetched Succesfully", restaurents: filteredResponse })
        })
        .catch(
            err => {
                res.status(500).json({ error: err })
            }
        )

}
//4getRestaurentByLocation
exports.getRestaurentByLocation = (req, res) => {

    const { locationId } = req.params;
    Restaurents.find({ location_id: locationId })
        .then(response => {
            res.status(200).json({ message: "Restaurents Fetched Succesfully", restaurents: response })
        }).catch(
            err => {
                res.status(500).json({ error: err })
            }
        );
}
//getRestaurentDetailsById
exports.getRestaurentDetailsById = (req, res) => {
    const { resId } = req.params;
    Restaurents.findById(resId)
        .then(response => {
            res.status(200).json({ message: "Restaurents Fetched Succesfully", restaurent: response })
        }).catch(
            err => {
                res.status(500).json({ error: err })
            }
        );

}