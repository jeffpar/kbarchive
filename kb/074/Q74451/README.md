---
layout: page
title: "Q74451: Plus Hardcard II Is Very Slow with EMM386"
permalink: kb/074/Q74451/
---

## Q74451: Plus Hardcard II Is Very Slow with EMM386

	Article: Q74451
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Plus Hardcard II may be extremely slow when used with EMM386. The following
	information, which applies to Microsoft MS-DOS version 5.0, could help correct
	this problem.
	
	MORE INFORMATION
	================
	
	With the use of EMM386.EXE:
	
	1. Exclude the Hardcard XL BIOS address. For example:
	
	        Device=c:\dos\EMM386.EXE X=C000-C800
	
	  (These specific numbers are only examples for the purpose of syntax. The exact
	  addresses to exclude will depend on your configuration. Please see your
	  Hardcard documentation.)
	
	2. If you are not using UMBs, use the frame= parameter to set the address of the
	  page frame such that the page frame will not conflict with the addresses
	  being used by the Hardcard. For example, if the Hardcard is using addresses
	  C000-C800, you might use:
	
	        Device=c:\dos\EMM386.EXE frame=D000
	
	  This sets the page frame for the D000-DFFF range of memory.
	
	Additional query words: 5.00 5.00a 6.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0
	
	=============================================================================
	
