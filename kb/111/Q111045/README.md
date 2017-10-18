---
layout: page
title: "Q111045: Boot Partition Size Limit with Compaq SmartSCSI Controller"
permalink: kb/111/Q111045/
---

## Q111045: Boot Partition Size Limit with Compaq SmartSCSI Controller

	Article: Q111045
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The boot partition on a Compaq computer with Compaq's SmartSCSI disk controller
	is limited to 7.9 gigabytes (GB).
	
	For information on size limits of the Windows NT boot partition, please see the
	following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q119497
	  TITLE : Boot Partition Created During Setup Limited to 4 Gigabytes
	
	MORE INFORMATION
	================
	
	The Compaq Smart Controller allows you to create logical drives up to 14 GB.
	However, if you set the boot partition to anything larger than 7.9 GB, Windows
	NT Setup fails immediately, and an error message appears stating that the
	bootable partition is too large.
	
	This error message appears because no miniport driver is loaded to initialize the
	Compaq controller. Consequently, the drive geometry is reported to the system
	through the BIOS. Therefore, the limitation is a result of the 7.9 GB limit
	imposed by the SmartSCSI BIOS.
	
	Compaq uses the SmartSCSI controllers on both Proliant and SystemPro models.
	
	You can call Compaq technical support at (800) 652-6672.
	
	The Compaq products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: prodnt gigabyte
	
	======================================================================
	Keywords          : kb3rdparty kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5
	
	=============================================================================
	
