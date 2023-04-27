## Dream Journal
Project 4 built during my Software Engineering Immersive Course at General Assembly. 

Built using: MongoDB/Mongoose, Flask, React, Node. This is frontend repo for dream journal, containing all client-side code responsible for handling requests, processing data, and generating responses. The backend code for this project is available in [this repository](https://github.com/adelyntay/dream-tracker-backend).

Dream Journal enables users to record details about their dreams, including dream type and sleep quality. The app aims to help users identify any correlations between their sleep and dream experiences. Users can share their dreams with others and receive feedback/comment through the app's discussion page.

## Technologies & Tools Used
- Chart.js v4.2.1
- DaisyUI v2.51.6
- TailwindCSS v3.3.1
- Dotenv v16.0.3
- JWT-decode v3.1.2
- React v18.2.0
- React-datepicker v4.11.0
- React-hook-form v7.43.9
- React-paginate v8.2.0

## Screenshot
### The landing page

![landingpage](https://github.com/adelyntay/dream-tracker-frontend/blob/main/src/assets/Image/Landing%20Page.png?raw=true)

### When user create a dream log, they can choose to set the post as Public so that it will display on discussion page
![createpost](https://github.com/adelyntay/dream-tracker-frontend/blob/d364f05b32309321098e7e49e7918792e3cd8ff5/src/assets/Image/createpost.png)

### "Post" page where User can see all their dream log <br/> I use Pagination to have max 5 posts on the page 
![posts](https://github.com/adelyntay/dream-tracker-frontend/blob/d364f05b32309321098e7e49e7918792e3cd8ff5/src/assets/Image/userpost.png)

### Posts set to Public will be display here for other users to leave comment
![wall](https://github.com/adelyntay/dream-tracker-frontend/blob/d364f05b32309321098e7e49e7918792e3cd8ff5/src/assets/Image/Wall%20Page.png)

### View Sleep Quality and Dream Type stats by month
![stats](https://github.com/adelyntay/dream-tracker-frontend/blob/d364f05b32309321098e7e49e7918792e3cd8ff5/src/assets/Image/Pie%20Chart%20Stats.png)

## Model
1. User
   - username
   - email
   - password

2. Dream 
   - title
   - description
   - type
   - quality
   - is_public
   - comments
      - inputs
      - user.email
      
## Next Steps:
- [ ] Like button for Public post
- [ ] No. of comments displayed
- [ ] Include year filter for charts
- [ ] Drawing function to record a dream
- [ ] User can choose emoji to express how they feel

## Image Assets
All rights belong to the original artists and owners.

<a href="https://giphy.com/MelioPayments/">Giphy</a><br/>
<a href="https://giphy.com/simianreflux">Giphy</a><br/>
<a href="https://giphy.com/search/tony-babel">Giphy</a><br/>
