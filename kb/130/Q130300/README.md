---
layout: page
title: "Q130300: Distributed .ICO or File Needs Multiple Images"
permalink: kb/130/Q130300/
---

## Q130300: Distributed .ICO or File Needs Multiple Images

	Article: Q130300
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you plan on distributing icon (.ICO) files with an application, be aware that
	you must allow for icons that are properly formatted for multiple display types
	and resolutions. This is easy to accomplish through the Imagedit resource editor
	shipped with Visual FoxPro.
	
	Every .ICO or .CUR file you distribute should contain images for both VGA color
	and monochrome, in a 32 x 32 pixels size.
	
	MORE INFORMATION
	================
	
	An .ICO or .CUR (cursor) file can contain multiple images. At run-time, the
	operating system determines which image is appropriate for the display type
	installed on the current system, and automatically selects the proper image from
	the file.
	
	To create a new icon or cursor file:
	
	1. Start Imagedit from the Visual FoxPro program group icon or by typing Run /n
	  Imagedit in the Command window. A target device dialog box appears.
	
	2. Select a target device, and click OK.
	
	3. Create an icon or cursor by using the drawing tools.
	
	4. Use the dotted box icon to draw a marquee around the image created in step 3.
	  Choose Copy from the Edit menu.
	
	5. From the Edit menu, choose New Image, and choose a target device from the
	  dialog box.
	
	6. From the Edit menu, choose Paste to copy the image from the first device into
	  the new target device.
	
	7. Save the file. The icon or cursor is now ready to be used in your Visual
	  FoxPro application.
	
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	
