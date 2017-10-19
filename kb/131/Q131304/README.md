---
layout: page
title: "Q131304: Intel EtherExpress PRO/100 Drivers for Windows NT 3.5"
permalink: /kb/131/Q131304/
---

## Q131304: Intel EtherExpress PRO/100 Drivers for Windows NT 3.5

	Article: Q131304
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Intel EtherExpress PRO/100 is a high speed (100mbps) ethernet network
	adapter. Although the Intel EtherExpress PRO is on the Hardware Compatibility
	List for Windows NT 3.5, the Intel EtherExpress PRO/100 is not.
	
	NOTE: The Intel EtherExpress PRO/100 EISA network adapter card is on the Windows
	NT 3.51 HCL. It requires a driver from the \DRVLIB directory on the Windows NT
	3.51 CD-ROM.
	
	MORE INFORMATION
	================
	
	A Windows NT 3.5 driver is available for the EtherExpress PRO/100 on Intel's BBS
	(503) 645-6275. Currently the Windows NT 3.5 driver is only available as part of
	a drivers disk, EP100.EXE, which a self extracting executable file which you
	must download. The expanded driver, which is included with drivers for many
	other platforms, currently has the following size and date after expanding the
	compressed file E100.SY_:
	
	  E100.SYS     39, 424 bytes       date  10/9/94.
	
	After executing EP100.EXE, you will see a number of directories on your
	destination disk. The compressed file E100.SY_ will reside in the \NT
	subdirectory. Read \INFO\MS\MSNT35.TXT for installation instructions.
	
	The product included here is manufactured by Intel, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: prodnt card nic fast 100mb/s enet
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
