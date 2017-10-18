---
layout: page
title: "Q76810: Marstek Mouse Driver 6.01 or Later with MS-DOS 5.0"
permalink: kb/076/Q76810/
---

## Q76810: Marstek Mouse Driver 6.01 or Later with MS-DOS 5.0

	Article: Q76810
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using a Marstek mouse, you must use Marstek driver version 6.01 or later to
	be compatible with Microsoft MS-DOS version 5.0 or later.
	
	MORE INFORMATION
	================
	
	If you load an old mouse driver in the CONFIG.SYS file, you may receive the
	following message:
	
	  Internal Configuration Registers Locked
	
	To solve this problem, do one of the following:
	
	- Remove the following line from the CONFIG.SYS file:
	
	     device=c:\mouse\mouse.sys
	
	  and add the following line to the AUTOEXEC.BAT file:
	
	     c:\mouse\mouse.com
	
	  Where C:\MOUSE is the directory where the mouse file is located. Note: The
	  mouse driver is shipped by original equipment manufacturers (OEMs), who may
	  have changed the driver name.
	
	- Call Marstek at (714) 833-7740 to obtain an updated driver.
	
	The product included here is manufactured by vendors independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 5.00 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
