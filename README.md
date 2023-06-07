# Image Hover Overlay
Image hover overlay is a React component that allows you to easily add stylish and interactive hover effects to your images. With this library, you can create stunning image overlays with customizable overlay colors, transition effects, links and captions.

## Demo

[![FindingZUMO Image hover overlay](https://s11.gifyu.com/images/SuUxM.gif)](https://gifyu.com/image/SuUxM)

## Installation
```
yarn add @findingzumo/image-hover-overlay
```

### Usage with Next.js
import the style into your route component
```
import 'image-hover-overlay/dist/style.css'
```
### Style import (with webpack)
```
@import "~image-hover-overlay/dist/style.css";
```

## Props

| Prop                           | Description                                       |
|------------------------------- |-------------------------------------------------- |
| `title`                        | The main title of the image overlay.               |
| `hoverTitle`                   | The title displayed on hover over the image.       |
| `hoverDescription`             | The description displayed on hover over the image. |
| `image`                        | The path or URL of the image.                      |
| `imageAlt`                     | The alternative text for the image.                |
| `link`                         | Optional URL or link associated with the image.         |
| `titleTextClasses`             | Optional CSS classes for styling the main title.   |
| `overlayClasses`               | Optional CSS classes for styling the overlay. <br/> You have the option to customize the background color of the overlay effect here.  |
| `hoverTitleTextClasses`        | Optional CSS classes for styling the hover title.   |
| `hoverDescriptionTextClasses`  | Optional CSS classes for styling the hover description. |
| `hoverContainerClasses`        | Optional CSS classes for styling the hover container. |

>**On mobile view**, the hover effect will turn into a touch interaction.
>- Touching the image will trigger the overlay effect.
>- Touching the image again will redirect to the specified link.

<br/>
<a href='https://ko-fi.com/Q5Q2M17WJ' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi1.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a> 
