# Image Carousel

A functional, responsive carousel component built with `React`, `lucide-react` for icons, and CSS animations for a smooth progress bar experience.

## 🚀 Features

- **Auto-Play:** Automatically switches images every 5 seconds.
- **Progress Bar:** Visual indicator showing time remaining until the next image.
- **Navigation Buttons:** Previous/Next buttons for manual control.
- **Keyboard Support:** Use Left/Right arrow keys to navigate.
- **Infinite Loop:** Wraps around to the first image after the last one.

## 🧠 How It Works

- **State Management:** Uses React's `useState` to track the currently displayed image index.
- **Auto-Play Logic:** Employs `useEffect` to set up a `setInterval` that triggers the next image function based on the defined `INTERVAL_TIME`. The timer is cleaned up using `clearInterval` on component unmount to prevent memory leaks.
- **Progress Bar:** A div element is animated using CSS keyframes. The animation duration is synchronized with the JavaScript `setInterval` time to create a visual countdown.
- **Navigation:** `useCallback` is used to define nextImage and prevImage functions, ensuring they are memoized and efficient. These functions handle the logic for looping back to the start or end of the image array.
- **Keyboard Interaction:** A `useEffect` hook adds an event listener for keydown events, allowing users to navigate using the left and right arrow keys.

## 🛠️ Usage

1. Clone the Repository:

```bash
git clone https://github.com/avicious/image-carousel
cd image-carousel
```

2. Install Dependencies:

```bash
npm install
# or
yarn install
```

3. Add Your Images:

Place your image files into the `./src/assets/image` folder.

4. Update Imports:

Open `App.jsx` and update the imports to match your image filenames:

```javascript
import { Image_1, Image_2, Image_3, Image_4 } from "./assets/image";
```

5. Run the Project:

```bash
npm start
# or
yarn start
```
