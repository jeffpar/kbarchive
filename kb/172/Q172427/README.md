---
layout: page
title: "Q172427: Web Clients Cannot Resolve Name by Domain Name Only"
permalink: /kb/172/Q172427/
---

## Q172427: Web Clients Cannot Resolve Name by Domain Name Only

	Article: Q172427
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbhowto kbinfo kbArtTypeINF
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your web clients can access your web server using the fully qualified domain
	name (FQDN), but if they attempt to access it using only the domain name, the
	attempt fails.
	
	For example, if your web server's host name is www.mydomain.com, then your
	clients are able to use http://www.mydomain.com to reach your web site, but they
	cannot access the web site using http://mydomain.com.
	
	CAUSE
	=====
	
	There is no A record in your Domain Name Service (DNS) zone to resolve the
	domain name to an IP address.
	
	RESOLUTION
	==========
	
	To resolve this issue, you will need to create an A record in the DNS zone by
	performing the following steps:
	
	1. In DNS Manager, right-click the desired zone, and click New Record.
	
	2. Leave the Host Name box blank.
	
	3. Enter a.b.c.d in the Host IP Address box, where a.b.c.d is the IP address of
	  your web server.
	
	4. Click Create Associated PTR Record to clear this option's check box.
	
	5. Click OK, click DNS, and then click Update Server Data Files.
	
	6. Quit DNS Manager and restart your server.
	======================================================================
	Keywords          : kbnetwork kbhowto kbinfo kbArtTypeINF 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	
