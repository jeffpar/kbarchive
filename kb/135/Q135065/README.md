---
layout: page
title: "Q135065: Windows NT 3.51 Hangs on Shutdown"
permalink: /kb/135/Q135065/
---

## Q135065: Windows NT 3.51 Hangs on Shutdown

	Article: Q135065
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If Windows NT 3.51 is installed on a NEC Image P90 with an Adaptec 2940, Windows
	NT may hang when you choose to Shutdown and Restart Windows NT.
	
	CAUSE
	=====
	
	When you run Windows NT Setup, it detects and reserves the memory address range
	where the system ROM resides. Under Windows NT 3.51, the memory where the system
	ROM resides on the NEC Image P90 is not being reserved. When the device driver
	for the Adaptec 2940 initializes, it allocates a memory address range to be
	assigned to the controller. Because the address range where the system ROM is
	locate was not marked as allocated, the Adaptec driver may allocate it. When the
	system is shutdown, control is eventually passed to the system ROM, which
	resides in an address range the Adaptec driver mapped to the controller. Because
	of this, the system ROM code never gets control to reboot the system.
	
	RESOLUTION
	==========
	
	To correct this problem, install the latest U.S. Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 3.51 prodnt adaptec reboot
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
