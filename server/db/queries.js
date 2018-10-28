const yelp = require('../secret/yelp');
const db = require('./index');
const axios = require('axios');

getAPI = (url) =>{

    const fitnessLocations = {
        headers:
        { 'content-type': 'application/json',
          authorization: 'Bearer ' + yelp.key },
    }
    
    axios.get(url, fitnessLocations)
    .then(res=>{
        let businesses = res.data.businesses
        // console.log(businesses)
        

        for(let i in businesses){
            let id = businesses[i].id;
            let img_url = businesses[i].image_url;
            let url = businesses[i].url;
            let rating = businesses[i].rating;
            let coord = businesses[i].coordinates;
            let location = businesses[i].location;
            let phone = businesses[i].display_phone;

            console.log(id)

            db.any('INSERT INTO locations (yelpId, img_url, url, rating, coord, location, display_phone) VALUES ($1, $2, $3, $4, $5, $6, $7)',
            [id, img_url, url, rating, coord, location, phone])
            .then(()=>{
            })
            .catch(err=>{
                console.log(err)
            })
        }
    })
    .catch(err=>{
        console.log(err)
    })
}

allFitnessLocations = (req, res, next) =>{
    db.any('SELECT * FROM locations')
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
}

selectFitnessLocation = (req, res, next) =>{
    let id = req.params.id
    db.any('SELECT * FROM locations WHERE yelpId =$1',[id])
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
}

getReviews = (req, res, next) =>{

    let id = req.params.id
    const fitnessReviews = {
        headers:
        { 'content-type': 'application/json',
          authorization: 'Bearer ' + yelp.key },
    }
    axios.get('https://api.yelp.com/v3/businesses/' + id + '/reviews',fitnessReviews)
    .then(data =>{
        res.status(200).json({
            status: 'success',
            data: data.data,
            message: 'reviews are loaded'
        })
    })
    .catch(err=>{
        console.log(err)
    })

}

getAPI('https://api.yelp.com/v3/businesses/search?location=nyc&categories=fitness');
module.exports = {
    allFitnessLocations,
    selectFitnessLocation,
    getReviews
}