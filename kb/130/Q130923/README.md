---
layout: page
title: "Q130923: How To Identify a PCI Boot Controller"
permalink: /kb/130/Q130923/
---

## Q130923: How To Identify a PCI Boot Controller

	Article: Q130923
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	When you install Windows NT on a computer that has more than one PCI
	adapter, you need to determine which adapter will be the boot host adapter.
	The boot host adapter must be the lowest PCI device number. The PCI device
	number is determined by the physical slot number that the device is placed
	in. For example, a adapter placed in slot one would have a lower PCI device
	number than an adapter placed in slot two.
	
	Additional query words: 3.10 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
