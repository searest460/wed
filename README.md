# 💍 Premium Wedding Invitation

A highly customizable, white-labeled wedding invitation web application built with React and Vite. Designed for elegance, performance, and ease of use.

---

## 🚀 Quick Setup (White-Labeling)

You can change all the wedding details (Names, Dates, Venue, etc.) without touching any code.

1. **Edit Configuration**:
   Open [wedding-config.js](wedding-config.js) in your text editor.
2. **Update Details**:
   Modify the fields (e.g., `brideName`, `groomName`, `weddingDate`, `venueName`).
3. **Save & Deploy**:
   Push the changes to your GitHub repository. The website will update instantly on Vercel.

---

## 🎨 Key Features

- **White-Labeled**: No "The Digital Yes" or "Lovable" branding.
- **Hero Video Background**: High-definition video background with smooth fade-in.
- **Dynamic Text Injection**: Automatically replaces all placeholder names and dates across the entire site using your config.
- **Premium Animations**: Elegant scroll-triggered reveals for a high-end feel.
- **Music & Sound**: Built-in background music support (in `public/assets`).
- **SEO Ready**: Automatically updates browser title and social sharing (WhatsApp/Facebook) metadata.

---

## 🛠 Project Structure

- `wedding-config.js`: **Primary file for customization.** Edit this to change the bride/groom names, date, venue, etc.
- `index.html`: Main entry point with dynamic detail injection and visual optimizations.
- `public/assets/`: Contains all images, videos, and music files.
- `src/`: React source code (for advanced development).
- `vercel.json`: Configuration for seamless Vercel deployment.

---

## 📦 Development

If you wish to build or modify the React application:

1. **Install Node.js**: Ensure you have Node.js installed.
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Run Local Server**:
   ```bash
   npm run dev
   ```
4. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 🔒 Branding Note
This project has been modified to remove all third-party branding. To maintain this, ensure that you do not revert the changes in `index.html` or the compiled JS assets in `public/assets/`.

---

*Made with love for your special day.*
