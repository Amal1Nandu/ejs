import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

    

app.get("/", (req, res) => {

    const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();
    let day = date.getDay();
    let currentDay = dayOfWeek[day];  // to get the current day (sunday, monday,...)

    let type1 = currentDay;
    let type2 = ` ,go to your office!`; //advice

    if(currentDay === 0 || currentDay === 6){
        type1 = currentDay,
        type2 = ` , enjoy your weekend`
    }

   res.render("index.ejs",
   {
    today: type1,
    advice: type2
   }
   );
});

app.listen (port, () => {
    console.log(`listneing on port ${port}`)
});

