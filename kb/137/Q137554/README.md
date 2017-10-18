---
layout: page
title: "Q137554: Password Change Fails Using DNS to Resolve Names"
permalink: kb/137/Q137554/
---

## Q137554: Password Change Fails Using DNS to Resolve Names

	Article: Q137554
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When DNS is used to resolve names from Windows NT 3.5, the operation of changing
	a password may fail.
	
	MORE INFORMATION
	================
	
	This problem occurs over TCP/IP because the client computer sending the request
	to resolve the name of the domain receives a response for the IP address of the
	PDC (Primary Domain Controller) from the DNS Server, but attempts to form a
	session with the PDC with the name of the domain as the destination instead of
	the name of the PDC. This results in a Negative Session Response from the
	primary domain controller with status Caller Name Not Found.
	
	
	Under Windows NT 3.51, the three way-handshake and session setup are preceded by
	a NetBT request from the client computer for registered services on the PDC.
	Upon receiving the response, the client correctly establishes a session to the
	PDC with the PDCs machine name as the destination.
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT 3.51.
	
	Additional query words: prodnt unable change C00000E5 service
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	
