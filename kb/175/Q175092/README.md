---
layout: page
title: "Q175092: 0E Exception in VNETBIOS if NetBIOS Commands Are Issued Quickly"
permalink: kb/175/Q175092/
---

## Q175092: 0E Exception in VNETBIOS if NetBIOS Commands Are Issued Quickly

	Article: Q175092
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork win95kbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a program in Windows 95 that uses the NetBIOS Application
	Programming Interface (API) and issues multiple NetBIOS commands in a very short
	time, you may receive the following error message:
	
	  A fatal exception 0E has occurred at 0028:<xxxxxxxx> in VxD
	  VNETBIOS(01) + 5EB.
	
	CAUSE
	=====
	
	This problem can occur if three or more asynchronous network control blocks
	(NCBs), or NCBs from different threads or processes, are started for the AddName
	function before the first NCB completes.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnetwork win95 kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
