---
layout: page
title: "Q174339: Error 404 When Accessing Intranet Using NetBIOS Server"
permalink: /kb/174/Q174339/
---

## Q174339: Error 404 When Accessing Intranet Using NetBIOS Server

	Article: Q174339
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95; winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbnetwork win95
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to access an intranet Web site using its NetBIOS name in
	Internet Explorer instead of using its host name, you may receive the following
	error message:
	
	  http:/1.0 404 Object Not Found
	
	Instead of the above error message, you may experience long delays when you
	attempt to load intranet Web pages.
	
	CAUSE
	=====
	
	The client system on which you are running Internet Explorer has a domain name
	configured within its TCP/IP properties.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods:
	
	- Add the web server's NetBIOS name to your Domain Name Service (DNS) server.
	  This will keep the DNS server from forwarding the query to other DNS servers
	  -- possibly root servers on the Internet -- in an attempt to resolve the
	  name. If your DNS server is authoritative for the domain being queried, it
	  can respond almost instantly with a positive or negative response, avoiding
	  any timeouts. If the DNS server is not authoritative for the domain being
	  queried, and its cache file contains root servers, it will forward the name
	  query to the root servers that are authoritative for that domain and wait for
	  a response before replying to the client. This can make the client wait up to
	  five seconds, after which time it will resend its query to the same DNS
	  server.
	
	-or-
	
	- If the client receives DNS server IP addresses from a Dynamic Host
	  Configuration Protocol (DHCP) server, do not configure static DNS server IP
	  addresses in the client's TCP/IP properties. This increases the number of
	  servers from which it will wait for a response before trying to resolve the
	  name via a NetBIOS name service.
	
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q165826 Problems Using Internet Explorer with a Proxy Server
	
	MORE INFORMATION
	================
	
	When you type a name in the address line of Internet Explorer, such as "server",
	and your computer is configured with a domain name, such as "domain.com", a name
	query is first sent with the domain appended to the name, "server.domain.com".
	This query will be sent to all DNS servers for which your computer is configured
	before trying to resolve the name of just "server" through a NetBIOS naming
	service such as Windows Internet Name Service (WINS).
	
	Computers configured for DHCP and running Windows 95 and Windows NT that have DNS
	server addresses manually specified in their TCP/IP configuration will
	effectively have four DNS servers to send queries to. The client will try to use
	all DNS addresses available. The client queries its primary and secondary DNS
	addresses first and it will then wait for a response for up to five seconds
	before querying again. If it fails to resolve the name on the first two servers,
	it will then try the third and fourth DNS addresses and wait for responses from
	them. While waiting for these servers to respond, the client browser may
	timeout.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbinterop kbnetwork win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
