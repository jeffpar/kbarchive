---
layout: page
title: "Q131668: Error Message: Error Opening EAGLEMAC.BIN"
permalink: kb/131/Q131668/
---

## Q131668: Error Message: Error Opening EAGLEMAC.BIN

	Article: Q131668
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): msnets win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using a Thomas Conrad network adapter, you receive the following
	error message when you use the NET START command:
	
	  Error opening EAGLEMAC.BIN
	  Press any key to continue...
	
	When you press a key, your computer stops responding (hangs). This problem occurs
	only if you are loading real-mode (NDIS 2) drivers for the network adapter, and
	is known to occur with the following Thomas Conrad network adapter models:
	
	- TC4045
	
	- TC4045-C
	
	
	CAUSE
	=====
	
	This problem occurs because the EAGLEMAC.BIN file is not located in the root
	directory. Windows 95 requires that this file be located in the root directory
	in order for it to be loaded properly.
	
	
	RESOLUTION
	==========
	
	To work around this problem, move or copy the EAGLEMAC.BIN file from its current
	location to the root directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : msnets win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
