---
layout: page
title: "Q105792: Machine Hangs Using HIMEM /TESTMEM"
permalink: kb/105/Q105792/
---

## Q105792: Machine Hangs Using HIMEM /TESTMEM

	Article: Q105792
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.21,6.22; WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The memory test performed by HIMEM.SYS version 3.10 may fail (possibly causing
	your system to stop responding [hang]) if your machine uses a hardware cache
	controller.
	
	CAUSE
	=====
	
	Some hardware cache controllers do not handle 16-megabyte and 32-megabyte memory
	boundaries well. As a result, the HIMEM.SYS memory test fails.
	
	RESOLUTION
	==========
	
	To work around this problem, disable the hardware cache controller or contact
	your hardware vendor for assistance.
	
	Additional query words: 6.22 6.20 memtest AMI BIOS Setup
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.21,6.22; WINDOWS:3.11
	
	=============================================================================
	
