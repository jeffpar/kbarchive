---
layout: page
title: "Q107160: Using MemMaker to Replace Qemm Version 7.02 and DOS-Up"
permalink: kb/107/Q107160/
---

## Q107160: Using MemMaker to Replace Qemm Version 7.02 and DOS-Up

	Article: Q107160
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using the Quarterdeck Qemm version 7.02 DOS-Up feature (which puts
	some MS-DOS data structures into the upper memory blocks [UMBs]), MemMaker fails
	to remove the following two lines from the CONFIG.SYS file:
	
	  device=c:\qemm\dosdata.sys
	  device=c:\qemm\dos-up.sys
	
	Both files causes error messages when you start your system.
	
	RESOLUTION
	==========
	
	To work around this problem, edit your CONFIG.SYS file and remove the two lines
	shown above.
	
	Additional query words: 6.22 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.21,6.22
	
	=============================================================================
	
