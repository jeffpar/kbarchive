---
layout: page
title: "Q126652: FDDI MAC Address Issue with Windows NT 3.5"
permalink: kb/126/Q126652/
---

## Q126652: FDDI MAC Address Issue with Windows NT 3.5

	Article: Q126652
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Unlike the Ethernet standard, FDDI and TokenRing are capable of using
	non-canonical or canonical formatting for the MAC Address. If the MAC address
	for a FDDI node is 800000000000 through FFFFFFFFFFFF, and TCP/IP is being used
	as the transport protocol, you lose connectivity.
	
	CAUSE
	=====
	
	Windows NT reads the MAC addresses in canonical format and does not properly
	translate the most significant bit (MSB). In FDDI and TR, if the node address is
	0x020406080A0C, then 0x20406080A0C0 goes out on the wire. The bit the should be
	checked is 0x01 instead of 0x80, for the most significant bit (for directed vs.
	multicast).
	
	STATUS
	------
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.5. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	S E R V P A C K
	
	Additional query words: 3.50 prodnt token ring
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	
