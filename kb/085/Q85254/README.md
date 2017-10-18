---
layout: page
title: "Q85254: Only a Temporary Swap File Can Be Set Up on Banyan VINES"
permalink: kb/085/Q85254/
---

## Q85254: Only a Temporary Swap File Can Be Set Up on Banyan VINES

	Article: Q85254
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you try to set up a swap file on a Banyan Vines network drive from Microsoft
	Windows 3.1, you will only be able to set up a temporary swap file, and only on
	network drives where you have full access. Network drives do not support the
	INT13 calls needed for a permanent swap file.
	
	When you run the 386 Enhanced option from Control Panel, the Virtual Memory
	option will only show your local hard drive and the network drives to which you
	have full access.
	
	Additional query words: 3.10 3.1 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
