---
layout: page
title: "Q194129: Microsoft DNS Fails to Acquire Zone Transfer from BIND Primary"
permalink: /kb/194/Q194129/
---

## Q194129: Microsoft DNS Fails to Acquire Zone Transfer from BIND Primary

	Article: Q194129
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Changes made to a BIND primary DNS zone file are not being seen by a Microsoft
	DNS server configured as a secondary.
	
	CAUSE
	=====
	
	BIND does not automatically update the serial number in the SOA record. DNS
	secondaries determine if a zone transfer (AXFR) is required by querying for the
	SOA from the primary zone. If the serial number in the primary's SOA is
	identical to the serial number in the secondary, the zone data is assumed not to
	have changed and a zone transfer is not requested.
	
	RESOLUTION
	==========
	
	With a BIND primary, it will be necessary to manually update the SOA serial
	number (sometimes called the magic number) so that automatic zone transfers can
	be performed between the BIND server and a Microsoft DNS server.
	
	MORE INFORMATION
	================
	
	For more information, see RFC1034 paragraph 4.3.5: Zone Maintenance and
	Transfers.
	
	Additional query words: DNS Bind zone
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
