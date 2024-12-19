# Backend

Requirements: 
- Software to simulate api calls (postman?)

## Get parking spaces
- Simulate API call from a client, providing client location and search radius
- Must return a list of all parking spaces and their status within the specified perimeter.

- URL: "/api/parking/get-spaces"
- Header-Params: authentication
- Body-Params: 
    { 
        "location": { 
            "longitude": longitudeValue, 
            "latitude": latitudeValue, 
        },
        "radius": radiusValue
    }
- Response: 
    {
        "parking-spaces": {
            parkingSpaceId: {
                "location": { 
                    "longitude": longitudeValue, 
                    "latitude": latitudeValue, 
                },
                "state": parkingSpaceState
            }, 
            ...
        }
    }

## Get parking space status
- Simulate API call from a client, providing the id of the parking space
- Must return the current status of the specified parking space

- URL: "/api/parking/get-state"
- Header-Params: authentication
- Body-Params: 
    { 
        "id": parkingSpaceId
    }
- Response: 
    {
        "state": parkingSpaceState
    }

## Receive sensor update
- Simulate API call from a sensor providing the new parking slot status
- Must save the new status in our db

- URL: "/api/parking/update-state"
- Header-Params: authentication
- Body-Params: 
    { 
        "sensorId": sensorId
        "id": parkingSpaceId
        "state": newState
    }
- Response: 
    {
        "success": success
    }