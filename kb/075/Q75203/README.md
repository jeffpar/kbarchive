---
layout: page
title: "Q75203: PC DOS: Unloading TSRs from Batch Files on NetWare LANs"
permalink: kb/075/Q75203/
---

## Q75203: PC DOS: Unloading TSRs from Batch Files on NetWare LANs

	Article: Q75203
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1e,3.0,3.0b,3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1e, 3.0, 3.0b, 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If any of the Microsoft Mail for PC Networks terminate-and-stay resident (TSR)
	programs (Micro, Monitor, or Operator) are loaded on a NetWare local- area
	network (LAN), they may not unload when they are requested from a batch file.
	This problem occurs regardless of whether the TSR is loaded into memory from the
	command line or from a batch file; the common factor is that the TSR is
	requested to unload from a batch file.
	
	CAUSE
	=====
	
	This problem can be traced to NetWare's method of allocating environment space,
	and only occurs on NetWare LANs. This is NOT a problem with MS-Net
	Redirector-based networks.
	
	RESOLUTION
	==========
	
	There is no permanent solution at this time; however, you can eliminate the
	problem by allocating more environment space. To increase environment space
	usage, use the Set command with dummy variables such as these:
	
	  set a=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
	  set b=bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
	
	If the TSR is loaded when these variables have been issued, it will unload when
	requested from a batch file. The number of extra environment variables will
	depend on how simple your configuration is.
	
	Additional query words: 2.10e 3.00 3.00b 3.20 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300 kbMailPCN300b kbMailPCN210e
	Version           : WINDOWS:2.1e,3.0,3.0b,3.2,3.2a
	
	=============================================================================
	
