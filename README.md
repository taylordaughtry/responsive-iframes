![Imgur](http://i.imgur.com/bSeeesz.gif)
# Responsive iFrames
**Fluid videos with zero framework dependency**

ResponsiveiFrames uses vanilla javascript to make your videos responsive.

## Usage

Just run `RI.init('.yourClassName');` to make all the `iframes` in the container responsive, or if you'd
like ResponsiveiFrames to make all iframes on the page responsive, just run `RI.init();`, and it does the rest.

## Concept

The concept behind a fluid-width video is setting the top-padding to a percentage equal to the video's aspect ratio.
Doing this forces the element to maintain its proper width and height, and positioning it absolutely forces it to be
100% of its parent element.

ResponsiveiFrames automates this for any iframes you have on the page.

## Credits

Built and maintained by [Taylor Daughtry](https://github.com/taylordaughtry)

## License 

The MIT License (MIT)

Copyright (c) 2011-2014 Taylor Daughtry.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
