---
layout: page
title: "Q82326: EMM386.EXE Causes Problems for Ventura 4.0 in Standard Mode"
permalink: /kb/082/Q82326/
---

## Q82326: EMM386.EXE Causes Problems for Ventura 4.0 in Standard Mode

	Article: Q82326
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An upper memory block (UMB) provider, such as EMM386.EXE, can cause problems for
	Ventura Publisher 4.0 for MS-DOS when running under Microsoft Windows version
	3.1 in standard mode. Ventura appears to start properly, but you receive the
	following error message:
	
	  "Insufficient memory to run this application"
	
	Under Windows 3.0, you cannot open Windows in standard mode with EMM386 active.
	You can do this under Windows 3.1, but some MS-DOS-based applications are not
	compatible with this configuration.
	
	To resolve the problem, either remark the EMM386 line in the CONFIG.SYS file and
	restart the system, or run in 386 enhanced mode. To remark a line, type the
	following at the beginning of the line:
	
	     REM
	
	MORE INFORMATION
	================
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 3.10 3.11 \* NoWin4
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	
	=============================================================================
	
