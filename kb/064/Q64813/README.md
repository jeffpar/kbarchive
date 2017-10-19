---
layout: page
title: "Q64813: Excel Displays Printers on None When They Are on a Port"
permalink: /kb/064/Q64813/
---

## Q64813: Excel Displays Printers on None When They Are on a Port

	Article: Q64813
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Excel for Windows reports a printer on the None port from Printer
	Setup when running under Microsoft Windows version 3.0. This only affects
	printers that are inactive under the Windows Control Panel. The printer is still
	on the port, but Excel by default shows it on None if it is inactive.
	
	Excel's Printer Setup dialog box reports information from the [Devices] section
	of WIN.INI. An inactive printer is shown on None in this section. The Windows
	Control Panel reports information from the [PrinterPorts] section of WIN.INI,
	where the printer is correctly shown on the port. However, it also contains a
	parameter that designates the printer as inactive.
	
	Microsoft Powerpoint for Windows exhibits this same behavior.
	
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
