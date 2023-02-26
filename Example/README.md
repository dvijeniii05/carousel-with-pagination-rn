## Setup local Repo to fork and experiment/contribute to the lib:

Run the command below to clone the repo after creating a fork:

```
git clone https://github.com/dvijeniii05/carousel-with-pagination-rn.git
```

Navigate to the root level of the repo (will have LICENSE file) and run:
```
yarn
```
The next step is to build the package that will be used in two cases:
* Built package generated in `lib/` path will be used for publishing 
* Built package is used when you are running Example app locally

So, to build the pacakge run:
```
yarn prepack
```
Then navigate to `/Example` folder and build the app using:
```
yarn && yarn deps && yarn ios
```
OR for Android run:
```
yarn && yarn android
```
The Example app will pick up the Carousel component from the local build i.e. `lib/` path.

**❗❗IMPORTANT:** The example app doesn't support hot-reloading, so you will have to build the package eveytime when you apply a change. So, once you made a change to the CustomCarousel or PressablePagiantion component, then you will have to run `yarn prepack` from root level and the changes will be visible in your Example app.
