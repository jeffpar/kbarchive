---
layout: page
title: "Q164176: Interoperability of WINS and Microsoft DNS"
permalink: /kb/164/Q164176/
---

## Q164176: Interoperability of WINS and Microsoft DNS

	Article: Q164176
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbusage
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows NT 4.0 Domain Name System (DNS) Server component has the
	ability to interact with the Windows Internet Name Service (WINS). This article
	outlines these features.
	
	MORE INFORMATION
	================
	
	To allow for interoperability between DNS and WINS, a new resource record was
	defined as part of the Windows NT DNS implementation. This record is called a
	WINS lookup record, and can only be a part of the zone root domain. Any queries
	that cannot be resolved by the static entries in the DNS zone file will be
	forwarded to the WINS server (or servers), defined by the WINS lookup record.
	
	There is also a WINS-R or WINS reverse lookup entry that can be added to the
	IN-ADDR.ARPA file. However, this instructs the DNS server to perform a NetBIOS
	node adapter status lookup, or NS Query, because WINS does not have a reverse
	lookup capability. For details of how this is implemented, please see the
	following Microsoft Knowledge Base article:
	
	  ARTICLE-ID: Q154553
	  TITLE : Windows NT 4.0 DNS WINS Reverse Lookups Do Not Use WINS"
	
	Because the WINS lookup resource record is a proprietary feature, you may want to
	prevent it from being propagated in a zone transfer. If this is the case, add
	the LOCAL flag to the entry in the zone file, or select the Settings only affect
	local server checkbox on the WINS lookup property sheet for the zone's
	properties. When transferring files from a Windows NT Primary DNS Server to a
	BIND Secondary, the WINS and WINS-R records may cause the zone transfer to fail.
	The BIND server can report an error 65281. When you look at the offending
	record, it is the WINS related record.
	
	Additional query words: BIND unix 65281
	======================================================================
	Keywords          : kbnetwork kbusage 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
