import React from 'react';

const api = {
    key: '614c967470937f3157b8fa325a70aab4',
    base: 'https://api.openweathermap.org/data/2.5/',
}

function App() {
    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return '${day} ${date} ${month} ${year}'
    }
    return ( <
        div className = "app" >
        <
        main >
        <
        div className = "search-box" >
        <
        input type = "text"
        className = "search-bar"
        placeholder = "Search..." / >
        <
        / div >  <
        div className = "locaction-box" >
        <
        div className = "location" > Johannesburg, SA < /div> <
        div className = "date" > (dateBuilder { new Date() }) < /div>  <
        div className = "weather-box" > < /div> <
        div className = "temp" > 15℃ < /div>  <
        div className = "weather" > Sunny < /div>   

        <
        /main>
    );
}

export default App;