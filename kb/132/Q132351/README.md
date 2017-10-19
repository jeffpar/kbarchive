---
layout: page
title: "Q132351: NE2000 Install Fails with Default Base I/O Address"
permalink: /kb/132/Q132351/
---

## Q132351: NE2000 Install Fails with Default Base I/O Address

	Article: Q132351
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you accept the default configuration when installing the NE2000 network
	interface card (NIC), the installation fails.
	
	CAUSE
	=====
	
	The NE2000 driver defaults to a base I/0 address of 280h, whereas the NIC itself
	defaults to base I/O address 300h.
	
	WORKAROUND
	==========
	
	When you install the NE2000 driver, change the base I/O address to 300h. If you
	want to use a base I/O address other than 300h, you must run the diagnostics
	utility that came with the NE2000 NIC to change its setting.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
