---
layout: page
title: "Q134701: Uninitialized Pointers in DHCPSSVC.DLL Cause Access Violation"
permalink: /kb/134/Q134701/
---

## Q134701: Uninitialized Pointers in DHCPSSVC.DLL Cause Access Violation

{% raw %}

	Article: Q134701
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a remote procedure call (RPC) tries to determine the size of the LPWSTR
	variable in the DHCP_Subnet_Info structure on your Windows NT DHCP server,
	DHCPSSVC.DLL causes an Access Violation.
	
	
	CAUSE
	=====
	
	The pointers for the NetBiosName and HostName strings point to random memory
	addresses.
	
	Due to a problem in DHCPSSVC.DLL the NetBiosName and HostName strings are not
	initialized to NULL, even though they appear to be NULL in the SubNet
	information subkey of the Windows NT Registry.
	
	
	RESOLUTION
	==========
	
	To correct this problem, install the latest U.S. Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	

{% endraw %}
