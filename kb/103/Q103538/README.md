---
layout: page
title: "Q103538: MEM &amp; MSD Only See 16 MB of Memory on Dell Machines"
permalink: kb/103/Q103538/
---

## Q103538: MEM &amp; MSD Only See 16 MB of Memory on Dell Machines

	Article: Q103538
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The MS-DOS MEM command and the Microsoft Diagnostics utility (MSD) may not see
	more than 16 megabytes (MB) of memory on some Dell computers.
	
	CAUSE
	=====
	
	Due to a problem in the Dell system BIOS, HIMEM.SYS does not see memory above 16
	MB. Since MEM and MSD rely on the XMS memory manager for extended memory
	information, neither MEM nor MSD see memory above 16 MB.
	
	WORKAROUND
	==========
	
	To work around this problem, you can download a flash ROM BIOS upgrade from
	Dell. For more information, contact Dell Computer Corporation.
	
	Additional query words: 6.22 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
