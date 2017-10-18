---
layout: page
title: "Q78008: Troubleshooting Third Party Memory Managers"
permalink: kb/078/Q78008/
---

## Q78008: Troubleshooting Third Party Memory Managers

	Article: Q78008
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:2.x,3.x,4.x,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 2.11, 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When troubleshooting on a computer with a third-party memory manager, you must
	minimize the variables by temporarily removing the memory manager. Occasionally,
	it is also necessary to substitute other memory managers to determine the cause
	of the problem.
	
	MORE INFORMATION
	================
	
	To troubleshoot the memory manager problem, do the following:
	
	1. Remove everything from the AUTOEXEC.BAT and CONFIG.SYS files except the
	  following:
	
	  CONFIG.SYS
	  ----------
	
	  files=
	  buffers=
	  shell=
	
	  AUTOEXEC.BAT
	  ------------
	
	  path
	  prompt $p$g
	
	  third party memory managers
	  third party disk partitioners
	  statements needed to run application that is being tested
	
	2. Remove the third party memory manager. If some sort of memory manager is
	  necessary to produce the problem, replace it with a Microsoft memory manager.
	
	3. If using the Microsoft memory manager solves the problem, either
	
	   - Use Microsoft's memory manager.
	
	  -or-
	
	   - Call the third party memory manager manufacturer for assistance.
	
	If the above steps do not solve the problem, continue to troubleshoot with the
	Microsoft memory manager. Sometimes a combination of steps will solve the
	problem.
	
	
	Additional query words: tshoot 3.0 3.00 3.1 3.10 3.2 3.20 3.21 3.22 3.3 3.3a 3.30 3.30a 4.0 4.0a 4.00 4.00a 4.01 4.01a 5.0 5.00 5.0a 5.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS211
	Version           : MS-DOS:2.x,3.x,4.x,5.0
	
	=============================================================================
	
