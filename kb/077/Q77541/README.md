---
layout: page
title: "Q77541: NETLOGON.PRO in LAN Manager 2.0 Doesn't Load in Control Panel"
permalink: /kb/077/Q77541/
---

## Q77541: NETLOGON.PRO in LAN Manager 2.0 Doesn't Load in Control Panel

	Article: Q77541
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you run Windows 3.0 on a Microsoft LAN Manager 2.0 Enhanced (or 100 percent
	compatible) network, NETLOGON.PRO does not load correctly from within the
	Windows Control Panel when you use the LANMAN.DRV file that is shipped with
	Windows 3.0.
	
	MORE INFORMATION
	================
	
	If you log onto the network from within Windows Control Panel by selecting the
	Network icon and using the Windows 3.0 LANMAN.DRV file, the following may
	happen:
	
	1. The profile doesn't execute.
	
	2. The profile doesn't execute, flips to a full-screen window, and displays the
	  following error message:
	
	  Invalid Drive Specification
	
	These problems do not occur if you use the Net Logon command before starting
	Windows or if you use version 3.01 of the LANMAN.DRV, which is shipped with the
	MS-DOS LAN Manager version 2.0. The file is located on the 3.5-inch Workstation2
	disk or the 5.25-inch Workstation3 disk, under the subdirectory NETPROG. To
	install this driver, do the following:
	
	1. Switch to the WINDOWS\SYSTEM subdirectory.
	
	2. Rename the LANMAN.DRV using the proper DOS syntax.
	
	3. Switch to the floppy disk drive where the new LANMAN.DRV is located and copy
	  it into the WINDOWS\SYSTEM subdirectory.
	
	Additional query words: 2.0 3.01 3.00 lanman win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
