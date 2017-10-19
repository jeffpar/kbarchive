---
layout: page
title: "Q132671: Printing MS-DOS Applications Causes Windows 95 To Hang"
permalink: /kb/132/Q132671/
---

## Q132671: Printing MS-DOS Applications Causes Windows 95 To Hang

	Article: Q132671
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
	
	When you print a document, Windows 95 seems to stop responding (hangs) on some
	computers that have 4 MB of RAM (Random Access Memory) and that have multimedia
	components installed.
	
	
	CAUSE
	=====
	
	There may not be enough available memory to start the print spooler.
	
	RESOLUTION
	==========
	
	To work around this behavior, follow these steps:
	
	1. On the desktop, click Start, point to Settings, and then click Printers on
	  the menu that appears.
	
	2. Using the right mouse button, click the Printer icon, and then click
	  Properties on the menu that appears.
	
	3. In the Printer Properties dialog box, click the Details tab, and then click
	  Port Settings.
	
	4. Make sure the "Spool MS-DOS print jobs" box is not checked, and then click
	  OK.
	
	MORE INFORMATION
	================
	
	By using this workaround, some of your documents may print more slowly.
	
	Additional query words: app wpp95
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbprb
	
	=============================================================================
	
