# hnHiringFilter

Simple bookmarklet to be used on monthly "Ask HN: Who is hiring?" threads on Hacker News. It asks you for a city (or cities) you are interested to get a job in, and then it removes all job listings that are not from that city. Nothing fancy, just a simple way to filter out all those Bay area jobs if you're not from the states :)

## How to use

```javascript
javascript:(function(a){try{var%20b=null;try{b=a.querySelectorAll(%22body%20%3E%20center%20%3E%20table%20%3E%20tbody%20%3E%20tr%22)[2],b=%22/x%22===a.location.pathname%3Fb.querySelectorAll(%22td%20table%20tbody%20tr%22):b.querySelectorAll(%22td%20table%22)[1].querySelectorAll(%22tbody%20%3E%20tr%22)}catch(c){return%20alert(%22Ooops,%20something%20is%20wrong.%20Are%20you%20sure%20you%20are%20on%20a%20'Ask%20HN:Who%20is%20hiring%3F'%20page%3F%22),void%200}var%20d=prompt(%22Enter%20the%20cities%20(separated%20by%20commas)%20you%20are%20interested%20in:%22,localStorage.getItem(%22hn_hiring_filter%22));if(d=d.trim(),%22%22===d)return;d=d.toLowerCase(),localStorage.setItem(%22hn_hiring_filter%22,d),d=d.split(%22,%22);for(var%20e%20in%20d)d[e]=d[e].trim();for(var%20e%20in%20b){var%20f=b[e];try{var%20g=f.innerHTML;if(!g)continue;g=g.toLowerCase();var%20h=!1;for(var%20e%20in%20d)if(g.indexOf(d[e])%3E=0){h=!0;break}h===!1%26%26f.parentNode.removeChild(f)}catch(c){}}}catch(c){alert(%22Something%20went%20wrong%20:/%20please%20try%20again!%22)}})(document);
```

Create a new bookmark with the above as the URL.

Or, visit [this](http://janhancic.github.com/hnHiringFilter/) and drag the link there, into your bookmarks.

## Browser support
Works on latest version of: Chrome, Firefox, Safari & Opera.

## Bonus for Chrome users
This bookmarklet goes great with two Chrome extensions I made:

- [HN Unread Comments](https://chrome.google.com/extensions/detail/fpndmkcfggkffpablcooicmihgcgalil): this will highlight jobs you haven't seen yet
- [HN Favourite Users](https://chrome.google.com/webstore/detail/hleiemhnepoghplnnhkhpnjeiaifnobo): this will highlight jobs from your favourite users

## License
Licensed under MIT. See `LICENSE.md` file for details.
