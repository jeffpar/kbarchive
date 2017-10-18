---
layout: page
title: "Q132640: Error Message: Rundll32 Caused a GPF in Apmext.dll"
permalink: kb/132/Q132640/
---

## Q132640: Error Message: Rundll32 Caused a GPF in Apmext.dll

	Article: Q132640
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
	
	When you click the Power icon in Windows 95 Control Panel on a NEC Versa
	computer, you may receive the following error message:
	
	  Rundll32 Caused a General Protection Fault in Apmext.dll
	
	CAUSE
	=====
	
	NEC includes a custom power management dynamic-link library (dll) file named
	Apmext.dll with Windows 3.x on some of its Versa laptops. This dll is hard-coded
	to the Microsoft-supplied Windows 3.x Power applet in Control Panel. The
	Apmext.dll file is not compatible with Windows 95.
	
	RESOLUTION
	==========
	
	To work around this behavior, remove the following line from the [Power.drv]
	section of the System.ini file:
	
	  OptionsDll=apmext.dll
	
	MORE INFORMATION
	================
	
	The Apmext.dll file tries to dynamically add a second battery meter status bar
	to the Power applet display in Control Panel. The Windows 95 Power applet is
	different from the Windows 3.x version, causing the Apmext.dll file to cause a
	general protection fault when it tries to modify the dialog.
	
	Versa computers are manufactured by NEC, a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
