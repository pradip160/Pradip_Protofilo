# Pradip Mainali IT Support Portfolio

This is a clean, responsive personal portfolio website for entry-level IT Support, Service Desk Analyst, Technical Support Assistant, Application Support, IT Technician, and Data Technician roles.

## Files

- `index.html` - website content and page sections
- `styles.css` - layout, colours, spacing, and mobile styling
- `script.js` - mobile navigation, accordion panels, and contact form mailto behaviour
- `assets/` - place your CV PDF and profile image here

## How to Edit

Open the files in a code editor such as VS Code.

- Edit your text, links, project details, and contact details in `index.html`.
- Edit colours, spacing, fonts, and responsive styles in `styles.css`.
- Edit small interactive behaviours in `script.js`.

The main accent colour is controlled in `styles.css`:

```css
--accent: #0f766e;
--accent-dark: #115e59;
```

## CV and Profile Image

Your CV must be placed here:

```text
assets/Pradip_Mainali_CV.pdf
```

Your profile image must be placed here:

```text
assets/profile-photo.jpg
```

Keep these exact file names if you want the website links to work without editing the HTML. The website also includes a browser-only upload preview for the profile photo, but for GitHub Pages you should upload the real image file to `assets/profile-photo.jpg`.

## How to Run Locally

Because this website uses only HTML, CSS, and JavaScript, you can open it directly in your browser:

1. Open the project folder.
2. Double-click `index.html`.

You can also use the VS Code Live Server extension if you prefer automatic browser refresh.

## How to Deploy With GitHub Pages

1. Create a GitHub repository.
2. Upload `index.html`, `styles.css`, `script.js`, `README.md`, and the `assets/` folder.
3. Go to the repository on GitHub.
4. Open **Settings**.
5. Open **Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Select the `main` branch and the root folder.
8. Save the settings.

GitHub will provide a live website link after the deployment finishes.

Before sharing the link with employers, check that these files exist in the repository:

```text
assets/Pradip_Mainali_CV.pdf
assets/profile-photo.jpg
```

## Notes

- The contact form does not need a backend. It opens the visitor's email app using `mailto`.
- The website does not claim professional IT support experience.
- The IT Support Knowledge Base is included to show first-line troubleshooting knowledge in a recruiter-friendly way.
