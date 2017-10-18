---
layout: page
title: "Q162844: DNS Resolvers Fail on NetBIOS Names When Using Domain Suffixes"
permalink: kb/162/Q162844/
---

## Q162844: DNS Resolvers Fail on NetBIOS Names When Using Domain Suffixes

	Article: Q162844
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows Domain Name Service (DNS) resolvers do not return IP addresses for
	NetBIOS name queries when domain name suffix search order entries are present.
	
	CAUSE
	=====
	
	When the resolver is configured to use domain suffixes, the domain name in
	TCP/IP properties in the Network tool in Control Panel is ignored.
	
	RESOLUTION
	==========
	
	Add your local domain name to the top of the domain name suffix search order.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	In Windows NT 4.0, the suffix search order overrides the domain name.
	
	When the resolver queries a NetBIOS name, the domain name (as specified in TCP/IP
	properties in the Network tool in Control Panel) are appended to the requested
	NetBIOS name, which is sent to the DNS server.
	
	For example, when a client is configured with a domain name of "microsoft.com"
	and the user types "net use \\test\sharename" from a command prompt, a name
	query for "test.microsoft.com." is sent to the DNS Server.
	
	The DNS server (assuming it is the Start of Authority [SOA] for "microsoft.com")
	then searches for an A record for "test." If the A record exists for "test" in
	the "microsoft.com" domain, that address is returned to the resolver.
	
	However, if the resolver has domain suffixes defined in DNS properties in the
	Network tool in Control Panel, the "Domain:" entry is ignored. If domain
	suffixes are defined, the resolver appends the suffixes defined in the domain
	suffix search order. For example, if the user types "net use \\test\sharename"
	and the following suffixes are defined
	
	  .mil
	  .gov
	  .com
	
	the DNS resolver queries for test.mil, test.gov, and test.com, instead of
	appending the domain name and querying for "test.microsoft.com" first. If there
	is a DNS server with WINS resolution enabled, DNS does not attempt to query WINS
	because the DNS server in use is probably not the SOA for .mil, .gov, or .com.
	
	To correct the problem, add the domain name to the top of the suffix search
	order, as shown below:
	
	  .microsoft.com
	  .mil
	  .gov
	  .com
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
