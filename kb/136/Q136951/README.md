---
layout: page
title: "Q136951: Released Client IP Address Shows As Active in DHCP Server"
permalink: /kb/136/Q136951/
---

## Q136951: Released Client IP Address Shows As Active in DHCP Server

	Article: Q136951
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run IPCONFIG/RELEASE (or WINIPCFG/RELEASE from Windows95) from a
	DHCP-enabled client computer and the client computer is located on a different
	subnet than the DHCP server, the IP address is released but the address shows up
	in the active lease database on the DHCP server.
	
	CAUSE
	=====
	
	This problem occurs because the DHCP server is not checking the DHCP release
	packet correctly. Because the release packet is sent directly to the server, the
	BOOTP relay agent does not add header information, but the client's IP address
	is in the CIADDR field of the packet. The DHCP server is not looking at the
	CIADDR field and assumes the packet is for a local scope. The DHCP server fails
	to find the client's UID and the release fails.
	
	
	RESOLUTION
	==========
	
	To work around this problem, manually delete the active lease using DHCP
	Manager.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt tcpip dhcp unavailable
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
