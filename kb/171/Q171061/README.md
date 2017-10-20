---
layout: page
title: "Q171061: RIP Does Not Advertise Zero Subnets"
permalink: /kb/171/Q171061/
---

## Q171061: RIP Does Not Advertise Zero Subnets

{% raw %}

	Article: Q171061
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Your computer running both Windows NT Server and the Routing and Remote Access
	service are not advertising all of the correct routes to all of your networks.
	The subnets that are not being advertised are the subnets with a zero as the
	last octet in the subnet ID.
	
	CAUSE
	=====
	
	The Routing and Remote Access servers discard zero subnet advertisements.
	
	RESOLUTION
	==========
	
	Obtain the Routing & Remote Access Service Hotfix Update mentioned below.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Routing and Remote Access Update
	for Windows NT Server version 4.0. This problem was corrected in the Routing
	& Remote Access Service Hotfix Update. You can obtain this update from
	Microsoft's World Wide Web Site on the Internet at the following location:
	
	  http://www.microsoft.com/ntserver/commserv/exec/feature/routing.asp
	
	NOTE: Because the Microsoft Web site is constantly updated, the site address may
	change without notice. If this occurs, link to the Microsoft home page at the
	following address:
	
	  http://www.microsoft.com/
	
	MORE INFORMATION
	================
	
	The zero subnet is easier to identify using the following example:
	
	Consider a class B address of 172.16.0.0 that is subnetted with a 255.255.192.0
	mask. The valid subnet IDs will be 172.16.0.0, 172.16.64.0, 172.16.128.0, and
	172.16.192.0. For this example, 172.16.0.0 is the zero subnet ID. This zero
	subnet will not be advertised and, therefore, will not be reachable from other
	networks.
	
	Traditionally, a zero subnet ID was considered invalid, but the practice of
	discarding these subnets is now obsolete. A complete discussion of this practice
	can be found in RFC 1878, which has superceded RFC950, and can be found at the
	following Internet location:
	
	  http://www.rfc-editor.org
	
	Additional query words: rras
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
