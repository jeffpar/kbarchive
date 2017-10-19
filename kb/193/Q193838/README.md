---
layout: page
title: "Q193838: DNS Zone Transfer Fails from WinNT Server to UNIX DNS Server"
permalink: /kb/193/Q193838/
---

## Q193838: DNS Zone Transfer Fails from WinNT Server to UNIX DNS Server

	Article: Q193838
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When transferring a primary zone from a Microsoft Windows NT 4.0 DNS server to a
	secondary zone on a UNIX DNS server, the zone transfer may fail if the Windows
	NT DNS zone is configured for WINS lookup or WINS Reverse Lookup.
	
	CAUSE
	=====
	
	The Microsoft DNS server may have a WINS or WINS-R (NBTSTAT) record included in
	the DNS file, which is not understood by UNIX DNS. This may cause the zone
	transfer to fail when the UNIX DNS server reaches the record in the transfer.
	The WINS record is the result of configuring WINS Lookup for a zone. The WINS-R
	(NBTSTAT) record is the result of configuring WINS Reverse Lookup for a reverse
	lookup zone.
	
	RESOLUTION
	==========
	
	There is an additional flag that can be set for the WINS and WINS-R (NBTSTAT)
	records in the zone transfer file that allow better interoperability with a UNIX
	DNS server. To avoid sending the WINS or WINS-R (NBTSTAT) records to DNS servers
	that do not have the WINS or WINS-R capability, configure the zone properties to
	specify "Settings only affect local server."
	
	The "Settings only affect local server" configuration will insert the LOCAL flag
	immediately after the WINS or WINS-R (NBTSTAT) record. For example:
	
	  @  0 IN WINS  LOCAL 1.1.1.1  1.1.1.2
	  @  0 IN WINS-R LOCAL domainname.com
	
	On the primary Microsoft NT DNS server, the LOCAL flag keeps the record from
	being sent in a zone transfer.
	
	To configure "Settings only affect local server" for a zone that uses WINS
	Lookup, perform the following steps:
	
	1. Select the zone and right-click it.
	
	2. Click Properties.
	
	3. Click the WINS Lookup tab.
	
	4. Click to select the "Settings only affect local server" check box.
	
	5. Click OK.
	
	6. Click the DNS menu.
	
	7. Click Update Server Data Files.
	
	To configure "Settings only affect local server" for a zone that uses WINS
	Reverse Lookup, perform the following steps:
	
	1. Select the reverse lookup zone and right-click it.
	
	2. Click Properties.
	
	3. Click the WINS Reverse Lookup tab.
	
	4. Click to select the "Settings only affect local server" check box.
	
	5. Click OK.
	
	6. Click the DNS menu.
	
	7. Click Update Server Data Files.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
