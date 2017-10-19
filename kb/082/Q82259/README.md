---
layout: page
title: "Q82259: Windows 3.0 Paintbrush Requires Save As to Create Monochrome"
permalink: /kb/082/Q82259/
---

## Q82259: Windows 3.0 Paintbrush Requires Save As to Create Monochrome

	Article: Q82259
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Paintbrush program packaged with Windows 3.0 cannot create a monochrome
	bitmap (.BMP) file unless the file is saved as a monochrome .BMP file in Windows
	3.0 Paintbrush.
	
	NOTE: This problem does not occur in later versions of Windows Paintbrush.
	
	MORE INFORMATION
	================
	
	To create a black and white image in Windows Paintbrush, do the following:
	
	1. From the Options menu, choose Image Attributes.
	
	2. Select Black And White from the Colors box.
	
	3. Choose OK to save the settings.
	
	Nothing appears to have changed. For these new settings to take effect you must
	open a new file. Graphics files contain an internal header that describes the
	image that is displayed. When you choose New from the File menu, the color bar
	changes to a gray scale and the image appears in black and white.
	
	When the image is saved to a file, the screen attributes are used rather than the
	Image Attribute settings. This results in the image header containing color
	information. When this file is reopened, the color bar appears in color rather
	than black and white.
	
	To correctly save the image in the monochrome format, use the Save As command,
	and reset the image attributes manually.
	
	1. From the File menu, choose Save As.
	
	2. Choose the Options button.
	
	3. Select Monochrome Bitmap as the file format.
	
	When this image is subsequently opened it retains the monochrome .BMP format.
	
	Additional query words: 3.00 Mono B/W 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : :3.0,3.0a
	
	=============================================================================
	
