const yelp = require('../secret/yelp');
const db = require('./index');
const axios = require('axios');
const options = {
    headers:
    { 'content-type': 'application/json',
      authorization: 'Bearer ' + yelp.key },
}

getAPI = async (url) =>{
    let data = await axios.get(url, options)
    .then(res=>{
        let businesses = res.data.businesses
        // console.log(businesses)
        

        for(let i in businesses){
            let id = businesses[i].id;
            let name = businesses[i].name;
            let alias = businesses[i].alias;
            let img_url = businesses[i].image_url;
            let url = businesses[i].url;
            let rating = businesses[i].rating;
            let latitude = businesses[i].coordinates.latitude;
            let longitude = businesses[i].coordinates.longitude;
            let address1 = businesses[i].location.display_address[0]
            let address2 = businesses[i].location.display_address[1]
            let address3 = businesses[i].location.display_address[2]
            let phone = businesses[i].display_phone;

            db.any('INSERT INTO locations (yelpId, name, alias, img_url, url, rating, latitude, longitude, address1, address2, address3, display_phone) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)',
            [id, name, alias, img_url, url, rating, latitude, longitude, address1, address2, address3, phone])
            .then(()=>{
            })
            .catch(err=>{
                res.status(500).json({
                    status:'failed',
                    message:err
                })
            })
        }
    })
    .catch(err=>{
        console.log(err)
    })
    return data;
}

allFitnessLocations = async (req, res, next) =>{
    let locations = await db.any('SELECT * FROM locations')
    .then(data=>{
        res.status(200).json({
            status:'success',
            data:data,
            message:'all fitness locations loaded'           
        })
    })
    .catch(err=>{
        res.status(500).json({
            status:'failed',
            message:err
        })
    })
    return locations
}

selectFitnessLocation = async (req, res, next) =>{
    let id = req.params.id

    console.log(req.query)
    let singleLocation = await db.any('SELECT * FROM locations WHERE id =${id}',{id:id})
    .then(data=>{
        res.status(200).json({
            status:'success',
            data:data,
            message:'fitness location found'
        })
    })
    .catch(err=>{
        res.status(500).json({
            status:'failed',
            message:err
        })
    })
    return singleLocation;
}

getReviews = async (req, res, next) =>{
    let id = req.params.id
    let reviews = await axios.get('https://api.yelp.com/v3/businesses/' + id + '/reviews', options)
    .then(data =>{
        res.status(200).json({
            status: 'success',
            data: data.data,
            message: 'reviews are loaded'
        })
    })
    .catch(err=>{
        res.status(500).json({
            status: 'failed',
            message: err
        })
    })
    return reviews;
}

getDetails = async (req, res, next) =>{
    let id = req.params.id;
    let details = await axios.get('https://api.yelp.com/v3/businesses/' + id, options)
    .then(data=>{
        res.status(200).json({
            status: 'success',
            data: data.data,
            message: 'fitness details are loaded'
        })
    })
    .catch(err=>{
        res.status(500).json({
            status: 'failed',
            message: err
        })
    })
    return details;
}

getAPI('https://api.yelp.com/v3/businesses/search?location=nyc&categories=fitness');
module.exports = {
    allFitnessLocations,
    selectFitnessLocation,
    getReviews,
    getDetails
}