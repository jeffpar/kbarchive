---
layout: page
title: "Q164352: Stop 0x00000050 in Tcpip.sys Caused by Winsock Applications"
permalink: kb/164/Q164352/
---

## Q164352: Stop 0x00000050 in Tcpip.sys Caused by Winsock Applications

	Article: Q164352
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbSDKPlatform kbWinsock kbGrpDSNetkbbuglist kbfixlist
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A Winsock application may cause a Stop 0x00000050 PAGE_FAULT_IN_NONPAGED_AREA
	error in Afd.sys.
	
	CAUSE
	=====
	
	The application passes a socket address length that is larger than the maximum
	socket address length in the TDI buffer in Afd.sys. The socket address data that
	goes beyond the MaxSockaddrLength overwrites the stack.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt ndis
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbSDKPlatform kbWinsock kbGrpDSNet kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
