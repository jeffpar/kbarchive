---
layout: page
title: "Q155435: Space Character in Keystroke Font Printed Incorrectly"
permalink: kb/155/Q155435/
---

## Q155435: Space Character in Keystroke Font Printed Incorrectly

	Article: Q155435
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to print to a PostScript printer using the Microsoft Windows 95
	PostScript driver version 4.00, the space character in the Keystroke TrueType
	font may not be printed correctly. This problem occurs with larger point sizes.
	
	
	RESOLUTION
	==========
	
	Set the PostScript driver to print TrueType fonts as Type 3 fonts instead of
	Type 1 fonts. To do so, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Printers.
	
	2. Use the right mouse button to click the printer, and then click Properties on
	  the menu that appears.
	
	3. Click the Fonts tab.
	
	4. Click Send Fonts As.
	
	5. In the Send Fonts As box, click Bitmaps.
	
	6. Click OK.
	
	7. Click Apply, and then click OK.
	
	MORE INFORMATION
	================
	
	The Keystroke TrueType font is included with CorelDraw.
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or other- wise, regarding
	this product's performance or reliability.
	
	Additional query words: PS TTF laser streak stroke key
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
