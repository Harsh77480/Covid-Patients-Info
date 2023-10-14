# Covid-Patients-Info
   Gives personal info about people suffered from covid.

## Installation :
* clone the project : https://github.com/Harsh77480/Covid-Patients-Info.git
* then run the following commands in the project directory :
#
    		cd Covid-Patients-Info 
    		cd backend 
    		npm install 
    		node index.js 
    		cd .. 
    		cd frontend 
    		npm install 
    		npm run dev 


* open link http://localhost:5173/
## Node Backend :
* using external api which gives data of 100 users 
* https://dummyjson.com/users 
* With our node api endpoint user can filter and sort operations based on gender,age and bmi (calculated in backend)
* And can send following params with api
##
    BMI =[underweight,overweight,normal] 
    sort = 0 (for ascending age)
    sort = 1 (for descending age)


## React Frontend: 

### UI has following features

* Search pagination is appied at frontend
search string matches the prefix of firstname of data
##
![search (online-video-cutter com)](https://github.com/Harsh77480/Covid-Patients-Info/assets/64406660/d164de41-2f06-4c9a-82b4-069e02216865)
##

* Paging rolls backs to 0 if page limit exceeds
##
![paging (online-video-cutter com)](https://github.com/Harsh77480/Covid-Patients-Info/assets/64406660/46109b9e-af69-4d5f-99f7-b8637570da01)
##

* Responsive modal opens for detailed info
##  
![details (online-video-cutter com)](https://github.com/Harsh77480/Covid-Patients-Info/assets/64406660/39da9a1e-2c3d-4c50-991d-63217377bb85)
##

* Web app is fully responsive
##
![responsive (online-video-cutter com) (1)](https://github.com/Harsh77480/Covid-Patients-Info/assets/64406660/5d833185-17a8-4687-91d4-21c065751bc7)
##

* You can apply multiple filters

![ezgif com-video-to-gif](https://github.com/Harsh77480/Covid-Patients-Info/assets/64406660/fea7f1d3-3163-4b73-ab2c-885c315fd3f6)






    
		
