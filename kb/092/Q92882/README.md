---
layout: page
title: "Q92882: WFWG Real Mode Redirector Error Messages Caused by Low Memory"
permalink: /kb/092/Q92882/
---

## Q92882: WFWG Real Mode Redirector Error Messages Caused by Low Memory

	Article: Q92882
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	NET.EXE may display one of the following messages if your computer is running
	low on memory.
	
	If you have under 102 kilobytes (K) memory:
	
	  Cannot execute C:\SLALOM\NET.EXE
	
	If you have between 102K and 160K memory:
	
	  Error 8: There is not enough memory available
	
	If you have between 160K and 180K memory:
	
	  MS-DOS error SYS0008 occured trying to load "C:\DOS\NET.EXE"
	
	If you have between 180K and 212K memory:
	
	  MS-DOS error SYS0008 occured trying to load "C:\DOS\NET.EXE"
	  MS-DOS error SYS000 occurred trying to allocate a [size] MCB
	
	MORE INFORMATION
	================
	
	NET.EXE provides various error messages in these different low memory conditions
	because it loads the other network components. If you have more than 160K free
	memory, NET.EXE loads successfully but provides an error message if it runs out
	of memory when trying to load other components, such as NetBEUI and
	redirectors.
	
	NOTE: The values for conventional memory vary because NET.EXE can load programs
	into high memory or upper memory block (UMB) space if it is available.
	
	Additional query words: 3.10 3.1
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
