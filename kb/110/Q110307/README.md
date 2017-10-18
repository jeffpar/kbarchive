---
layout: page
title: "Q110307: Function of Page Protection on HP III Printer Driver"
permalink: kb/110/Q110307/
---

## Q110307: Function of Page Protection on HP III Printer Driver

	Article: Q110307
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Although the Hewlett-Packard (HP) LaserJet III printer driver has a Page
	Protection option in the Setup dialog box, it does not actually change the HP
	printer configuration. This article explains how to change the Page Protection
	setting and why the printer driver includes the option.
	
	MORE INFORMATION
	================
	
	Online help for Page Protection states that the "printer's hardware must be
	configured correctly." (To access online help, run Control Panel, choose
	Printers, select the Page Protection check box, and then press F1.) Since there
	are no software commands to set the Page Protection option on the HP LaserJet
	III series printers, you must change the Page Protection option using the
	control panel on the printer and then configure the printer driver.
	
	Changing the printer driver setting allows Windows to subtract the amount of RAM
	used for the Page Protection feature from the total amount of RAM available on
	the printer. If this subtraction is not made, Windows may try to download too
	much information to the printer, causing an out-of-memory error.
	
	Additional query words: 3.10 3.1 3.11 hewlett packard page protect laser jet
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
