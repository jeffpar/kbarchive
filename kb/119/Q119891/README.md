---
layout: page
title: "Q119891: Floppy Drives Inaccessible on Gateway 2000 Nomad Laptops"
permalink: /kb/119/Q119891/
---

## Q119891: Floppy Drives Inaccessible on Gateway 2000 Nomad Laptops

	Article: Q119891
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10 3.50
	
	WINDOWS
	
	kb3rdparty kbhw
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT on a Gateway 2000 Nomad 425/450 DXL laptop computer,
	the floppy disk drives are not accessible during the GUI portion of Setup. File
	Manager displays the floppy disk icons, but they are inaccessible. Because of
	this, you are unable to create an Emergency Repair Disk, but Windows NT still
	installs correctly.
	
	WORKAROUND
	==========
	
	For most Gateway laptop computers, the Advanced Power Management (APM) software
	is utilized. In order to correct this problem, disable the use of the APM
	software by running a utility called ADVOSOFF.EXE. This utility is recommended
	to be run before you install Windows NT. This utility is available as
	ADVOSOF.EXE on Gateway's BBS at (605) 232-2224, or call Gateway Technical
	Support at (800) 846-2301.
	
	
	The Nomad 425/450 DXL is manufactured by Gateway 2000, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: prodnt 3.10
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
