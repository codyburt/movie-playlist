# Movie Playlist

## 1.What were the most difficult tasks?

The hardest part was deciding how I wanted to architecture this app and I wanted the user flow to go.

I decided to set up a Router with 3 different pages: the home page, the search page and the confirmation screen.

## 2. Did you learn anything new while completing this assignment?

I learned that you can easily parse the current URL for parameters by using the useLocation hook like this:

    new URLSearchParams(useLocation().search)

This made it easy to have a sharable search page and to also make the api call to OMDB to load the results.

## 3. What did you not have time to add? What work took up the majority of your time?

I didn't have time to add tests. I also would like to spend more time cleaning up the styling.

I can't point to any one thing that took most of my time, I feel like it was evenly spread between different components.

## 4. How could the application be improved?

- Better design!

- Better error handling. We should show a specific screen when the OMDB API is down.

- I also could add something on the search page that lets you keep track of your playlist as you add movies to it.
