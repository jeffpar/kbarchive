---
layout: page
title: "Q117414: Communication Through FDDI to MAC Address Fails"
permalink: kb/117/Q117414/
---

## Q117414: Communication Through FDDI to MAC Address Fails

	Article: Q117414
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Windows NT tries to communicate through an FDDI card to a computer with a
	MAC address that has the MSB set, the two computers are not able to communicate.
	
	CAUSE
	=====
	
	The high bit of the MAC address is being cleared in the response from the
	Windows NT computer. If Windows NT receives a packet that has a source MAC
	address of AA0000000001, it responds to MAC address 2A0000000001 (the MSB of the
	MAC address has been cleared).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem has been corrected in Windows NT
	Workstation and Windows NT Server version 3.5. This problem has also been
	corrected in the latest U.S. Service Pack for Windows NT and Windows NT Advanced
	Server version 3.1. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
