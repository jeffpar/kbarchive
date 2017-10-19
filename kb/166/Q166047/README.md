---
layout: page
title: "Q166047: Fatal Exception Error Running Add New Hardware Wizard"
permalink: /kb/166/Q166047/
---

## Q166047: Fatal Exception Error Running Add New Hardware Wizard

	Article: Q166047
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw win95 kbHardware
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Hewlett-Packard (HP) OfficeJet Series 300 printer driver
	and Device Manager software, any attempt to detect new hardware using the Add
	New Hardware Wizard may cause a fatal exception error 06, 0E, 0C, or 0D.
	
	CAUSE
	=====
	
	The HP OfficeJet Series 300 Device Manager contends with Windows 95 for control
	of Plug and Play.
	
	RESOLUTION
	==========
	
	Start the Close Program dialog box by pressing CTRL+ALT+DELETE. Click HPOJDMAN
	in the list of tasks, and then click End Task.
	
	
	STATUS
	======
	
	Contact Hewlett-Packard Technical Support for more information.
	
	MORE INFORMATION
	================
	
	The problem occurs only when the HP OfficeJet Series 300 Device Manager
	(Hpodjman.exe) is running. The HP installation process sets up a shortcut in the
	Startup folder that runs "Hpojdman.exe /AUTOPROMPT." This causes Hpojdman.exe to
	run in the background.
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or other- wise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          : kb3rdparty kbhw win95 kbHardware 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
