---
layout: page
title: "Q268742: PPTP Filtering Disables IP Forwarding"
permalink: /kb/268/Q268742/
---

## Q268742: PPTP Filtering Disables IP Forwarding

	Article: Q268742
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows NT 4.0-based server may not route IP packets after you enable IP
	forwarding and reboot the computer. The clients on the server's local segments
	are correctly configured to use the IP address that is assigned to the server's
	local interface as their default gateway, but cannot ping from one segment to
	another other.
	
	CAUSE
	=====
	
	This behavior can occur if Point-to-Point Tunneling Protocol (PPTP) filtering is
	enabled on at least one of the network adapters on the Windows NT-based server.
	
	RESOLUTION
	==========
	
	Disable PPTP filtering. To do so, view the TCP/IP properties, click Advanced,
	and then click to clear the Enable PPTP Filtering check box.
	
	MORE INFORMATION
	================
	
	PPTP filtering disables the network adapter for all communications except for
	PPTP.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
