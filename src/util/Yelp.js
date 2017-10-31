// Yelp Credentials
let clientId = '<Your API ID>';
let secret = '<Your API Secret>';
let accessToken = '';
const urlCORS = 'https://cors-anywhere.herokuapp.com/';

// Create Yelp object
const Yelp = {
  // Check for an accessToken, if it doesn't exist retrieve on
  getAccessToken() {
    if (accessToken) {
      return new Promise(resolve => {
        resolve(accessToken);
      });
    }
    return fetch(`${urlCORS}https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${clientId}&client_secret=${secret}`, {method: 'POST'})
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(jsonResponse => {
      accessToken = jsonResponse.access_token;
    });
  },

// Use the Yelp API to search for the given search terms
  search(term, location, sortBy) {
    return Yelp.getAccessToken().then(() => {
      return fetch(`${urlCORS}https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: { 'Authorization': `Bearer ${accessToken}` }
      }).then(response => {
        return response.json();
      }).then( jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => (
             {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories.title,
              rating: business.rating,
              reviewCount: business.review_count
            }
          ));
        }
      });
    });
  }
};
// Export the Yelp Object
export default Yelp;
