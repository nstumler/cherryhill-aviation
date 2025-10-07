# Cherry Hill Aviation - Editable Website Setup

## Option 1: Netlify CMS (Recommended - Professional)

### Quick Setup (5 minutes):

1. **Push to GitHub:**
   ```bash
   # Create a new repository on GitHub.com called "cherryhill-aviation"
   git remote add origin https://github.com/YOUR_USERNAME/cherryhill-aviation.git
   git push -u origin main
   ```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com) and sign up/login
   - Click "New site from Git"
   - Connect your GitHub account
   - Select your "cherryhill-aviation" repository
   - Build settings: 
     - Build command: `npm run build`
     - Publish directory: `out` or `.next`
   - Click "Deploy site"

3. **Enable Netlify Identity & Git Gateway:**
   - In your Netlify dashboard, go to Site Settings > Identity
   - Click "Enable Identity"
   - Go to Identity > Settings and enable "Git Gateway"
   - Under Registration preferences, set to "Invite only"

4. **Access the CMS:**
   - Your CMS will be at: `https://your-site-name.netlify.app/admin`
   - Invite team members via Netlify Identity tab
   - They can edit content without touching code!

### What Your Team Can Edit:
- ✅ All text content (titles, descriptions, etc.)
- ✅ Images (upload new photos)
- ✅ Contact information
- ✅ Instructor profiles
- ✅ Fleet aircraft details
- ✅ Location information
- ✅ Training program details

---

## Option 2: Google Sites (Simplest - 15 minutes)

### Quick Recreation:
1. Go to [sites.google.com](https://sites.google.com)
2. Click "Create" and choose a template
3. Use the content from your current site:

**Home Page Content:**
- Title: "Learn to fly at Cherry Hill Aviation"
- Subtitle: "Soar to new heights with our premier flight training. Professional instruction, modern aircraft, and personalized learning."
- Upload your hero image: `/public/view.png`

**Training Programs:** (Copy from your current site)
- Private Pilot
- Instrument Rating  
- Commercial Pilot
- Flight Instructor
- Tailwheel Endorsement

**Contact Info:**
- Phone: 615-669-5117
- Email: fly@cherryhillaviation.com
- Hours: Mon - Sun: 8am - 5pm

**Locations:**
- Bedford Airport: 3213 Tunnelton Rd, Bedford, IN 47421
- Seymour Airport: 1025 A Ave, Seymour, IN 47274
- North Vernon Airport: 645 E County Rd 450 N, North Vernon, IN 47265

### Sharing Access:
- Click "Share" button
- Add team member emails
- Give them "Editor" permissions
- They can edit everything instantly!

---

## Option 3: Keep Current Vercel + Add Simple CMS

If you want to keep your current Vercel deployment, you can add a simple admin panel:

1. Add Forestry.io or Sanity.io
2. Connect to your GitHub repo
3. Team members edit content through their interface
4. Changes automatically deploy to Vercel

---

## Recommendation:

**For fastest setup:** Use Google Sites (15 minutes total)
**For professional look:** Use Netlify CMS (30 minutes setup, keeps your current design)

Both options allow multiple people to edit content without any coding knowledge!
