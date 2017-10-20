---
layout: page
title: "Q154555: When to Enter Dotted vs Non-Dotted Names in DNS Manager"
permalink: /kb/154/Q154555/
---

## Q154555: When to Enter Dotted vs Non-Dotted Names in DNS Manager

{% raw %}

	Article: Q154555
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	1. The Domain names at which records are LOCATED (hostname for A, alias for
	  CNAME, domain for SOA or NS, and so forth) must always be entered by creating
	  the domains and entering a single part non-dotted DNS name.
	
	  This policy is to avoid confusion when someone enters a dotted, non- Fully
	  Qualified Domain Name (FQDN). Locate the domain in the tree and enter the
	  name.
	
	2. Domain names which are DATA in a record (NS nameserver, CNAME cannonical
	  name, SOA primary name server and responsible party, MX mail server, and so
	  forth) are always FQDNs.
	
	  This is because these fields are not necessarily in the domain at all. This
	  convention makes it simple; any domain name you type as RR data is considered
	  an FQDN.
	
	Additional query words: prodnt ntdns
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
