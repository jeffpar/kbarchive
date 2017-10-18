---
layout: page
title: "Q129607: Printer Connected to Redirected Parallel Port Appears as Local"
permalink: kb/129/Q129607/
---

## Q129607: Printer Connected to Redirected Parallel Port Appears as Local

	Article: Q129607
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
	
	The icon in the Printers folder for a printer that is connected to a redirected
	parallel port may not indicate that the printer is a network printer. That is,
	although the printer is a network printer, it may appear as a local printer in
	the Printers folder.
	
	CAUSE
	=====
	
	The port that the printer is connected to was only recently redirected. The
	appropriate Windows subsystem has not yet been notified of the change.
	
	
	RESOLUTION
	==========
	
	Refresh the port status by following these steps:
	
	1. Double-click My Computer.
	
	2. Double-click the Printers folder.
	
	3. Use the right mouse button to click the printer, then click Properties on the
	  menu that appears.
	
	4. Click the Details tab, then click the OK button.
	
	NOTE: If you have multiple printers with this problem, following the above steps
	should correct the problem for all of them.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
