---
layout: page
title: "Q71989: IBMCACHE.SYS Will Not Load If HIMEM.SYS Is Loaded"
permalink: /kb/071/Q71989/
---

## Q71989: IBMCACHE.SYS Will Not Load If HIMEM.SYS Is Loaded

	Article: Q71989
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.0,4.01,4.01a,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 4.01a, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The disk caching program IBMCACHE.SYS version 1.00 will not load if HIMEM.SYS is
	loaded. When the cache device driver is loaded with DOS high, the following
	error message appears:
	
	  Allocating Cache Buffers...Not enough space to allocate Cache buffers
	
	This problem occurs because IBMCACHE.SYS tries to allocate extended memory via
	the interrupt 15 (or INT 15) interface. As specified by XMS 2.0, HIMEM.SYS
	allocates all extended memory to itself via INT 15 to provide XMS memory.
	
	There are three workarounds to this problem:
	
	1. Load IBMCACHE.SYS before HIMEM.SYS.
	
	2. Do not load HIMEM.SYS.
	
	3. In MS-DOS version 5.0, load HIMEM.SYS with the following switch:
	
	     DEVICE=HIMEM.SYS /INT15=xxxx
	
	  This switch allocates the specified amount of extended memory, in kilobytes,
	  for the interrupt 15h interface. To ensure that enough memory is available,
	  add 64 to the value you want to specify for xxxx. Valid values range from 64
	  through 65535. For more information on the /INT15 switch, refer to the
	  version 5.0 "Microsoft MS-DOS User's Guide and Reference."
	
	
	Additional query words: 4.00 4.01 4.01a 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS500 kbMSDOS401
	Version           : MS-DOS:4.0,4.01,4.01a,5.0
	
	=============================================================================
	
