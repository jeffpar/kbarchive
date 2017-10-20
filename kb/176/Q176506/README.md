---
layout: page
title: "Q176506: Radius Accounting Only Logs One Entry for Multilink Client"
permalink: /kb/176/Q176506/
---

## Q176506: Radius Accounting Only Logs One Entry for Multilink Client

{% raw %}

	Article: Q176506
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop kbnetwork _IK12469
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Routing and Remote Access service (RRAS) update with RADIUS
	authentication and accounting, your RADIUS server will only log one entry even
	when a multilink Remote Access Service (RAS) client connects.
	
	CAUSE
	=====
	
	The RRAS server is only sending one accounting log when a multilink client
	connects to it, instead of sending one accounting log for each port the client
	is using. For example, the RRAS server should have two accounting logs for a RAS
	client when it connects using ISDN at 128 Kbps (64 Kbps x 2).
	
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
	
	www.microsoft.com
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbinterop kbnetwork _IK12469 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : :4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
