---
layout: page
title: "Q126349: PRB: FastDisk BusMaster DMA Disk Devices Crashes When Paging"
permalink: kb/126/Q126349/
---

## Q126349: PRB: FastDisk BusMaster DMA Disk Devices Crashes When Paging

	Article: Q126349
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The FastDisk device driver crashes once paging starts to occur on BusMastering
	DMA disk controller.
	
	CAUSE
	=====
	
	The snooper hardware on the i486 and Pentium processors does not properly detect
	when a BusMaster device has written to pages in memory. Therefore, the dirty bit
	in these pages does not get set. The PAGESWAP device in Windows enhanced mode
	relies on the dirty bit for paging. Therefore, when a paging request is made,
	the pages do not get updated, so new code or data is not paged in. This causes
	any application that was paging in code or data to crash on invalid data in the
	regions that should have been paged in.
	
	RESOLUTION
	==========
	
	In the fastdisk driver's BDD_Hw_Int_Proc, which is called when the command
	completes, the fastdisk driver should touch all pages that were updated by the
	BusMaster DMA by doing a DWORD READ/WRITE BACK on the first DWORD in each page.
	This will cause the cache to set the dirty bit in each of the affected pages
	manually, and cause the PAGESWAP device to function correctly.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK310
	Version           : :3.1
	
	=============================================================================
	
