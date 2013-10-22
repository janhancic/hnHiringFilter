# hnHiringFilter

Simple bookmarklet to be used on monthly "Ask HN: Who is hiring?" threads on Hacker News. It asks you for a city (or cities) you are interested to get a job in, and then it removes all job listings that are not from that city. Nothing fancy, just a simple way to filter out all those Bay area jobs if you're not from the states :)

## How to use

```javascript
javascript:!function(a%2Cb)%7Bvar%20c%2Cd%2Ce%2Cf%2Cg%3Dnull%3Btry%7Bg%3Da.querySelectorAll(%22body%20%3E%20center%20%3E%20table%20%3E%20tbody%20%3E%20tr%22)%5B2%5D%2Cg%3D%22%2Fx%22%3D%3D%3Da.location.pathname%3Fg.querySelectorAll(%22td%20table%20tbody%20tr%22)%3Ag.querySelectorAll(%22td%20table%22)%5B1%5D.querySelectorAll(%22tbody%20%3E%20tr%22)%7Dcatch(h)%7Breturn%20b(%22Ooops%2C%20something%20is%20wrong.%20Are%20you%20sure%20you%20are%20on%20a%20'Ask%20HN%3A%20Who%20is%20hiring%3F'%20page%3F%22)%2Cvoid%200%7Dtry%7Bif(c%3Dprompt(%22Enter%20the%20cities%20(separated%20by%20commas)%20you%20are%20interested%20in%3A%22%2ClocalStorage.getItem(%22hn_hiring_filter%22))%2Cc%3Dc.trim()%2C%22%22%3D%3D%3Dc)return%3Bc%3Dc.toLowerCase()%2ClocalStorage.setItem(%22hn_hiring_filter%22%2Cc)%2Cc%3Dc.split(%22%2C%22).map(function(a)%7Breturn%20a.trim()%7D)%3Bfor(var%20i%20in%20g)%7Bd%3Dg%5Bi%5D%3Btry%7Bif(e%3Dd.innerHTML%2C!e)continue%3Be%3De.toLowerCase()%2Cf%3D!1%3Bfor(var%20j%20in%20c)if(e.indexOf(c%5Bj%5D)%3E%3D0)%7Bf%3D!0%3Bbreak%7Df%3D%3D%3D!1%26%26d.parentNode.removeChild(d)%7Dcatch(h)%7B%7D%7D%7Dcatch(h)%7Bb(%22Something%20went%20wrong%20%3A%2F%20please%20try%20again!%22)%7D%7D(document%2Calert)%3B
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
