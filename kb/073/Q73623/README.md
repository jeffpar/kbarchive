---
layout: page
title: "Q73623: LANtastic LANcache Requires HIMEM.SYS /int15=&lt;xxxx&gt; Switch"
permalink: kb/073/Q73623/
---

## Q73623: LANtastic LANcache Requires HIMEM.SYS /int15=&lt;xxxx&gt; Switch

	Article: Q73623
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under LANtastic versions 3.03 and earlier, the LANtastic LANcache program
	requires the HIMEM.SYS /int15=<xxxx> switch, where <xxxx> is the
	number of kilobytes of conventional extended memory to be reserved by
	HIMEM.SYS.
	
	Note that 64 must be added to the number of kilobytes of int15 extended memory
	desired for LANcache. For example, if you want to allocate 512K of extended
	memory to LANcache, enter the following line in the CONFIG.SYS file:
	
	  " device=c:\dos\himem.sys /int15=576 " (without the quotation marks)
	
	MORE INFORMATION
	================
	
	Artisoft states that LANtastic version 4.0 features a switch that allows the use
	of XMS memory.
	
	Additional query words: 3rdparty 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
