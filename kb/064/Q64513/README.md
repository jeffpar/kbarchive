---
layout: page
title: "Q64513: Unrecoverable Application Error Printing to HP Series II"
permalink: /kb/064/Q64513/
---

## Q64513: Unrecoverable Application Error Printing to HP Series II

	Article: Q64513
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive the message "Unrecoverable Application Error" (UAE) when printing
	from such programs as Microsoft Word for Windows and Microsoft Excel for Windows
	in enhanced mode if you have selected landscape and the Hewlett-Packard (HP)
	ProCollection cartridge on an HP LaserJet Series II.
	
	This also occurs if you have an HP LaserJet (or compatible) other than the Series
	II that was set up as an HP LaserJet Series II during the installation of
	Windows or from the Control Panel.
	
	CAUSE
	=====
	
	This problem is caused by a problem in the HP LaserJet driver.
	
	WORKAROUND
	==========
	
	To work around this behavior, you can obtain and install the HPPCL.DRV file
	included in the Microsoft Windows 3.0 Supplemental Driver Library (SDL), or
	install a different driver, as follows:
	
	1. Run Windows in real mode.
	
	2. Using Control Panel, set the printer to portrait.
	
	3. Cancel the selection of the HP ProCollection cartridge.
	
	4. Select a printer other than the Series II (for example, select HP LaserJet
	  Plus).
	
	STATUS
	======
	
	Microsoft has corrected this problem in the HP LaserJet driver HPPCL.DRV
	included with the Microsoft Windows 3.0 Supplemental Driver Library (SDL).
	
	
	Additional query words: 3.00 3.00a 3.0 3.0a pro collection winword powerpoint power point word win
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
