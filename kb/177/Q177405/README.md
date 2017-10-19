---
layout: page
title: "Q177405: Disabled Zones or Failed Reverse Queries Using DNS Root Server"
permalink: /kb/177/Q177405/
---

## Q177405: Disabled Zones or Failed Reverse Queries Using DNS Root Server

	Article: Q177405
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your network, which is using a Microsoft Windows NT Domain Name Service (DNS)
	server, may experience one or more of the following problems:
	
	- DNS Manager on your DNS server may display some of the zone objects with a
	  red X, indicating that they are disabled.
	
	  -or-
	
	- DNS clients on the network may be unable to resolve reverse name lookups
	  successfully.
	
	CAUSE
	=====
	
	Your DNS server has its reverse zone, in-addr.arpa, configured as a subdomain of
	the root zone (.).
	
	RESOLUTION
	==========
	
	To resolve these issues, reconfigure your DNS server so that the reverse zone,
	in-addr.arpa, is a separate zone and not a subdomain of the root zone. Then add
	your PTR records or delegations within the in-addr.arpa zone.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
