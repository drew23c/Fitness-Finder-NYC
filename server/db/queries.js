const yelp = require('../secret/yelp');
const db = require('./index');
const axios = require('axios');
const options = {
    headers:
    { 'content-type': 'application/json',
      authorization: 'Bearer ' + yelp.key },
}

getAPI = (url) =>{
    axios.get(url, options)
    .then(res=>{
        let businesses = res.data.businesses

        let arr = [];
        for(let j = 0; j < businesses.length; j ++){
            let yelp_id = businesses[j].id;
            let name = businesses[j].name;
            let gym_info = {
                yelp_id,
                name
            }
            arr.push(gym_info)
        }

        for(let k = 0; k < 4; k++){
            axios.get('https://api.yelp.com/v3/businesses/' + arr[k].yelp_id + '/reviews', options)
            .then(res=>{
                // console.log(res.data.reviews)
                let reviews = res.data.reviews;
                let yelp_id = arr[k].yelp_id;
                let name = arr[k].name;
                let review_id = reviews[k].id;
                let url = reviews[k].url;
                let text = reviews[k].text;
                let rating = reviews[k].rating;
                let time_created = reviews[k].time_created;
                let user_id = reviews[k].user.id;
                let profile_url = reviews[k].user.profile_url;
                let image_url = reviews[k].user.image_url;
                let user_name = reviews[k].user.name;

                db.any('INSERT INTO reviews (yelp_id, name, review_id, url, text, rating, time_created, user_id, profile_url, image_url, user_name) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)',
                [yelp_id, name, review_id, url, text, rating, time_created, user_id, profile_url, image_url, user_name])
                .then(()=>{
                })
                .catch(err=>{
                    console.log(err)
                })

            })
            .catch(err=>{
                console.log(err)
            })
        }

        for(let i in businesses){
            let yelp_id = businesses[i].id;
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

            db.any('INSERT INTO locations (yelp_id, name, alias, img_url, url, rating, latitude, longitude, address1, address2, address3, display_phone) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)',
            [yelp_id, name, alias, img_url, url, rating, latitude, longitude, address1, address2, address3, phone])
            .then(()=>{
            })
        }    
    })
}


getAllReviews = async (req, res, next) =>{
    let allReviews = await db.any('SELECT * FROM reviews')
    .then(data=>{
        res.status(200).json({
            status:'success',
            data:data,
            message:'All reviews are loaded'
        })
    })
    .catch(err=>{
        res.status(500).json({
            status:'failed',
            message:err
        })
    })
    return allReviews;
}

getReview = async (req, res, next) =>{
    let yelp_id = req.params.id;
    let review = await db.any('SELECT * FROM reviews WHERE yelp_id=${yelp_id}', {yelp_id:yelp_id})
    .then(data=>{
        res.status(200).json({
            status:'success',
            data:data,
            message:'review(s) for a gym'
        })
    })
    .catch(err=>{
        res.status(500).json({
            status:'failed',
            message:err
        })
    })
    return review;
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
    let yelp_id = req.params.id
    let singleLocation = await db.any('SELECT * FROM locations WHERE yelp_id =${yelp_id}',{yelp_id:yelp_id})
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
    getAllReviews,
    getReview,
    getDetails
}