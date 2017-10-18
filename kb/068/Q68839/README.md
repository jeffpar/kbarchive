---
layout: page
title: "Q68839: Paintbrush Prints Reduced Image Size"
permalink: kb/068/Q68839/
---

## Q68839: Paintbrush Prints Reduced Image Size

	Article: Q68839
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Printing from Windows Paintbrush may produce a miniature version of the actual
	image size, approximately 1.5 x 1.5 inch, if the Use Printer Resolution option
	is checked.
	
	MORE INFORMATION
	================
	
	If Use Printer Resolution is selected, Paintbrush translates one screen pixel to
	one printer pixel. The Image Attributes dialog box, under Options, is ignored.
	Standard VGA resolution is 640 x 480 pixels and most laser printers have a
	resolution of 300 dot per inch (dpi). Therefore, a VGA screen image translates
	to about 1.5 x 1.5 inch when printed.
	
	To disable this option, follow these steps:
	
	1. Start Paintbrush.
	
	2. Press ALT+F to choose the File menu.
	
	3. Press P for Print.
	
	4. Remove the check from the Use Printer Resolution check box.
	
	REFERENCES
	==========
	
	"Windows 3 Companion," Lorenz and O'Mara. Page 277. MS Press, 1990.
	
	Additional query words: 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
