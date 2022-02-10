import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./style";

function Map({ setCoordinates, setBounds, coordinates,places,setChildClicked }) {
  const classes = useStyles();
  const isMobile = useMediaQuery("min-width:600px");
  
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBGzY-nqQKl_eaws4ybRO86pZUGoga0zhQ" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          //console.log(e)-> This event has the properties like   bounds, centreBounds, marginBoundsetc
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child)=> setChildClicked(child)}
      >
      {
        places?.map((place,i)=>(
            <div
                 className={classes.markerContainer}
                 lat={Number(place.latitude)}
                 lng={Number(place.longitude)}
                 key={i}
            >
            {
              isMobile ? (
                <LocationOnOutlinedIcon color="primary" fontSize="large" />
                
              ) : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography className={classes.typography} variant="subtitle2" gutterBottom >
                    {place.name}
                  </Typography>
                  <img 
                    className={classes.pointer}
                    src={place.photo ? place.photo.images.large.url : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"}
                    alt={place.name}
                  />
                  <Rating size="small" value={Number(place.rating)}  readOnly />
                </Paper>
              )
            }

            </div>
        ))
      }

      </GoogleMapReact>
    </div>
  );
}

export default Map;

//AIzaSyBGzY-nqQKl_eaws4ybRO86pZUGoga0zhQ => this is my key
