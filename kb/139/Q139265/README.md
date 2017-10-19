---
layout: page
title: "Q139265: Times Matching on DHCP Clients and Servers"
permalink: /kb/139/Q139265/
---

## Q139265: Times Matching on DHCP Clients and Servers

	Article: Q139265
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view the active leases on your Dynamic host configuration protocol
	(DHCP) server in DHCP Manager some of the client leases may be unavailable
	(grayed out).
	
	CAUSE
	=====
	
	The DHCP server's clock has been advanced so that it considers these leases
	expired.
	
	RESOLUTION
	==========
	
	To resolve this issue, you will need to perform the following:
	
	1. Verify that the clock times on the DHCP server and clients are correct for
	  their location, taking into consideration time zones.
	
	2. Renew the affected clients' IP leases:
	
	  Windows NT
	  ----------
	
	  Type the following at a command prompt and press enter:
	
	  " ipconfig /renew " (without the quotation marks)
	
	  Windows 95
	  ----------
	
	  Start Winipcfg.exe and click Renew all.
	
	MORE INFORMATION
	================
	
	When a DHCP server leases an address to a client, it sends a lease duration. The
	client then knows that the lease expires at CurrentTime + LeaseDuration. The
	DHCP server also sets the active lease with CurrentTime + LeaseDuration. If the
	date or time on the server advances for any reason it may prematurely age the
	leases that it maintains.
	
	For example, if a DHCP server hands out a lease at Noon and then the time on the
	DHCP server is adjusted three hours ahead it has the same effect as the lease
	aging three hours as far as the server is concerned. There is no communication
	to the DHCP clients about the change.
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
