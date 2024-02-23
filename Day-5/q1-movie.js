class Movie
{
    constructor(title,studio,rating)
    {
        this.title = title;
        this.studio = studio;
        this.rating = rating || 'PG';
    }
    
}

let movies = [];

function getPG(moviess)
    {
        let newarr = [];
        for( let i=0;i<movies.length;i++)
        {
            if(movies[i].rating === 'PG')
            {
                newarr.push(movies[i]);
            }
        }
        console.log(newarr);
    }

movies.push(new Movie('lover','neelam'));
movies.push(new Movie('leo','Seven Screen Studios','R'));
movies.push(new Movie('vikram','Raaj kamal','PG'));
movies.push(new Movie('Casino Royale','Eon Productions','PG13'));

getPG(movies);


