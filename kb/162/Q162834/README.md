---
layout: page
title: "Q162834: RRAS Stops Routing After Encountering Zero Checksum"
permalink: /kb/162/Q162834/
---

## Q162834: RRAS Stops Routing After Encountering Zero Checksum

	Article: Q162834
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Your Routing and Remote Access Service (RRAS) Server may stop routing network
	between segments and you may receive some event log messages regarding checksum
	errors from neighbors.
	
	CAUSE
	=====
	
	One of your neighboring routers has sent a packet containing something other
	than ffff. When the checksum of a packet equals zero, which is illegal, RRAS
	expects to receive ffff.
	
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
	
	
	Additional query words: protocol
	======================================================================
	Keywords          : kb3rdparty kbinterop kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
