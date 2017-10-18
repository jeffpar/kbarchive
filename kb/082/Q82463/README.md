---
layout: page
title: "Q82463: Citizen Narrow Carriage Printers Have 8&quot; Printable Region"
permalink: kb/082/Q82463/
---

## Q82463: Citizen Narrow Carriage Printers Have 8&quot; Printable Region

	Article: Q82463
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The Citizen narrow carriage 9-pin printer (200GX) has an 8-inch printable
	region. This means that there is an unprintable region of 0.5 inch on the left
	side of the page.
	
	MORE INFORMATION
	================
	
	Editing applications react differently to this printer limitation. The following
	is a list of known behaviors:
	
	- Microsoft Windows Write does NOT allow you to have a left margin less than
	  0.5 inch; this eliminates any problems with this printer limitation.
	
	- Microsoft Word for Windows does allow you to set the left margin to less than
	  0.5 inch; however, the text is truncated on the left when it is printed.
	
	The Citizen narrow-carriage printer is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	
	Additional query words: 3.10 3.11 200 GX 3.1 clipped cut off
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
