---
layout: page
title: "Q132644: Error Printing from WordPerfect to PostScript Printer"
permalink: kb/132/Q132644/
---

## Q132644: Error Printing from WordPerfect to PostScript Printer

	Article: Q132644
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print from WordPerfect to a PostScript printer using the Microsoft
	PostScript printer driver, you may receive an error page with the following
	text:
	
	  ERROR: undefined
	  OFFENDING COMMAND: wb
	
	CAUSE
	=====
	
	This error occurs because printing in Portability mode causes the printer's
	memory to be restored on a per-page basis. WordPerfect sends PostScript commands
	to the printer and tries to access them across pages.
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	1. Click the Start button, point to Settings, then click Printers.
	
	2. Use the right mouse button to click the PostScript printer, then click
	  Properties on the menu that appears.
	
	3. On the PostScript tab, change the PostScript output format from Portability
	  to Optimize For Speed.
	
	4. Click OK.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: pscript
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
