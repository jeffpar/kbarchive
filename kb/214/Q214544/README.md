---
layout: page
title: "Q214544: NSLOOKUP Does Not Devolve MX Record Queries"
permalink: /kb/214/Q214544/
---

## Q214544: NSLOOKUP Does Not Devolve MX Record Queries

	Article: Q214544
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	NSLOOKUP, which is included in Windows NT 4.0 Service Pack 4, does not devolve
	record queries for MX and NS records.
	
	Prior to Windows NT 4.0 Service Pack 4, NSLOOKUP displayed the following output:
	
	  c:\nslookup
	  > set q=mx
	  > acmewho.com
	  Server:   blue-dns.acmewho.com
	  Address:  159.55.234.201
	
	  acmewho.com   MX preference = 10, mail exchanger = cool22.acmewho.com
	  acmewho.com   MX preference = 10, mail exchanger = cool23.acmewho.com
	  acmewho.com   MX preference = 10, mail exchanger = tilda1.acmewho.com
	  >
	
	In Service Pack 4, the following output is displayed for the same query:
	
	  > set q=mx
	  > acmewho.com
	  Server:   blue-dns.acmewho.com
	  Address:  159.55.234.201
	
	  dns.acmewho.com
	       primary name server = blue-dns.dns.acmewho.com
	       responsible mail addr = ism.acmewho.com
	       serial  = 1140
	       refresh = 10800 (3 hours)
	       retry   = 1800 (30 mins)
	       expire  = 2419200 (28 days)
	       default TTL = 600 (10 mins)
	
	If a trailing dot is specified, NSLOOKUP works as expected:
	
	  > set q=mx
	  > acmewho.com. (note the trailing dot)
	  Server:   blue-dns.acmewho.com
	  Address:  159.55.234.201
	
	  acmewho.com   MX preference = 10, mail exchanger = cool22.acmewho.com
	  acmewho.com   MX preference = 10, mail exchanger = cool23.acmewho.com
	  acmewho.com   MX preference = 10, mail exchanger = tilda1.acmewho.com
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT 4.0 Service Pack 5.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
