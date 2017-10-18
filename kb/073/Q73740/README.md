---
layout: page
title: "Q73740: ATI Wondercard Comes with Mouse Port"
permalink: kb/073/Q73740/
---

## Q73740: ATI Wondercard Comes with Mouse Port

	Article: Q73740
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ATI VGA Wondercard has a Microsoft-compatible mouse port and comes with an
	ATI 2.0 version mouse driver.
	
	MORE INFORMATION
	================
	
	When MS-DOS 5.0 Shell detects the mouse driver, it displays a message warning
	you that you have an incompatible mouse driver. If you disable the mouse, you
	will not be able to use your mouse in Shell.
	
	ATI suggests adding the following line to the DOSSHELL.INI file:
	
	  MOUSEINFO=2.00,ignore
	
	This line will correct the problem, and you should encounter no further errors
	due to the mouse interacting with Shell.
	
	The product included here, ATI Wondercard, is manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	Additional query words: 5.00 5.00a 6.00 6.20 3rdparty Wonder Card dosshell
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0
	
	=============================================================================
	
