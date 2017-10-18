---
layout: page
title: "Q127794: Cannot Load TSRs in NetWare Login Script"
permalink: kb/127/Q127794/
---

## Q127794: Cannot Load TSRs in NetWare Login Script

	Article: Q127794
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are using the Microsoft client for NetWare networks and you are using a
	login script to log on to the NetWare network, any terminate-and- stay-resident
	(TSR) programs in the login script are not loaded.
	
	MORE INFORMATION
	================
	
	This behavior is by design. You cannot load TSRs globally in the login script
	because there is more than one virtual machine (VM) at this time.
	
	Some TSRs require that you be logged on to the network before the TSR can be
	loaded. Since you are not logged on to the network until Windows 95 starts,
	these TSRs cannot be loaded when the AUTOEXEC.BAT file is processed. If you need
	to use a TSR that must be loaded in the login script, you must use the Novell
	NetWare client instead of the Microsoft client for NetWare networks. If a TSR
	does not require that it be loaded in the login script then you can load it in
	the AUTOEXEC.BAT file instead.
	
	Additional query words: nwclient
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
