---
layout: page
title: "Q189750: Error Message: Bad Resource Data Checksum Error"
permalink: kb/189/Q189750/
---

## Q189750: Error Message: Bad Resource Data Checksum Error

	Article: Q189750
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbhw win95 kbHardware
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows 95, you may receive the following error message:
	
	  Bad resource data checksum error
	
	CAUSE
	=====
	
	This error message can occur if you have a Creative Labs AWE64 or AWE64 Gold
	sound card installed and you are using an older version of the Creative Labs
	Configuration Manager program.
	
	RESOLUTION
	==========
	
	To resolve this issue, obtain a newer version of Configuration Manager from the
	Creative Labs Web site. To obtain the latest version, download the Ctcmbbs.exe
	file from the following Creative Labs Web site:
	
	  http://www.creativelabs.com/
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	MORE INFORMATION
	================
	
	The newer version of Configuration Manager does not try to read Plug and Play
	sound cards with a bad checksum and can test interrupt request lines (IRQs)
	other than the standard 2, 5, 7, and 10.
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: cheksum
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbhw win95 kbHardware 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
