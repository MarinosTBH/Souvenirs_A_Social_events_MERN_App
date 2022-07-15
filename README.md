This project is a social media app to add and save important events.
The app is a full-stack MERN app :
    -React + Redux, Node, Express, MongoDB

Caracteristiques : 
    ####
    The frontend is working with : 

        Axios : 
            Axios is a promised-based HTTP client for JavaScript. It has the ability to make HTTP requests from the browser and handle the transformation of request and response data.
        Moment : 
            MomentJS is a JavaScript library which helps is parsing, validating, manipulating and displaying date/time in JavaScript in a very easy way. 
        react-file-base64 : (Used to convert our images)
            filebase64 reads the contents of a file at the given path and returns them as a base64-encoded string. filebase64(path) filebase64(path) Copy. The result is a Base64 representation of the raw bytes in the given file.
        redux : (managment state)  
        redux-thunk :( asynchronous actions using redux)
        react-oauth/google (oauth google login & onetap )
        react-jwt : 
            to decode token given from google auoauth/googleth
        jwt-decode : to decode the back token and make new one

    ####
    The backend server is working with : 

        body-parser : 
            Body-parser is the Node. js body parsing middleware. It is responsible for parsing the incoming bodies in a middleware before you handle it.
        cors : 
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
        express : 
            Express is a node js web application framework that provides broad features for building web and mobile applications. 
        mongoose : 
            Mongoose is a JavaScript object-oriented programming library that creates a connection between MongoDB and the Express web application framework.
        nodemon :
            nodemon is a command-line interface (CLI) utility developed by @rem that wraps your Node app, watches the file system, and automatically restarts the process.
        jsonwebtokens : for token auth and expiry tokens




######
import Souvenirs from "../../Images/Souvernirs.png";
######
###### delete this later 

###### Things i added
    button to render form on small screens,
    admin : (ability to edit delete all)
    

###
Part 3 
user story : 
    - user = 
        - neeeds account (google/raw account) / logout 
        - token expires in 1 hour
            - create a souvenir 
            - edit its own souvenir
            - delete its own souvenirs
            - like other souvenirs 
    -admin = add delete edit like log in / log out 

things in common : 
    -log in / log out.
    -like other posts (and your onw post ofc)
    -give exceptional token expiry