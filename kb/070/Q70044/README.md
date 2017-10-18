---
layout: page
title: "Q70044: Loading a File in Paintbrush Doesn't Update Image Attributes"
permalink: kb/070/Q70044/
---

## Q70044: Loading a File in Paintbrush Doesn't Update Image Attributes

	Article: Q70044
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Loading a previously saved picture in Paintbrush does not update the height and
	width specifications of the Image Attributes dialog box.
	
	MORE INFORMATION
	================
	
	There are two ways to tell the height and width of a loaded picture:
	
	1. From the File Open dialog box, choose the file in question from the File Name
	  list box and select the Info button.
	
	2. Select the Cursor Position option from the View menu. Compare the cursor's
	  position in the painting area against the image's dimensions in "pels."
	
	To convert the height and width of the image to "pels":
	
	1. From the Options menu, choose Image Attributes.
	
	2. Select "pels".
	
	3. Use these numbers for height and width to compare with the cursor position
	  coordinates.
	
	For standard VGA, the default setting of inches for width and height are 6.67
	inches and 5.00 inches, respectively. Selecting "pels" will convert them into
	width and height parameters of 640 and 480, respectively. Use these maximum
	dimensions to compare with the Cursor Position coordinates.
	
	With the cursor position enabled, you can verify the image's dimensions in pixels
	by dragging the cursor to the right edge and then the bottom edge of the
	picture. You may have to use the scroll bars to access the entire picture.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3.10 3.11 paint brush
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
