---
layout: page
title: "Q76182: Above DISC Compatibility with DOS=HIGH or HIMEM.SYS"
permalink: kb/076/Q76182/
---

## Q76182: Above DISC Compatibility with DOS=HIGH or HIMEM.SYS

	Article: Q76182
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Above DISC uses a driver called ABOVE.EXE to emulate expanded memory in extended
	memory or, in some cases, on a hard disk. If ABOVE.EXE is used with HIMEM.SYS
	and with DOS=HIGH, or in some cases with just HIMEM.SYS, the computer may stop
	responding (hang) on startup, beep uncontrollably, or continually reboot.
	ABOVE.EXE may also cause problems with caching programs (for example,
	SMARTDRV.SYS) and memory managers (for example, QEMM).
	
	MORE INFORMATION
	================
	
	ABOVE.EXE uses the high memory area (HMA), which is located between 1024K and
	1088K in extended memory. HIMEM.SYS also uses the HMA. On some computers, there
	is a conflict between HIMEM.SYS and ABOVE.EXE, especially when MS-DOS is loaded
	high. This is because HIMEM.SYS loads MS-DOS into the HMA. Even when MS-DOS is
	not loaded high, HIMEM.SYS may not work with ABOVE.EXE.
	
	According to Above Software Technical Support, the following steps may allow you
	to work around this problem:
	
	1. Run the install program for Above DISC from inside the ABOVE subdirectory.
	
	2. Set hardware to normal IO 286/386.
	
	3. Under Change Feature, make sure EMS 4.0 is selected with a check mark.
	
	NOTE: This procedure does not work on all computers; some still cannot work with
	the DOS=HIGH setting.
	
	According to Above Software, version 4.1b of Above DISC is fully compatible with
	MS-DOS 5.0. However, version 4.1c is required for MS-DOS 6.0.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	For more information, contact Above Software.
	
	
	Additional query words: 6.22 5.00 5.0a 6.00 6.20 3rdparty disk lock up abovedisk abovedisc
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
