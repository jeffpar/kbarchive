---
layout: page
title: "Q104296: RRAS Uses Larger MTU Than Other OSPF Routers"
permalink: /kb/104/Q104296/
---

## Q104296: RRAS Uses Larger MTU Than Other OSPF Routers

{% raw %}

	Article: Q104296
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	--------
	
	Your Routing and Remote Access Service (RRAS) server that is using Open
	Shortest Path First (OSPF) is transmitting network packets larger than your
	other OSPF routers. Therefore, the other OSPF routers must fragment the
	packets coming from your RRAS server.
	
	CAUSE
	-----
	
	RRAS sets the maximum transmission unit (MTU) equal to the specified value
	in the Advanced properties of the OSPF Configuration dialog box for your
	OSPF interface; however, other OSPF routers set the MTU to their specified
	value minus the IP header.
	
	STATUS
	------
	
	Microsoft has confirmed this to be a problem in Routing and Remote Access
	Update for Windows NT Server version 4.0. This problem was corrected in
	the Routing & Remote Access Service Hotfix Update. You can obtain this
	update from Microsoft's World Wide Web Site on the Internet at the
	following location:
	
	http://www.microsoft.com/ntserver/commserv/exec/feature/routing.asp
	
	NOTE: Because the Microsoft Web site is constantly updated, the site
	address may change without notice. If this occurs, link to the Microsoft
	home page at the following address:
	
	http://www.microsoft.com
	
	Additional query words: routing protocol
	
	======================================================================
	Keywords          : kbinterop kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
