---
layout: page
title: "Q27585: INFO: Specifying Windows &quot;Bounding Box&quot; Coordinates"
permalink: kb/027/Q27585/
---

## Q27585: INFO: Specifying Windows &quot;Bounding Box&quot; Coordinates

	Article: Q27585
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,95; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbOSWinNT350 kbOSWinNT351 kbOSWinNT400 kbOSWin95 kbSDKWin16
	Last Modified: 11-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Win32 Application Programming Interface (API), used with:
	   - Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	   - Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	GDI functions, such as Rectangle, Ellipse, RoundRect, Chord, and Pie, have
	parameters that specify the coordinates of a "bounding box" into which the
	figure is drawn. Windows draws the figure up to, but not including, the right
	and bottom coordinates.
	
	MORE INFORMATION
	================
	
	Suppose the following call is made:
	
	     Rectangle(hDC, 1, 1, 5, 3)
	
	Assuming that the device context is using the MM_TEXT mapping mode (in which case
	logical units map directly to physical pixels), the resulting rectangle will be
	4 pixels wide and 2 pixels tall. The following diagram shows which pixels are
	affected:
	
	           ---0-----1-----2-----3-----4-----5-----6-
	           |     |     |     |     |     |     |
	           0     |     |     |     |     |     |
	           |-----|-----|-----|-----|-----|-----|----
	           |     |     |     |     |     |     |
	           1     |  X  |  X  |  X  |  X  |     |
	           |-----|-----|-----|-----|-----|-----|----
	           |     |     |     |     |     |     |
	           2     |  X  |  X  |  X  |  X  |     |
	           |-----|-----|-----|-----|-----|-----|----
	           |     |     |     |     |     |     |
	           3     |     |     |     |     |     |
	           |-----|-----|-----|-----|-----|-----|----
	           |     |     |     |     |     |     |
	           4     |     |     |     |     |     |
	
	It may be helpful to think of the display as a grid, with each pixel contained in
	a grid cell. The X1, Y1, X2, and Y2 parameters to the Rectangle function specify
	an imaginary "bounding box" drawn on the grid. The rectangle is drawn within the
	bounding box.
	
	The height, width, and area of the resulting rectangle have the following useful
	properties:
	
	  Height = X2 - X1
	  Width  = Y2 - Y1
	  Area   = Height * Width
	
	Additional query words: 3.00 3.10 3.50 4.00 win16sdk
	
	======================================================================
	Keywords          : kbOSWinNT350 kbOSWinNT351 kbOSWinNT400 kbOSWin95 kbSDKWin16 
	Technology        : kbAudDeveloper kbSDKSearch kbWin32sSearch kbWin32API kbWinSDKSearch
	Version           : WINDOWS:3.1,95; winnt:3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
