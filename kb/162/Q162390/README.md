---
layout: page
title: "Q162390: &quot;Fatal Exception 0D&quot; Error Message Installing Program"
permalink: kb/162/Q162390/
---

## Q162390: &quot;Fatal Exception 0D&quot; Error Message Installing Program

	Article: Q162390
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95 98
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbsetup win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing any program that uses the Windows Install wizard or the
	InstallShield installation program, you may receive the following error
	message:
	
	  A Fatal Exception Error 0D has occurred in VxD VMM(01) + 00001840
	
	CAUSE
	=====
	
	This error message can occur if you have Stacker version 4.1 installed on your
	computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, use either of the following methods:
	
	- Contact Stac Electronics for a possible fix.
	
	- Disable 32-bit disk access for all drives. To do this, follow these steps:
	
	  1. Click Start, point to Setting, and then click Control Panel.
	
	  2. Double-click System.
	
	  3. On the Performance tab, click File System.
	
	  4. On the Troubleshooting tab, click the "Disable all 32-bit protect- mode
	     drivers" check box to select it.
	
	  5. Click OK, and then click Close.
	
	  6. Click Yes when you are prompted to restart your computer.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or other- wise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbsetup win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95 98
	Issue type        : kbprb
	
	=============================================================================
	
