---
layout: page
title: "Q115586: Writer 1: GPF When Printing in Color to some 9-Pin Printers"
permalink: /kb/115/Q115586/
---

## Q115586: Writer 1: GPF When Printing in Color to some 9-Pin Printers

	Article: Q115586
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0,1.1,1.1a
	Operating System(s): 
	Keyword(s): kberrmsg kbprint kbimu kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Creative Writer for Windows, versions 1.0, 1.1, 1.1a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you print a color card in portrait (tall) mode in Creative Writer, you may
	receive the following error messages:
	
	- This program has performed an illegal operation and will be shut down. If the
	  problem persists contact the program vendor.
	
	- Mscrwrtr.exe caused a General Protection Fault in module <unknown>.
	
	CAUSE
	=====
	
	This behavior can occur if you use one of the following printers to print the
	card, and the printer's Color option is enabled:
	
	- Panasonic KX-P2180
	
	- Epson EX-800
	
	- Epson JX-80
	
	- Star NX-1000
	
	- Nine-pin printers based on the Epson JX-80 driver
	
	RESOLUTION
	==========
	
	You cannot print portrait (tall) orientation cards in color from Creative Writer
	to these printers. An alternative is to simply print cards only in landscape
	(wide) orientation.
	
	To resolve this issue, only print landscape (wide) mode cards, or disable the
	Color option in the printer driver. To disable the Color option, use the
	appropriate method for your version of Windows.
	
	Windows 95/98
	-------------
	
	1. Click Start, point to Settings, and then click Printers.
	
	2. Right-click the printer you want to use, and then click Properties.
	
	3. On the Graphics tab, click Color.
	
	4. Under Color Control, click Print In Black And White Only.
	
	5. Click OK, and then click OK again.
	
	6. Close the Printers window.
	
	Windows 3.1x
	------------
	
	1. In the Main group in Program Manager, double-click Control Panel.
	
	2. Double-click Printers.
	
	3. In the Installed Printers box, click the printer you want to use, and then
	  click Setup.
	
	4. Click Options.
	
	5. Click the Color check box to clear it, and then click OK.
	
	6. Click OK, and then close the Printers window.
	
	Additional query words: 1.00 1.10a win GPFault GP Fault GPF mskids ex jx 800 80 kxp-2180 kxp2180 jx80 ex800 kx-p2180 nx1000 lc10 rainbow seikosha star mczee kids
	
	======================================================================
	Keywords          : kberrmsg kbprint kbimu kbPrinting 
	Technology        : kbHomeProdSearch kbCreativeWriter100 kbCreativeWriter110 kbCreativeWriter110a
	Version           : WINDOWS:1.0,1.1,1.1a
	Issue type        : kbprb
	
	=============================================================================
	
