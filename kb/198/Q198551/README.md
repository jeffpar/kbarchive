---
layout: page
title: "Q198551: NSLOOKUP Returns Time-out Error When Query for an MX Record"
permalink: /kb/198/Q198551/
---

## Q198551: NSLOOKUP Returns Time-out Error When Query for an MX Record

{% raw %}

	Article: Q198551
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use Nslookup.exe to query for a Mail Exchanger record (MX), it may fail
	with the following error:
	
	  *** Request to <dnsserver.example.microsoft.com> timed-out
	
	NOTE: <dnsserver.example.microsoft.com> is the host name of the DNS server
	you are querying.
	
	CAUSE
	=====
	
	If the DNS server that you are querying has an MX record in the DNS zone similar
	to
	
	  domainname.example.microsoft.com.    MX    10    192.168.1.1
	
	you may see the error mentioned above.
	
	RESOLUTION
	==========
	
	Change the MX record to point to a host name that will then, in turn, resolve to
	the same IP address. For example, in the domainname.com zone, make the following
	change:
	
	  domainname.example.microsoft.com. MX 10 host1.domainname.example.microsoft.com
	  host1                             A  192.168.1.1
	
	STATUS
	======
	
	This behavior is by design. According to RFC 974:
	
	  Each MX matches a domain name with two pieces of data, a preference value (an
	  unsigned 16-bit integer), and the name of a host.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a
	Version           : winnt:4.0,4.0a
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
