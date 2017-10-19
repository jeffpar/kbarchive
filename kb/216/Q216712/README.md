---
layout: page
title: "Q216712: Error Message in SPOOLER(03) Printing from MS-DOS Window"
permalink: /kb/216/Q216712/
---

## Q216712: Error Message in SPOOLER(03) Printing from MS-DOS Window

	Article: Q216712
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbprint osr2 win95
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2.0, 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print to an LPT port from a command prompt, you may receive the
	following error message:
	
	  Performed an illegal operation
	  Fault Location: 0028:C0296A08
	  Faulty Component: SPOOLER(03) + 00000380
	
	CAUSE
	=====
	
	This behavior occurs only on Windows 95-based computers that have the Universal
	Serial Bus (USB) supplement added.
	
	RESOLUTION
	==========
	
	To work around this issue:
	
	1. Click Start, point to Settings, and then click Printers.
	
	2. Right-click the printer connected to the LPT port, and then click Properties.
	
	3. Click the Details tab.
	
	4. Click Port Settings.
	
	5. Click to clear the "Spool MS-DOS print jobs" check box.
	
	6. Click OK.
	
	NOTE: The printer must have at least as much buffer memory as the print job is
	long for the entire document to be printed. Otherwise, some of the text may not
	be printed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
