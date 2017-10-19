---
layout: page
title: "Q192407: Caching-Only DNS Server Incorrectly Reports &quot;Name Error&quot;"
permalink: /kb/192/Q192407/
---

## Q192407: Caching-Only DNS Server Incorrectly Reports &quot;Name Error&quot;

	Article: Q192407
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A caching-only DNS server incorrectly returns a "Name Error" message when
	looking up a wildcard MX record. This occurs when another computer has recently
	looked up an "A" record with the same node name, and the "A" record is
	nonexistent. The record is held in cache on the caching-only server, and marked
	as Name Error. Future wildcard "MX" record lookups for the node name return Name
	Error until the cache is flushed on the caching- only DNS server.
	
	Some UNIX mail servers query for a type "A" host name before querying for an "MX"
	record and, therefore, may not be able to properly deliver mail when Name Error
	is returned.
	
	CAUSE
	=====
	
	When the initial type "A" lookup is performed, the authoritative server replies
	with a "Name Error" message. The caching-only name server responds correctly by
	keeping this Name Error information in cache so that additional lookups do not
	require additional referrals from the authoritative DNS Server. When the
	wildcard "MX" request is received following the type "A" lookup, the caching
	server reads from cache and returns "Name Error" for the node.
	
	Only in the wildcard MX record case, where the "A" record would be nonexistent
	while the MX record would be resolvable, would an incorrect error be generated.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Windows NT
	service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time                 Size    File Name     Platform
	  -------------------------------------------------------------
	  08/22/98  12:48p               176,912 Dns.exe       (x86)
	  08/22/98  01:04p                65,808 Nslookup.exe  (x86)
	
	  08/22/98  12:47p               297,744 Dns.exe       (Alpha)
	  08/22/98  01:02p                93,456 Nslookup.exe  (Alpha)
	
	
	With the above fix, the authoritative name server responds to a query for a
	nonexistent hostname with error code 0. The caching-only server does not cache
	the name with error code 0, "No Error."
	
	Please note that Dns.exe must be replaced on the authoritative server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
