---
layout: page
title: "Q132395: Wacom Pen Tablet Does Not Function in Windows 95"
permalink: /kb/132/Q132395/
---

## Q132395: Wacom Pen Tablet Does Not Function in Windows 95

	Article: Q132395
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
	
	The Wacom pen tablet attached to your computer may not function correctly after
	you install Windows 95.
	
	RESOLUTION
	==========
	
	To work around this problem, re-install the software included with the Wacom pen
	tablet. For information about other possible resolutions, please contact Wacom.
	
	
	MORE INFORMATION
	================
	
	If the Wacom pen tablet is the only pointing device installed on the computer
	when Windows 95 is installed, the Wacom pen tablet mouse driver (Wacpen.drv) is
	not removed from the System.ini file. However, the Wacom pen tablet VxD
	(Wacom.386) is renamed to Wacom386.10, and all references to the original driver
	name are removed from the System.ini file. The Wacom.drv file is also renamed to
	Wacomdrv.10.
	
	The Pen Extensions for Microsoft Windows (Pen Windows) software version 1.0 is
	essentially disabled by the installation of Windows 95. You should not attempt
	to resolve this problem by configuring the Wacom pen tablet to be Pen
	Windows-compatible. The only resolution at this time is to re-install the
	software included with the Wacom pen tablet.
	
	The third-party products discussed in this article are manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: virtual
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
