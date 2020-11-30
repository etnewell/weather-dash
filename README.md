# weather-dash

# Goal

-I was tasked with making a weather dashboard to implement on future sites, this needed:
    -searchable current weather for any city
    -Display multiple different things retrieved from the API
    -a list of recent searches
    -being able to re-search the recent searches (not finished)
    -having it load the most recent search on page refresh (not finished)

# Accomplished

I did manage to get the API to get me the information that I needed, in order for me to be able to search by city, I had to first search the API for the corresponding coordinates, and then do a second search using the coordinates I saved from the second one.
I also was able to parse out the name of the place and append some divs and buttons to the page.
However, I was not able to get the funcitonality of getting the name out of the generated div. As I couldnt figure out how to reference something that was just being made.
I was also able to save to local storage but was unable to get it to load and do the query on page load/refresh.

# Challenges
I ran into some roadblocks with this in that I had to figure out how to get the API to send me the forecast and the UV and the weather in one go. Once I got that under wraps the rest of it wasn't to hard to get it to display and then to get the genrated divs for the 'search history'. I struggled with the problemm of getting the name of the city that I stored in the generated divs. First I tried just putting it into a button, and then I tried putting it into a paragraph div to then get the text value fromn it to re-query. I did minimal CSS as that's usually what I do last, but sadly I cannot work on this assignment any more right now.

The javascript where I was attempting to get the functionality working is commented out at the bottom

