---
layout: page
title: "Q170316: Client Receives Error When Resolving Fully Qualified Domain Name"
permalink: /kb/170/Q170316/
---

## Q170316: Client Receives Error When Resolving Fully Qualified Domain Name

	Article: Q170316
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:1.0,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempts to resolve fully qualified domain names (FQDN) for your internal domain
	fail, resulting in error messages from your applications similar to the
	following:
	
	  Host not found
	
	  -or-
	
	  Bad IP Address <host name>.
	
	CAUSE
	=====
	
	The Microsoft Proxy Client may cause this problem if it is incorrectly
	configured.
	
	RESOLUTION
	==========
	
	Edit the Mspclnt.ini file to add your internal domain suffixes as described in
	the Microsoft Proxy Client documentation using the LocalDomains entry.
	
	Using a text editor, open the Mspclnt.ini file and add or edit the LocalDomains
	entry in the [Common] section and set it equal to any domain suffixes that exist
	on your internal network.
	
	For example:
	
	  [Common]
	  LocalDomains = test.lab.com, lab.com
	
	MORE INFORMATION
	================
	
	The Microsoft Proxy Client will, by default, forward all FQDN name queries to
	the proxy server on your network. The proxy server then forwards these queries
	to its DNS server, which is most likely on the Internet. Unless your internal
	domain name(s) are registered on the Internet, the name resolution for the
	internal domain name will fail when processed by an external DNS.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:1.0,3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
