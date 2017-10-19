---
layout: page
title: "Q78988: Using a Sharp JX Printer with Windows 3.1"
permalink: /kb/078/Q78988/
---

## Q78988: Using a Sharp JX Printer with Windows 3.1

	Article: Q78988
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11,95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When printing TrueType fonts from Microsoft Windows version 3.1 to a Sharp JX
	printer, you may receive the following error message:
	
	  Data Loss Error
	
	There currently is a Windows 3.1 printer driver for the Sharp JX-9500PS printer
	ver.1.10 available from Sharp.
	
	WORKAROUND
	==========
	
	To work around this problem, configure the printer driver to print TrueType
	fonts as graphics:
	
	1. Run Control Panel and choose the Printers icon.
	
	2. Select the HP LaserJet II series printer driver being used.
	
	3. Choose the Setup button.
	
	4. Choose the Options button.
	
	5. Select the Print TrueType As Graphics check box.
	
	6. Choose the OK button twice to save the changes.
	
	MORE INFORMATION
	================
	
	Sharp Technical Support recommends using the HP LaserJet II as a primary
	emulation mode and the Apple LaserWriter as a secondary emulation as a
	workaround if the above driver is not available.
	
	Sharp JX printers are manufactured by a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	
	Additional query words: 3.0 3.0a post script ps jx 9500 postscript non-postscript 9500H win95
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbWin95search kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11,95
	
	=============================================================================
	
