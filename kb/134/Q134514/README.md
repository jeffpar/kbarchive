---
layout: page
title: "Q134514: Lotus Notes Does Not Print to a Network Printer with UNC Path"
permalink: /kb/134/Q134514/
---

## Q134514: Lotus Notes Does Not Print to a Network Printer with UNC Path

	Article: Q134514
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
	
	When you try to print a document from Lotus Notes to a network printer, the
	document is not printed.
	
	CAUSE
	=====
	
	The printer is connected using a Uniform Naming Conventions (UNC) path. Lotus
	Notes does not recognize the UNC path, and therefore cannot find the printer.
	
	RESOLUTION
	==========
	
	If you use a network printer, make sure the network path is associated with a
	printer port. (This is also referred to as "capturing" a printer port.)
	Otherwise, when you print to a network printer from Lotus Notes, you may
	encounter problems.
	
	To capture a printer port, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Printers on the
	  menu that appears.
	
	2. In the Printers dialog box, using the right mouse button, click the icon for
	  the printer you use, and then click Properties on the menu that appears.
	
	3. In the Properties box for the printer, click the Details tab, and then click
	  the Capture Printer Port button.
	
	4. In the Capture Printer Port dialog box, select the port the printer is
	  connected to, and then type the path to the printer.
	
	5. In the Lotus Notes Printer Setup dialog box, select the printer you captured.
	
	MORE INFORMATION
	================
	
	The third-party product discussed here is manufactured by a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
