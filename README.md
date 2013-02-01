# hnHiringFilter

Simple bookmarklet to be used on monthly "Ask HN: Who is hiring?" threads on Hacker News. It asks you for a city (or cities) you are interested to get a job in, and then it removes all job listings that are not from that city. Nothing fancy, just a simple way to filter out all those Bay area jobs if you're not from the states :)

## How to use

```javascript
javascript:(function(e)%7Btry%7Bvar%20r%3Dnull%3Btry%7Br%3De.querySelectorAll(%22body%20%3E%20center%20%3E%20table%20%3E%20tbody%20%3E%20tr%22)%5B2%5D.querySelectorAll(%22td%20table%22)%5B1%5D.querySelectorAll(%22tbody%20%3E%20tr%22)%7Dcatch(t)%7Breturn%20alert(%22Ooops%2C%20something%20is%20wrong.%20Are%20you%20sure%20you%20are%20on%20a%20'Ask%20HN%3A%20Who%20is%20hiring%3F'%20page%3F%22)%2Cvoid%200%7Dvar%20o%3Dprompt(%22Enter%20the%20cities%20(separated%20by%20commas)%20you%20are%20interested%20in%3A%22%2ClocalStorage.getItem(%22hn_hiring_filter%22))%3Bif(o%3Do.trim()%2C%22%22%3D%3D%3Do)return%3BlocalStorage.setItem(%22hn_hiring_filter%22%2Co)%2Co%3Do.split(%22%2C%22)%3Bfor(var%20a%20in%20o)o%5Ba%5D%3Do%5Ba%5D.trim()%3Bfor(var%20a%20in%20r)%7Bvar%20i%3Dr%5Ba%5D%3Btry%7Bvar%20n%3Di.innerHTML%3Bif(!n)continue%3Bn%3Dn.toLowerCase()%3Bvar%20l%3D!1%3Bfor(var%20a%20in%20o)if(n.indexOf(o%5Ba%5D)%3E%3D0)%7Bl%3D!0%3Bbreak%7Dl%3D%3D%3D!1%26%26i.parentNode.removeChild(i)%7Dcatch(t)%7B%7D%7D%7Dcatch(t)%7Balert(%22Something%20went%20wrong%20%3A%2F%20please%20try%20again!%22)%7D%7D)(document)%3B
```

Create a new bookmark with the above as the URL.

Or, visit [this](http://janhancic.github.com/hnHiringFilter/) and drag the link there, into your bookmarks.

## Browser support
Works on latest version of: Chrome, Firefox, Safari & Opera.

## License
**MIT Licensing**

Copyright (C) 2013 Jan Hančič

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
