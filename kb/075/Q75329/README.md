---
layout: page
title: "Q75329: Paintbrush Prints Too Many Pages on Laser Printers"
permalink: kb/075/Q75329/
---

## Q75329: Paintbrush Prints Too Many Pages on Laser Printers

	Article: Q75329
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If Paintbrush is printing extra blank pages for a single-page image, then the
	width and height may be set too large. Check these settings by choosing Image
	Attributes from the Options menu. Most laser printers knock off a .25- inch
	border around the page. Thus, the printer only prints up to 8 x 10.5 inches on
	an 8.5 x 11-inch sheet of paper.
	
	MORE INFORMATION
	================
	
	If the image attributes are set too large under Paintbrush, the print job is
	broken down into separate sheets. The default settings for the drawing area
	within Paintbrush are 6.67 inches wide and 5.0 inches high. If the size is set
	to within 1 inch of the page size the printer sees, then the image is printed to
	more than one page.
	
	Normally, the maximum drawing area can be extended to a width of 7.49 inches and
	a height of 6.0 inches if printing a single image to an 8.5 x 11 inch sheet of
	paper. Adjusting the width or height up a mere .01 inch (to 7.5 inches wide or
	6.01 inches high) causes Paintbrush to print extra pages.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Set up the printer for 8.5 x 11-inch paper.
	
	2. Run Paintbrush.
	
	3. From the Options menu, choose Image Attributes.
	
	4. Set the width to 8.0.
	
	5. Set the height to 10.5
	
	6. Choose OK.
	
	7. From the File menu, choose New.
	
	8. Draw a line from one end of the screen to the other, scrolling in order to
	  cover the complete width of the page.
	
	9. Print the image.
	
	Additional query words: win31 3.00 3.00a paint brush
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
