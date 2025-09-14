# Trees Admin Panel

A comprehensive admin panel for managing the Trees social platform.

## Features

- **User Management**: View, edit, and manage user accounts
- **Content Moderation**: Moderate posts, comments, and media
- **Analytics & Reports**: View platform statistics and user reports
- **Live Stream Controls**: Manage live streaming features
- **PSA Management**: Handle public service announcements
- **Matchmaking Oversight**: Monitor and manage matching algorithms
- **Website Management**: Manage static pages and content
- **Admin Settings**: Configure admin panel and user permissions

## Quick Start

### Windows
```bash
deploy-admin.bat
```

### Linux/Mac
```bash
./deploy-admin.sh
```

### Manual Setup
```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## Deployment

Deploy the `dist` folder to any static hosting service:
- Netlify
- Vercel
- AWS S3
- GitHub Pages

For detailed deployment instructions, see [ADMIN_PANEL_DEPLOYMENT.md](ADMIN_PANEL_DEPLOYMENT.md).
