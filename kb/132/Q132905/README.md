---
layout: page
title: "Q132905: 16-Bit Network Programs May Not Reflect New Computer Name"
permalink: /kb/132/Q132905/
---

## Q132905: 16-Bit Network Programs May Not Reflect New Computer Name

	Article: Q132905
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you change the computer name used to identify your computer on the
	network, some 16-bit networking programs may continue to identify your computer
	using the old computer name.
	
	CAUSE
	=====
	
	When you change the computer name on the Network tool's Identification tab, the
	registry is updated to reflect the new name but the System.ini file is not. Most
	16-bit networking programs read the computer name from the System.ini file
	instead of from the registry.
	
	RESOLUTION
	==========
	
	To work around this problem, manually modify the computer name in the System.ini
	file. To do so, modify the "ComputerName=" line in the [Network] section of the
	file so that it contains the correct computer name.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
