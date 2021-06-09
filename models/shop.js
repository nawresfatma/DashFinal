class Shop {
    constructor( id,
        storeName,
      storeDescriptionShort,
      storeDescription,
      storeImage,
     storeLocation,
      openingHour,
      longitude,
       latitude) {
            this.id = id;
            this.storeName = storeName;
            this.storeDescriptionShort = storeDescriptionShort;
            this.storeDescription = storeDescription;
           
            this.storeLocation = storeLocation; 
            this.storeImage=storeImage;
            this.openingHour = openingHour;
                 
            this.longitude=longitude;    
            this.latitude=latitude;    
}

}


module.exports = Shop;