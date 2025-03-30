# Chapter One Website Deployment Guide

This guide will help you deploy your Chapter One website using your new domain: **chapteronldn.events**

## Option 1: GitHub Pages (Easiest)

### Step 1: Create a GitHub Repository
1. Sign up for a GitHub account if you don't already have one
2. Create a new repository named `chapterone-website`
3. Upload all the files from the `deployment` folder to this repository

### Step 2: Enable GitHub Pages
1. Go to your repository settings
2. Scroll down to "GitHub Pages" section
3. Select the branch you want to deploy (usually `main`)
4. Click "Save"

### Step 3: Configure Your Domain
1. In your GitHub repository, ensure the CNAME file exists with `chapteronldn.events`
2. Go to your domain registrar (where you purchased the domain)
3. Find the DNS settings and add these records:
   - Type: A, Name: @, Value: 185.199.108.153
   - Type: A, Name: @, Value: 185.199.109.153
   - Type: A, Name: @, Value: 185.199.110.153
   - Type: A, Name: @, Value: 185.199.111.153
   - Type: CNAME, Name: www, Value: chapteronldn.events
4. Go back to GitHub repository settings
5. Under GitHub Pages, add your custom domain `chapteronldn.events`
6. Check "Enforce HTTPS" for secure connections

## Option 2: Netlify Deployment

### Step 1: Create a Netlify Account
1. Sign up at [netlify.com](https://www.netlify.com/)
2. Click "New site from Git" or drag and drop your deployment folder

### Step 2: Configure Your Domain
1. Go to "Domain settings" in your Netlify site dashboard
2. Click "Add custom domain"
3. Enter your domain: `chapteronldn.events`
4. Verify ownership by adding the DNS records Netlify provides
5. At your domain registrar, point your nameservers to Netlify's nameservers (they will provide these)

## Option 3: Vercel Deployment

### Step 1: Create a Vercel Account
1. Sign up at [vercel.com](https://vercel.com/)
2. Create a new project and import your files

### Step 2: Configure Your Domain
1. Go to "Project Settings" > "Domains"
2. Add your domain: `chapteronldn.events`
3. Follow the instructions to verify and configure DNS settings

## Maintaining Your Website

- To update your website content, update the files in your repository or hosting service
- Make sure to keep all your media files (images, videos) in their correct folders
- Regularly check that your domain is renewed and properly connected

## Support Resources

If you need help, these resources are useful:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Netlify Documentation](https://docs.netlify.com/)
- [Vercel Documentation](https://vercel.com/docs)

---

For your Chapter One website, we recommend using GitHub Pages or Netlify for the simplest deployment experience with your custom domain. 