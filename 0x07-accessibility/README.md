# 0x07. Accessibility

## Contents

- [0x07. Accessibility](#0x07-accessibility)
  - [Contents](#contents)
  - [Use, installation and preview](#use-installation-and-preview)
  - [Learning Objectives](#learning-objectives)
    - [ARIA’s main purpose](#arias-main-purpose)
    - [WCAG conformance levels (A, AA and AAA)](#wcag-conformance-levels-a-aa-and-aaa)
      - [A](#a)
      - [AA](#aa)
      - [AAA](#aaa)
    - [The importance of Web Accessibility](#the-importance-of-web-accessibility)
    - [Tools to use for Web Accessibility](#tools-to-use-for-web-accessibility)
      - [For tesing](#for-tesing)
  - [Captain's Log](#captains-log)
    - [Lang attribute](#lang-attribute)
    - [Aria labels](#aria-labels)

## Use, installation and preview

Clone this repo and access each HTML document with a browser. Is tested on Edge 84.0.522.61 (Official build) (64-bit)

Advancing on each HTML index, you can notice changes on the accesibility

## Learning Objectives

### ARIA’s main purpose

Essentially, ARIA are properties that can be put on the HTML elements, that provides info to the different accessibility and assistive technologies. As an example, lang property tells an screen reader technology on what language it has to read aloud, or the alt property that puts on the images alternative texts in case on the image can't load or if it's difficult to see (Partial or total blindness)

### WCAG conformance levels (A, AA and AAA)

The conformance levels are the accesibility content that is mandatory for every application. Each level have some own properties for different elements on the sites:

#### A

The A conformance level is mandatory on every application and makes easier the navigation on the site and translation of the content. Is the most basic

#### AA

This is required, too. Consists on guidance on elements, such as contrast, error identification, captions on live video and other some relatively complex-by-design additions. It implies a wide range of disabilities included, and regulators preffer at least this level

#### AAA

This is optional. The AAA level is wide for almost everyone, but can change the design of a page and is considerably hard to implement some specific standards

### The importance of Web Accessibility

Internet is the largest information entity in the whole world and is constantly taking more and more of our cotidianity. Making accessible each web app makes possible to be usable for almost everyone and share the technology anf the information for all

### Tools to use for Web Accessibility

#### For tesing

- Lighthouse (```axe-core```)
- Contrast checker inspect
- [headingsMap](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi?hl=en)
Extension (Representation of the headings)
- [Landmarks](http://matatk.agrip.org.uk/landmarks/) Extension (Structure for the landmarks)

## Captain's Log

### Lang attribute

Some days ago, I was trying to use the [Read aloud](https://support.microsoft.com/en-us/office/use-learning-tools-in-the-edge-browser-78a7a17d-52e1-47ee-b0ac-eff8539015e1) (Ctrl/Cmd + Shift + U) of Edge browser on a web page. I'm spanish language native and the page was in english. Was certainly awful when Dalia (The latin american voice) started to read without accent the page. I simply can't understand anything.

### Aria labels

Options as flavors. Aria labels counts as a great properties for forms. Good practices
