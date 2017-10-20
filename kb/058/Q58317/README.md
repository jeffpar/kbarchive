---
layout: page
title: "Q58317: Windows 3.0 Modes and Memory Requirements"
permalink: /kb/058/Q58317/
---

## Q58317: Windows 3.0 Modes and Memory Requirements

{% raw %}

	Article: Q58317
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article contains information on the processor and memory requirements for
	the three different operating modes of Microsoft Windows version 3.0. These
	modes are real mode (similar to Windows/286 versions 2.x), 286 standard mode
	(also known as 286 protected mode), and 386 enhanced mode (also known as 386
	protected mode).
	
	MORE INFORMATION
	================
	
	WIN.COM automatically starts up Windows 3.0 in the proper mode for the
	configuration. However, Windows may be forced into one of the three modes
	through the following command-line switches:
	
	  Switch            Mode
	  ------            ----
	
	  WIN /R            Real mode
	  WIN /S or WIN /2  Standard mode
	  WIN /3            Enhanced mode
	
	Notes
	-----
	
	1. All numbers below are approximate and may vary widely depending on the
	  configuration -- for example, Windows device drivers chosen, DOS version,
	  display adapter, etc.
	
	2. 128K of extended memory is recovered from shadow RAM usage on COMPAQ 386
	  machines.
	
	3. Memory requirements take into account memory that can be recovered from
	  SMARTDrive (down to the minimum cache size specified).
	
	Real Mode Requirements
	----------------------
	
	1. The requirements for WIN.COM to automatically start up in real mode are as
	  follows:
	
	  a. 8088 processor or above
	
	  b. 384K of free conventional memory (393,216 bytes reported by CHKDSK)
	
	2. The actual real mode requirements are the same as above.
	
	Standard Mode Requirements
	--------------------------
	
	1. The requirements for WIN.COM to automatically start up in standard mode are
	  as follows:
	
	  a. 80286 processor or above
	
	  b. 192K of free extended memory
	
	  c. HIMEM.SYS loaded in the CONFIG.SYS file
	
	2. The actual standard mode requirements are as follows:
	
	  Standard mode conventional/extended memory requirements are mutually
	  dependent and are not fixed. A typical installation requires a minimum of
	  128K free at the DOS prompt to run standard mode, assuming sufficient
	  extended memory is free. Standard mode requires between 384K and 512K
	  combined conventional and extended memory to run (approximately).
	
	  For example, if only the minimum 192K of extended memory is free,
	  approximately 322K of conventional is required to run standard mode. However,
	  if available extended is increased to approximately 208K or greater, only
	  128K of conventional is required. This example is intended to illustrate that
	  the memory requirements are an interrelated, variable issue.
	
	Enhanced Mode Requirements
	--------------------------
	
	1. The requirements for WIN.COM to automatically start up in enhanced mode are
	  as follows:
	
	  a. 80386 processor or above
	
	  b. 1024K of free extended memory
	
	  c. HIMEM.SYS loaded in the CONFIG.SYS file
	
	2. The actual enhanced mode requirements are as follows:
	
	  See notes for standard mode, above, relating to the interrelationship of
	  conventional/extended requirements. A typical installation requires a minimum
	  of 182K free at the DOS prompt to run enhanced mode, assuming sufficient
	  extended memory is free. Enhanced mode requires between 580K and 624K
	  combined conventional and extended memory to run (approximately).
	
	  Note that enhanced mode is able to start up in low-memory situations only
	  because it provides virtual memory support; although enhanced mode may run in
	  such situations, it may be extremely slow due to the large amount of disk
	  swapping it must perform.
	
	Additional query words: 3.00 3.0 3.0a 3.00a winmem
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
