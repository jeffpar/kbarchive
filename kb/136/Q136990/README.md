---
layout: page
title: "Q136990: ATDISK Driver Fails to Start After Upgrade"
permalink: /kb/136/Q136990/
---

## Q136990: ATDISK Driver Fails to Start After Upgrade

	Article: Q136990
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your computer uses an enhanced IDE controller and you upgraded your previous
	installation of Windows NT to Windows NT 3.51. The following message appears
	when you boot Windows NT:
	
	  At least one service or driver failed during system startup. Use Event Viewer
	  to examine the event log for details.
	
	Event Viewer shows that the message is caused by ATDISK.
	
	CAUSE
	=====
	
	Computers capable of connecting four Enhanced IDE (EIDE) devices actually
	contain two separate EIDE adapters. Windows NT 3.51 uses ATAPI.SYS to handle
	EIDE adapters, whereas ATDISK.SYS is used for only IDE and other WD1003
	compatible disk controllers. In Windows NT 3.5, ATDISK.SYS handles the first
	adapter's IDE drives. ATAPI.SYS handles ATAPI devices, such as CD- ROM drives
	and hard disks, on the second adapter. When you update to Windows NT 3.51, ATAPI
	takes over the IO addresses from the first IDE adapter. When ATDISK initializes
	it cannot allocate the IO addresses and it terminates.
	
	RESOLUTION
	==========
	
	To correct this problem,, run Control Panel, choose Devices, and manually
	disable the ATDISK driver.
	
	Additional query words: prodnt startup system log western digital wd
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
