---
layout: page
title: "Q157930: Multiple DNS Server Addresses Not Assigned Properly with DHCP"
permalink: kb/157/Q157930/
---

## Q157930: Multiple DNS Server Addresses Not Assigned Properly with DHCP

	Article: Q157930
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use multiple Dynamic Host Configuration Protocol (DHCP)
	servers to dynamically assign Domain Name Service (DNS) server addresses to
	multiple network adapters installed in your computer, the DNS server addresses
	may not be assigned properly.
	
	CAUSE
	=====
	
	You cannot manually assign different DNS server addresses to multiple network
	adapters in Windows 95. To assign different DNS server addresses to multiple
	network adapters, you must use DHCP servers. If each network adapter is
	connected to a network that contains a DHCP server, the DHCP servers can be used
	to dynamically assign DNS server addresses to each network adapter. However, the
	Wsock32.dll file included with Windows 95 does not properly implement this
	feature.
	
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
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
