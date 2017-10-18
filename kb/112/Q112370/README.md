---
layout: page
title: "Q112370: Err Msg: The Windows for Workgroups Network Has Not Started"
permalink: kb/112/Q112370/
---

## Q112370: Err Msg: The Windows for Workgroups Network Has Not Started

	Article: Q112370
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	SYMPTOMS
	========
	
	When you start Windows for Workgroups, you may receive the following error
	message:
	
	  The Windows for Workgroups network was not started. Check your
	  configuration, or run setup again to set up Windows for Workgroups
	  properly.
	
	  The Windows for Workgroups network driver was unable to load.
	
	CAUSE
	=====
	
	This error message occurs if IFSHLP.SYS is not properly loaded in the
	CONFIG.SYS file. Windows for Workgroups 3.11 Setup adds the following line
	to the CONFIG.SYS file
	
	  Device=<path>\IFSHLP.SYS
	
	where <path> is the Windows directory. If this line is removed or an older
	copy of the CONFIG.SYS file is restored to the machine, and the machine is
	configured for the Microsoft Windows Network, this error is displayed.
	
	WORKAROUND
	==========
	
	To correct this problem, you must rerun Setup from the original disks or
	manually edit the CONFIG.SYS file. Running Network Setup to configure the
	network does not correct this problem, nor does running maintenance mode
	Setup.
	
	Additional query words: 3.11 "has not started"
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
