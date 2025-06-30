# Menu PDFs Directory

This directory contains the PDF menu files for restaurants in our kitchen spaces.

## How to Add Menu PDFs

1. **File Naming Convention:**
   - Use lowercase letters and hyphens
   - Format: `business-name-menu.pdf`
   - Examples:
     - `spice-palace-menu.pdf`
     - `mediterranean-delights-menu.pdf`
     - `dragons-wok-menu.pdf`
     - `bella-italia-menu.pdf`
     - `tokyo-street-food-menu.pdf`
     - `fusion-flavours-menu.pdf`
     - `healthy-bites-menu.pdf`
     - `nanas-kitchen-menu.pdf`
     - `gourmet-burgers-menu.pdf`
     - `sweet-treats-menu.pdf`

2. **Current Expected Files (All 10 Kitchens):**
   - `spice-palace-menu.pdf` (Kitchen 01)
   - `mediterranean-delights-menu.pdf` (Kitchen 02)
   - `dragons-wok-menu.pdf` (Kitchen 03)
   - `bella-italia-menu.pdf` (Kitchen 04)
   - `tokyo-street-food-menu.pdf` (Kitchen 05)
   - `fusion-flavours-menu.pdf` (Kitchen 06)
   - `healthy-bites-menu.pdf` (Kitchen 07)
   - `nanas-kitchen-menu.pdf` (Kitchen 08)
   - `gourmet-burgers-menu.pdf` (Kitchen 09)
   - `sweet-treats-menu.pdf` (Kitchen 10)

3. **Adding New Menus:**
   - Upload PDF files to this directory
   - Update the `our-kitchens.html` file with the correct `data-pdf` attribute
   - Use the same naming convention

4. **File Size Recommendations:**
   - Keep PDF files under 5MB for optimal downloading
   - Compress images in PDFs if needed
   - Ensure PDFs are readable and high quality

## How It Works

**Simple Direct Download System:**
- When users click "Download Menu" buttons, the PDF downloads directly
- **Success Toast:** Green notification shows "✅ [Business Name] menu downloaded successfully!"
- **Error Toast:** Orange notification shows "⚠️ Menu not available yet. Please contact [Business Name] directly"
- **Loading State:** Button shows spinning icon and "Downloading..." text during process

**Features:**
- ✅ **Direct PDF download** (no modal viewer)
- ✅ **Toast notifications** for success/error feedback
- ✅ **Loading states** on buttons
- ✅ **Error handling** for missing PDFs
- ✅ **Proper file naming** for downloads
- ✅ **Mobile responsive** design

## Testing

Until real PDF files are added:
1. Click any "Download Menu" button
2. You'll see the orange warning toast: "Menu not available yet"
3. Button will show loading state briefly

Once PDFs are added:
1. Click "Download Menu" button
2. PDF will download automatically
3. Green success toast will appear
4. File will be named like: `spice_palace_indian_kitchen_menu.pdf`

## Adding Real Restaurants

To replace dummy data with real restaurant information:

1. **Add PDF file** to this directory with correct naming
2. **Update restaurant info** in `our-kitchens.html`:
   ```html
   <td class="py-4 px-4" style="font-weight: 600; color: #0F172B;">REAL BUSINESS NAME</td>
   <td class="py-4 px-4">
       <a href="#" class="btn btn-outline-primary btn-sm menu-download-btn" 
          data-pdf="menus/real-business-menu.pdf" 
          data-business="REAL BUSINESS NAME"
          style="border-radius: 20px; font-weight: 500;">
           <i class="fa fa-download me-1"></i>Download Menu
       </a>
   </td>
   ```
3. **Update phone number** and **ordering platform links**
4. **Test the download** functionality

## Technical Notes

- Uses **Toastr.js** for beautiful toast notifications
- **Fetch API** checks if PDF exists before attempting download
- **Graceful error handling** for missing files
- **No backend required** - pure client-side functionality
- **Automatic file naming** based on business name
- **Mobile-optimized** user experience
