---
layout: page
title: "Q95818: Brooklyn Bridge Installation Changes CONFIG.SYS File"
permalink: kb/095/Q95818/
---

## Q95818: Brooklyn Bridge Installation Changes CONFIG.SYS File

	Article: Q95818
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use an MS-DOS multiple configuration menu, your CONFIG.SYS file becomes
	scrambled when you install Brooklyn Bridge version 3.5.
	
	MORE INFORMATION
	================
	
	Installing Brooklyn Bride on a system using a multiple configuration menu
	results in the following:
	
	- All blank lines are removed.
	
	- A screen dump (both character and attributes) is inserted into the middle of
	  the CONFIG.SYS file.
	
	- DEVICE=BRIDGE1.DEV is added to an unexpected location, such as the end of and
	  existing CONFIG.SYS command.
	
	The Brooklyn Bridge installation program does not give the user a choice to
	update the CONFIG.SYS file - it is done automatically. However, Brooklyn Bridge
	does create a backup CONFIG.SYS file called CONFIG.OLD.
	
	NOTE: This problem may apply to other versions of Brooklyn Bridge; Microsoft has
	confirmed this with Brooklyn Bridge version 3.5 only.
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 6.22 6.00 6.20 multi-config 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
