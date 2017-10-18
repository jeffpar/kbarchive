---
layout: page
title: "Q83512: Windows 3.1 Does Not Update Third-Party Communications Driver"
permalink: kb/083/Q83512/
---

## Q83512: Windows 3.1 Does Not Update Third-Party Communications Driver

	Article: Q83512
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you upgrade to Microsoft Windows operating system version 3.1 from an
	existing version of Windows 3.0 that is using a third-party communications
	driver, Windows 3.1 Setup does not update the COMM.DRV= line in the [boot]
	section of the SYSTEM.INI file.
	
	MORE INFORMATION
	================
	
	If Windows 3.0 is using a third-party communications driver to replace
	Microsoft's COMM.DRV and it has a different filename, Windows 3.1 will not
	update the COMM.DRV= line in the [boot] section of SYSTEM.INI and will not copy
	the Windows 3.1 COMM.DRV file into the \WINDOWS\SYSTEM directory. This behavior
	occurs so that Windows 3.1 can be compatible with Windows 3.0 communications
	programs that ship with their own COMM drivers.
	
	To use a third-party driver, it is necessary to add the following line to the
	[386enh] section of SYSTEM.INI:
	
	  COMMDRV30=TRUE
	
	If the Windows 3.0 application still does not function in Windows 3.1, manually
	install the Windows 3.1 COMM.DRV file as follows:
	
	1. Expand COMM.DR_ in the \WINDOWS\SYSTEM directory. (COMM.DR_ is found on Disk
	  2 in the 5.25-inch format and Disk 1 in the 3.5-inch format.)
	
	2. Rename COMM.DR_ to COMM.DRV.
	
	3. Edit the [boot] section of SYSTEM.INI by changing the COMM.DRV= line to the
	  following:
	
	  COMM.DRV=COMM.DRV
	
	Additional query words: 3.00 3.10 fax modem
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
