---
layout: page
title: "Q169984: Windows 95 Ne2000.sys Driver Does Not Support LAA"
permalink: kb/169/Q169984/
---

## Q169984: Windows 95 Ne2000.sys Driver Does Not Support LAA

	Article: Q169984
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kbnetwork win95kbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Ne2000.sys driver file included with Windows 95 does not support Locally
	Administered Addresses (LAA).
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	An LAA is set as a data string in the following registry key
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Class\Net\000<x>\
	  NetworkAddress
	
	where <x> is the number of the network adapter.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbnetwork win95 kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
