# Deployment constraints

Preserve the selected cool-white and blue product homepage design.

The repository directories callhome/, compoundly/, juecha-support/, and littlebird-support/ and every file below them must remain unchanged. Never delete, move, replace, or edit them when publishing this homepage.

Frontend source lives in website/. GitHub Pages serves the compiled root index.html and assets/ on main. Run npm run build within website/ to update only these allowed locations. Do not add invented release claims or download links to the example products.

## Brand logo

The user selected displayed logo option 3, App Atelier, on 2026-10-08. This latest selection supersedes earlier selections 1 and 2, and the rejected LG mark. Use two overlapping blue app tiles with a white folded-ribbon sprout, paired with the all-navy lowercase luchuangao wordmark. Selected source: /Users/gaoluchuan/.codex/generated_images/01a119b6-d92e-77c3-aba7-fe65d43923b8/exec-267f83d7-ccde-4f03-9d11-bd6c02cc23e3.png.

Complete lockup: public/assets/luchuangao-atelier-logo.png. Crop only its transparent vertical padding using object-fit: cover and object-position: center 43%; do not stretch or clip visible artwork. Favicon: public/assets/luchuangao-atelier-icon.png. Preserve the existing homepage design and the four protected support directories.

## Current products and presentation

On 2026-10-09, the user requested removal of all design examples. Do not restore the focus, notes or image demo products, their hero icons, demo dialogs, or demo filters. Show only real products with verified information. The homepage and catalog currently feature the compound calculator, Little Bird Music, and X-Tracker. Preserve the real screenshots, individual App Store URLs and support/privacy links. Keep the responsive real-product hero, cool-white and blue branding, and accessible product details when adding future products.

Preserve X-Tracker v1.14.2, its ZIP download, actual browser screenshots, source/feedback links, and manual installation guide. It is distributed on the website and is not listed on Chrome Web Store; do not label it as a store install or turn its screenshots into phone mockups.

## Bilingual content and categories

The user requested Chinese/English switching and real product classification on 2026-10-10. Preserve the language switch, saved language preference, translated navigation, product content, details and installation guide. The frontend uses src/i18n.js for UI translations, English product content and classification metadata. Keep translation fields aligned with each product's Chinese data and actual screenshots; downloads and protected support pages retain their original URLs.

Platform and purpose filters are allowed and required; the earlier prohibition concerns removed design-example/status filters, not these real-product categories. Current platform groups are iPhone/iPad, Mac and Chrome extensions. Compute counts from actual product metadata, preserve filtering when changing language, and add classification plus bilingual content for every future product. Do not invent unreleased products or statuses to populate categories.
