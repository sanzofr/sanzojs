# 🪄 Sanzo.js — Minimal UI Magic Library

A tiny utility library to add interaction and smooth flair to your web design:  
🖱️ Custom cursor · 🧲 Magnetic button hover · 📸 Image preview on hover

---

## 📦 CDN Usage

```html
<script src="https://sanzojs.vercel.app/script.js"></script>
```

Then use the methods via `sanzo.mousefollow()`, `sanzo.magnetbutton()`, and `sanzo.previewCursor()`.

---

## 🎯 Features

### 1. `mousefollow()` — Custom Cursor Trail

Create a smooth, animated custom cursor with different styles.

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
| `width`    | `string` | `"20px"`    | Width of the cursor                          |
| `height`   | `string` | `"20px"`    | Height of the cursor                         |
| `color`    | `string` | `"#000"`    | Color or gradient of the cursor              |
| `style`    | `number` | `1`         | Preset styles: `1`, `2`, or `3`              |

---

### 2. `magnetbutton(selector)` — Magnetic Hover Buttons

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
- Can be used with multiple buttons by applying same class.

---

### 3. `previewCursor()` — Image Preview on Hover

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
| `target`  | string   | `.card` | Target selector for preview elements |
| `images`  | string[] | `[]`    | Array of image URLs to match targets |
| `offset`  | number   | `20`    | Offset between cursor and image box  |
| `width`   | number   | `200`   | Width of the preview box             |
| `height`  | number   | `200`   | Height of the preview box            |

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
</script>
```

---

## 🔧 TODO (Ideas for Future Versions)

- Toggle enable/disable mode
- Touch-device support
- Custom easing/delay control
- Package as ES module + NPM

---

## 🧠 Built by [Sanzo](https://sanzo.tech)

Simple. Stylish. Functional.
