
# 🪄 UIX.js — Minimal UI Magic Library

A lightweight utility library to add beautiful, interactive UI effects to your web projects:
🖱️ Custom cursor · 🧲 Magnetic button hover · 📸 Image preview on hover · ✨ Animated text

---

## 📦 Quick Start (CDN)

```html
<script src="https://sanzojs.vercel.app/script.js"></script>
```


All features are available via the global `sanzo` object:

```js
sanzo.mousefollow(...)
sanzo.magnetbutton(...)
sanzo.previewCursor(...)
sanzo.textAnimation(...)
```

---

## 🎯 Features

### 1. Custom Cursor Trail (`mousefollow`)

Create a smooth, animated custom cursor with multiple style presets.

**Usage:**
```js
sanzo.mousefollow({
  width: "30px",
  height: "30px",
  color: "#ff0040",
  style: 2
});
```

**Options:**
| Option     | Type     | Default     | Description                                  |
|------------|----------|-------------|----------------------------------------------|
| `width`    | string   | "20px"      | Width of the cursor                          |
| `height`   | string   | "20px"      | Height of the cursor                         |
| `color`    | string   | "#000"      | Color or gradient of the cursor              |
| `style`    | number   | 1           | Preset styles: 1, 2, or 3                    |

---

### 2. Magnetic Hover Buttons (`magnetbutton`)

Adds a magnetic hover effect to buttons based on mouse distance.

**Usage:**
```js
sanzo.magnetbutton(".magnet");
```

**HTML Example:**
```html
<button class="magnet">Hover me</button>
```

**Notes:**
- Works best with round or pill-shaped buttons.
- Can be used with multiple buttons by applying the same class.

---

### 3. Image Preview on Hover (`previewCursor`)

Show preview images when hovering over elements like cards.

**Usage:**
```js
sanzo.previewCursor({
  target: ".card",
  images: [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg"
  ]
});
```

**HTML Example:**
```html
<div class="card">Card 1</div>
<div class="card">Card 2</div>
<div class="card">Card 3</div>
```

**Options:**
| Option    | Type     | Default | Description                           |
|-----------|----------|---------|---------------------------------------|
| `target`  | string   | ".card" | Target selector for preview elements  |
| `images`  | string[] | []      | Array of image URLs to match targets  |
| `offset`  | number   | 20      | Offset between cursor and image box   |
| `width`   | number   | 200     | Width of the preview box              |
| `height`  | number   | 200     | Height of the preview box             |

---

### 4. Animated Text Effects (`textAnimation`)

Add interactive text effects to any element by ID. Supports multiple animation styles, trigger modes, and custom durations.

**Usage:**
```js
sanzo.textAnimation(
  "myText",      // Element ID (string)
  80,            // Speed per step in ms (number, optional, default: 100)
  "fade",        // Style: "scramble" | "typewriter" | "fade" (string, optional, default: "scramble")
  1200,          // Duration in ms (number, optional, default: 1000)
  "hover"        // Trigger: "hover" | "auto" (string, optional, default: "hover")
);
```

**HTML Example:**
```html
<span id="myText">Hover for magic!</span>
```

**Options:**
| Param      | Type     | Default    | Description                                                      |
|------------|----------|------------|------------------------------------------------------------------|
| `text`     | string   | —          | The element ID to animate                                        |
| `speed`    | number   | 100        | Speed per animation step (ms)                                    |
| `style`    | string   | "scramble" | Animation style: "scramble", "typewriter", or "fade"            |
| `duration` | number   | 1000       | Total animation duration (ms)                                    |
| `trigger`  | string   | "hover"    | When to trigger: "hover" (on mouseenter) or "auto" (on load)    |

**Notes:**
- By default, animation runs on hover. Set `trigger` to `auto` to animate once on page load.
- You can use any style: "scramble" (random letters), "typewriter" (typing effect), or "fade" (fade-in letters).
- Works with any text element (e.g., `<span>`, `<h1>`, `<button>`, etc.)

**Example:**
```js
sanzo.textAnimation("headline", 60, "typewriter", 1500, "hover");
sanzo.textAnimation("subtitle", 40, "fade", 1000, "auto");
```
```html
<h1 id="headline">Sanzo Magic Headline</h1>
<h2 id="subtitle">Animated on page load!</h2>
```

---

## 💡 Example Integration

```html
<script src="https://sanzojs.vercel.app/script.js"></script>
<script>
  sanzo.mousefollow({ color: "#fff", style: 1 });
  sanzo.magnetbutton(".magnet");
  sanzo.previewCursor({
    target: ".card",
    images: ["img1.jpg", "img2.jpg"]
  });
  sanzo.textAnimation("headline", 60, "typewriter", 1500, "hover");
</script>
```

---

## 🔧 Roadmap / TODO

- Toggle enable/disable mode
- Touch-device support
- Custom easing/delay control
- Package as ES module + NPM

---

## 🧠 Author

Crafted with care by [Sanzo](https://sanzo.tech)

Simple. Stylish. Functional.
