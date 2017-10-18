---
layout: page
title: "Q154735: TrueType Fonts Printed to File as Text with HP 4 or 4M Driver"
permalink: kb/154/Q154735/
---

## Q154735: TrueType Fonts Printed to File as Text with HP 4 or 4M Driver

	Article: Q154735
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
	
	When you print a document to a file, data may be sent as text instead of
	graphical format.
	
	CAUSE
	=====
	
	This problem is known to occur with Hewlett-Packard (HP) LaserJet 4 and 4M
	printer drivers when both of the following conditions exist:
	
	- The Print TrueType As Graphics option is enabled on the Fonts tab in the
	  printer's properties.
	
	- The Use Raster Graphics option is enabled on the Graphics tab in the
	  printer's properties.
	
	RESOLUTION
	==========
	
	To work around this problem, use vector graphics instead of raster graphics. To
	do so, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Printers.
	
	2. Use the right mouse button to click the printer you want to modify, and then
	  click Properties on the menu that appears.
	
	3. Click the Graphics tab.
	
	4. Click Use Vector Graphics, and then click OK.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Note that this problem occurs only when you redirect print output to a file. The
	problem does not occur when you print to the printer.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
