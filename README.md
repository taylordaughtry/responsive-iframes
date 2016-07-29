# Responsive iFrames
**Fluid videos with zero framework dependency**

ResponsiveiFrames uses vanilla javascript to make your videos responsive.

## Usage

Just run `RI.respondify('.yourClassName');` to make all the `iframes` in the container responsive, or if you'd
like ResponsiveiFrames to make all iframes on the page responsive, just run `RI.init();`, and it does the rest.

## Concept

The concept behind a fluid-width video is setting the top-padding to a percentage equal to the video's aspect ratio.
Doing this forces the element to maintain its proper width and height, and positioning it absolutely forces it to be
100% of its parent element.

ResponsiveiFrames automates this for any iframes you have on the page.
